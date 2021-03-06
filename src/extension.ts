'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';



class MongoTerminal 
{
    private _mongoTerminal; // singleton pattern for now

    public runMongoCode () {
        // send text here
        //var pruner = new RegExp("\n\n");    Regex not needed in this version    
        // grab terminal, take active editor, take selected text, run through regex, and send to toermianl
        var targetChunk = vscode.window.activeTextEditor.selection;
        // selection is the range, pass to getText to get text
        var targetText = vscode.window.activeTextEditor.document.getText(targetChunk);
        this._mongoTerminal.show();
        this._mongoTerminal.sendText(targetText);
        var footr = 1;
}
    public NewMongoTerminal()
    {
        if (!this._mongoTerminal) {

            var os = require('os');
            var fs = require('fs');
    
            var tmpPath: string = os.tmpdir();
            var configSettings = vscode.workspace.getConfiguration('mongoShell');

            var mongoLocation: string = configSettings.path;
            var args: string = ""; // Compose args string from settings in config file.
            if (configSettings.host != "" ) {args += " --host " + configSettings.host };
            if (configSettings.port != "" ) {args += " --port " + configSettings.port };
            if (configSettings.verbose) {args += " --verbose"};
            if (configSettings.quiet) {args += " --quiet"};
            var mongoLaunchString = mongoLocation + " " + args;
            var launchRoot: string = tmpPath + "\\LaunchMongo"+ process.pid.toString() +".bat"; // per process bat. Can change config between launches
            fs.writeFileSync(launchRoot, mongoLaunchString, 'utf8');
            console.log(mongoLaunchString);
            this._mongoTerminal = vscode.window.createTerminal("Mongo Shell", launchRoot, null )
            this._mongoTerminal.show();
            //vscode.window.showInformationMessage('Mongo launched: ' + mongoLaunchString);
        }
    }

    dispose() {
        this._mongoTerminal.dispose();
        this._mongoTerminal = null;
    }
}



// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate( context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    //console.log('Congratulations, your extension "mongogo" is now active!');
    //var cp = require('child_process');
    //var path = require('path'); // will has to use path for multiplatform
    let mongoTerminal = new MongoTerminal();
    
    vscode.window.onDidCloseTerminal(function(event) {
        mongoTerminal.dispose(); 
    });

    // The command has been defined in the package.json file

    let launchMongo = vscode.commands.registerCommand('extension.launchMongo', () => {

        // Command for launching  mongo from shell
        mongoTerminal.NewMongoTerminal();
       
    });

    let runMongo = vscode.commands.registerCommand('extension.runMongo', () => {
        
        mongoTerminal.NewMongoTerminal(); // will follow singleton

        mongoTerminal.runMongoCode();

    });

    context.subscriptions.push(mongoTerminal);
    context.subscriptions.push(launchMongo);
    context.subscriptions.push(runMongo);
}

//exports.TerminalStack = TerminalStack;
// this method is called when your extension is deactivated
export function deactivate() {
}