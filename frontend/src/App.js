import React from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import io from "socket.io-client";

function App() {
  const socketRef = React.useRef();
  socketRef.current = io.connect("http://localhost:5500");

  const sendMessage = (msg) => socketRef.current.emit("new-message", msg);

  React.useEffect(() => {
    socketRef.current.on("connect", () => {
      socketRef.current.on("add-new-message", (msg) => addResponseMessage(msg));
    });
  });
  return <Widget title="Chat" subtitle="" handleNewUserMessage={sendMessage} />;
}

export default App;
