import { MessageItem } from "components";
import { FC, MutableRefObject } from "react";
import { Message, User } from "types/common";

import styles from "./styles.module.css";

interface ChatMessageListProps {
  user: User;
  messages: Message[];
  className?: string;
  messageListRef?: MutableRefObject<HTMLDivElement>;
}

const ChatMessageList: FC<ChatMessageListProps> = ({ messages, className = "", messageListRef, user }) => {
  return (
    <div className={`d-flex flex-column overflow-auto overflow-auto  ${className} ${styles.root}`} ref={messageListRef}>
      {messages.map((mes, index) => (
        <MessageItem
          id={mes.messageId!}
          message={mes.message}
          isCurrentUserIsSender={user.id === mes.senderId}
          senderName={mes.senderName}
          className="mb-2 w-auto"
          key={mes.messageId}
        />
      ))}
    </div>
  );
};

export default ChatMessageList;
