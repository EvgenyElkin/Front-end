import socket from './ws-client.js';

class ChatApp {
  constructor() {
    console.log('Hello ES6');
    socket.init("ws://localhost:3001");

    socket.registerOpenHandler(() => {
      let message = new ChatMessage({ message : "Boom!"});
      socket.sendMessage(message);
    });

    socket.registerMessageHandler((data) => {
      console.log(data);
    });
  }
}

class ChatMessage {
  constructor(data) {
    var {
      message: m,
      user: u = 'batman',
      timestamp: t = (new Date().getTime())
    } = data;
    this.message = m;
    this.user = u;
    this.timestamp = t;
  }

  serialize() {
    return {
      user: this.user,
      message: this.message,
      timestamp: this.timestamp
    }
  }
}

export default ChatApp;
