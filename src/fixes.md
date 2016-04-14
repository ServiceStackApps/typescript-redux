fixed Object.assign undefined runtime error in IE/Edge by explicitly importing and referencing the ES6 shim

fixed load error in IE/Edge by adding a shim for EventSource
to figure out that a shim was missing, I took the console message "Potentially unhandled rejection" to Google,
and found [http://stackoverflow.com/questions/32093809/simple-angular-2-app-gives-potentially-unhandled-rejection-error]
adding the catch as per below shows a full error object that can be drilled down to the stack trace
``` System.import("./src/example09/app").catch(console.log.bind(console));

Also see img missing-eventsource-shim-error.png