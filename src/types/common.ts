export interface Message {
  senderId: string;
  senderName: string;
  message: string;
  messageId?: string;
}

export interface User {
  id: string;
  name: string;
}
