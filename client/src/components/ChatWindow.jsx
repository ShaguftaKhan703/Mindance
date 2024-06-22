import { ChatEngine } from 'react-chat-engine';
import '../assets/css/ChatWindow.css';

const ChatWindow = (props) => {
  const CHAT_ENGINE_PROJECT_ID = 'a5cdc135-5d8e-4274-9f9a-3524c56696ae';

  return (
    <div>
      <ChatEngine
        projectID={CHAT_ENGINE_PROJECT_ID}
        userName={props.user.username}
        userSecret={props.user.secret}
        height='100vh'
        offset={6}
      />
    </div>
  );
};

export default ChatWindow;