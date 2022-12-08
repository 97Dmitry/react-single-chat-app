import { FC } from "react";

import styles from "./styles.module.css";

interface MessageItemProps {
  id: string;
  message: string;
  senderName: string;
  isCurrentUserIsSender: boolean;
  className?: string;
}

const MessageItem: FC<MessageItemProps> = ({ id, message, senderName, isCurrentUserIsSender, className = "" }) => {
  return (
    <div
      className={`d-inline-flex flex-column p-2 text-secondary ${className} ${
        isCurrentUserIsSender ? "rounded-start align-self-end ms-5" : "rounded-end align-self-start me-5"
      } ${styles.root}`}>
      <div className="mb-1">{message}</div>
      <div className={`text-primary ${isCurrentUserIsSender ? "align-self-end" : "align-self-start"}`}>
        {senderName}
      </div>
    </div>
  );
};

export default MessageItem;
