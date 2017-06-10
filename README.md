# mongogo README

This will allow you to configure and run the mongo shell inside of Visual Studio Code on Windows. It will also allow you to send code you have holighted directly to the shell.

## Features

This adds a context menu for .js files that will allow you to run the selected text in the mongo shell. Running the mongo shell will also give you a fully interactive mongo shell terminal in the vs code window.

##Preview
![MongoGoPreview](https://raw.githubusercontent.com/bagonaut/mongogo/master/images/mongogo.gif)

## Requirements

This extension requires that you have the mongo shell installed somehwere

## Extension Settings


This extension contributes the following settings:

* `mongoShell.path`: Escaped path to mongo.exe shell
* `mongoShell.host`: --host parameter for mongo shell
* `mongoShell.port`: --port parameter for mongo shell

## Known Issues

Only works on Windows. Includes workaround vscode bug 8429. https://github.com/Microsoft/vscode/issues/8429

## Release Notes

Happy path code complete

### 0.0.1

Initial release of mongogo

### 0.0.5

Added Documentation.

-----------------------------------------------------------------------------------------------------------



**Enjoy!**