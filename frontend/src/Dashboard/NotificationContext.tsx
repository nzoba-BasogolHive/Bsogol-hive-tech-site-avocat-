import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
interface Notification {
  id: number;
  message: string;
  type: "info" | "success" | "warning";
}

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (message: string, type?: "info" | "success" | "warning") => void;
  removeNotification: (id: number) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error("useNotification must be used within NotificationProvider");
  return context;
};

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (message: string, type: "info" | "success" | "warning" = "info") => {
    const id = new Date().getTime();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => removeNotification(id), 5000);
  };

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}