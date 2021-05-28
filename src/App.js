import React, { useState, useEffect } from "react";
import axios from "axios";
import MessageSender from "./components/MessageSender";
import MessageList from "./components/MessageList";

export default function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchMessages() {
      const response = await axios({
        method: "get",
        url: "/iecho/messages",
      });

      setMessages(response.data.messages);
    }

    fetchMessages();
  }, []);

  const sendMessage = async (text) => {
    const response = await axios({
      method: "get",
      url: "/iecho",
      params: {
        text,
      },
    });

    if (response.status === 200) setMessages([response.data].concat(messages));
  };

  return (
    <div style={{ backgroundColor: "#d9d9d9" }}>
      <MessageSender sendMessage={sendMessage} />
      <MessageList messages={messages} />
    </div>
  );
}
