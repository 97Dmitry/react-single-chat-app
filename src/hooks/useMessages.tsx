import { MutableRefObject, useEffect, useState } from "react";
import LocalStorageService from "services/LocalStorage.service";
import { Message } from "types/common";
import { LOCAL_STORAGE } from "types/storage";
import { v4 as uuidv4 } from "uuid";

export const useMessages = (messageListRef?: MutableRefObject<HTMLDivElement>) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const onStorageUpdate = (event: StorageEvent) => {
    const { key, newValue } = event;

    if (key === LOCAL_STORAGE.MESSAGES && newValue) {
      setMessages(JSON.parse(newValue) as Message[]);
    }
  };

  useEffect(() => {
    setMessages(LocalStorageService.getData(LOCAL_STORAGE.MESSAGES) || []);
    window.addEventListener("storage", onStorageUpdate);
    return () => {
      window.removeEventListener("storage", onStorageUpdate);
    };
  }, []);

  useEffect(() => {
    if (messageListRef?.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (message: Message) => {
    const newMessage: Message = { ...message, messageId: uuidv4() };
    LocalStorageService.setData(LOCAL_STORAGE.MESSAGES, [...messages, newMessage]);
    setMessages((prev) => [...prev, newMessage]);
  };

  return { messages, addMessage };
};
