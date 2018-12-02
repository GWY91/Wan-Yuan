var builder = require('botbuilder');
var restify = require('restify');
var apiairecognizer = require('api-ai-recognizer');
var request = require('request');

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat bot
var connector = new builder.ChatConnector({
    appId: 639378,
    appPassword: 6f0765bb13706a00d00966cd0fbb7512
});

var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector);

var recognizer = new apiairecognizer("03898b0ec44c4317b11617a27f05b61c");
var intents = new builder.IntentDialog({
         recognizers: [recognizer]
});

bot.dialog('/',intents);

intents.matches('y?',[
  session.send("Combination of skills will allow me to analyse business metrics more efficiently.");
    }),

intents.onDefault(function(session){
    session.send("Sorry...can you please rephrase?");
});
