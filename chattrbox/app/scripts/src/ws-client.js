let socket;

function init(url) {
  socket = new WebSocket(url);
  console.log("connecting...");
}

function registerOpenHandler(handler) {
  socket.onopen = () => {
    console.log('open');
    handler();
  }
}

function registerMessageHandler(handler) {
  socket.onmessage = (e) => {
    console.log('message:', e.data);
    let data = JSON.parse(e.data);
    handler(data);
  }
}

function sendMessage(payload) {
  socket.send(JSON.stringify(payload));
}

export default {
  init,
  registerOpenHandler,
  registerMessageHandler,
  sendMessage
}
