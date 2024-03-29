import socket from './ws-client.js';
import {ChatForm, ChatList, promptForUserName} from './dom.js';
import {UserStore} from './storage.js';

const FORM_SELECTOR = '[data-chat="chat-form"]';
const INPUT_SELECTOR = '[data-chat="message-input"]';
const LIST_SELECTOR = '[data-chat="message-list"]';

let userStore = new UserStore('x-chartbox/u');
let username = userStore.get();
if (!username) {
  username = promptForUserName();
  userStore.set(username);
}

class ChatApp {
  constructor() {
    this.chatForm = new ChatForm(FORM_SELECTOR, INPUT_SELECTOR);
    this.chatList = new ChatList(LIST_SELECTOR, username);

    console.log('Hello ES6');
    socket.init("ws://localhost:3001");

    socket.registerOpenHandler(() => {
      this.chatForm.init((data) => {
        let message = new ChatMessage({ message: data});
        socket.sendMessage(message.serialize());
      })
    });
    this.chatList.init();

    socket.registerMessageHandler((data) => {
      console.log(data);
      let message = new ChatMessage(data);
      this.chatList.drawMessage(message.serialize() );
    });
  }
}

class ChatMessage {
  constructor(data) {
    var {
      message: m,
      user: u = username,
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
