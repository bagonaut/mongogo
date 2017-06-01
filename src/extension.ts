'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';


var win32 = process.platform === 'win32';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "mongogo" is now active!');
    var cp = require('child_process');
    var path = require('path');
    var os = require('os');
    var fs = require('fs');

    var tmpPath: string = os.tmpdir();

    var mongoLocation: string = "C:\\MongoDB\\Server\\3.2\\bin\\mongo.exe";

    var args: string = "";
    var mongoLaunchString: string = mongoLocation + " " + args;
    var launchRoot: string = tmpPath + "\\LaunchMongo.bat";

    fs.writeFileSync(launchRoot, mongoLaunchString, 'utf8');

        //vscode.workspace.rootPath
    
    
    console.log(mongoLaunchString);
    var terminal = vscode.window.createTerminal("Mongo Shell", launchRoot, null )
    terminal.show();
        //var writer = cp.spawn
    var foo = 1;

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}