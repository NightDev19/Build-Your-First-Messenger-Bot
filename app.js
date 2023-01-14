const fs = require("fs");
const { keep_alive } = require("./keep_alive.js");
const http = require('https');
const login = require("fca-unofficial");
const cd = {};
const msgs = {};

let prefix = '$';
let admin = ['100081144393297'];


login({ appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8')) }, (err, api) => {
    if (err) return console.error(err);
    api.setOptions({ listenEvents: true });
    const listenEmitter = api.listen(async (err, event) => {
        if (err) return console.error(err);
        switch (event.type) { 
        
            case "message":
            if (event.body != null) {
               let message = event.body;
               
               
if(message == "Hello") {
	api.sendMessage("Hi", event.threadID);
} 
if(message == "Hi") {
	api.sendMessage("Hello", event.threadID);
}

if(startsWith("Kei")) {
    const axios = require("axios");
    let text = message.substring(5);
    let data = message.split(" ");
    if (data.length < 2) {
    	api.sendMessage(`⚠️Invalid Use Of Command!\n💡Usage: ${prefix}kei [ask]`, event.threadID);
    } else {
        let a = axios.get(`https://api.libyzxy0.repl.co/api/aiAsk?query=${text}`);
        a.then(response => {
        	api.sendMessage(response.data.result.message, event.threadID, event.messageID)
  })
    }
}
               
               
               
    }   
  }   
 });
});
