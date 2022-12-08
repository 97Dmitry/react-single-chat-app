import { useEffect, useState } from "react";
import SessionStorageService from "services/SessionStorage.service";
import { User } from "types/common";
import { SESSION_STORAGE } from "types/storage";
import { v4 as uuidv4 } from "uuid";

export const useAuth = () => {
  const [user, setUser] = useState<User>();

  const onStorageUpdate = (event: StorageEvent) => {
    const { key, newValue } = event;

    if (key === SESSION_STORAGE.USER && newValue) {
      setUser(JSON.parse(newValue) as User);
    }
  };

  useEffect(() => {
    setUser((SessionStorageService.getData(SESSION_STORAGE.USER) as unknown as User) || undefined);
    window.addEventListener("storage", onStorageUpdate);
    return () => {
      window.removeEventListener("storage", onStorageUpdate);
    };
  }, []);

  const login = (name: string) => {
    const newUser: User = { name, id: uuidv4() };
    SessionStorageService.setData(SESSION_STORAGE.USER, newUser);
    setUser(newUser);
  };

  return { user, login };
};
