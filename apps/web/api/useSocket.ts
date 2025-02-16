import { SocketMessage } from "@type/services";
import { useEffect, useRef, useState, useCallback } from "react";

export const useWebSocket = (url: string) => {
  const socket = useRef<WebSocket | null>(null);
  const [messages, setMessages] = useState<SocketMessage[]>([]);

  useEffect(() => {
    socket.current = new WebSocket(url);

    socket.current.onopen = () => {
      console.log('WebSocket connection opened');
    };

    socket.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('WebSocket message received:', data);
      setMessages((prevMessages) => [...prevMessages, data]);
    };

    socket.current.onclose = () => {
      console.log('WebSocket connection closed');
    };

    socket.current.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      socket.current?.close();
    };
  }, [url]);

  const sendMessage = useCallback((message: any) => {
    if (socket.current) {
      socket.current.send(JSON.stringify(message));
    }
  }, []);

  return { messages, sendMessage };
};
