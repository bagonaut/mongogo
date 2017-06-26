# mongogo README

This will allow you to configure and run the mongo shell inside of Visual Studio Code on Windows. It will also allow you to send code you have hilighted directly to the shell.

## Features

This adds a context menu for .js files that will allow you to run the selected text in the mongo shell. Running the mongo shell will also give you a fully interactive mongo shell terminal in the vs code window.

##Preview
![MongoGoPreview](https://raw.githubusercontent.com/bagonaut/mongogo/master/images/mongogo.gif)

## Requirements

This extension requires that you have the mongo shell installed somehwere, and have your workspace configured to point at the executable. Also, this means that you need to have a running mongod instance to point the client at. Otherwise, the client will terminate, and the shell will close.

## Extension Settings


This extension contributes the following settings:

* `mongoShell.path`: Escaped path to mongo.exe shell [MANDATORY]
* `mongoShell.host`: --host parameter for mongo shell (optional)
* `mongoShell.port`: --port parameter for mongo shell (optional)
* `mongoShell.verbose`: --verbose parameter for mongo shell (optional)
* `mongoShell.quiet`: --quiet parameter for mongo shell (optional)

# If people are comfortable with adding login information that would be logged to a temp file in user space, I can do that. Drop a comment on my github.

## Known Issues

Only works on Windows. Includes workaround vscode bug 8429. https://github.com/Microsoft/vscode/issues/8429

Use Issues page to communicate any requests and/or issues.
https://github.com/bagonaut/mongogo/issues 

## Release Notes

Happy path code complete. 

### 0.0.1

Initial release of mongogo

### 0.0.5

Added Documentation.

### 0.0.10
Fixed Typos, added some command line args.

-----------------------------------------------------------------------------------------------------------



**Enjoy!**
