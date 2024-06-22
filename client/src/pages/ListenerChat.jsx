import { useState } from "react";
import ChatAuth from "../components/ChatAuth";
import ChatWindow from "../components/ChatWindow";

const ListenerChat = () => {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <ChatAuth onAuth={(user) => setUser(user)} />
  } else {
    return <ChatWindow user={user} />
  }
};

export default ListenerChat;