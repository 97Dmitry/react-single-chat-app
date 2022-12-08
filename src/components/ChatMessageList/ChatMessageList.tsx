import { FC } from "react";
import { Message } from "types/common";

interface ChatMessageListProps {
  messages: Message[];
}

const ChatMessageList: FC<ChatMessageListProps> = ({ messages }) => {
  return (
    <>
      {messages.map((mes) => (
        <div key={mes.messageId}>{mes.message}</div>
      ))}
    </>
  );
};

export default ChatMessageList;
