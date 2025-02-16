"use client";

import { connectSocket } from "@api/socket";
import { Map } from "../components/Map/Map";
import { useEffect, useRef, useState } from "react";
import { Bounds, Coordinates } from "@type/map";

export default function Home() {
  const boardUuid = "1";
  const userId = `${window.screen.width}-${window.screen.height}`;
  const socket = useRef<WebSocket | null>(null);
  const [loc, setLoc] = useState<Coordinates>([37.3595704, 127.105399]);
  
  useEffect(() => {
    console.log(socket);
  }, [socket]);
  
  const handleChangeCenter = (loc: Coordinates) => {
    if (socket.current) {
      socket.current.send(JSON.stringify({
        userId,
        boardUuid,
        center: {x: loc[0], y: loc[1]},
      }));
    }
  }
    
  const handleChangeBounds = (bounds: Bounds) => {
    console.log(bounds);
  }
  const handleChangeZoom = (zoom: number) => {
    console.log(zoom);
  }
    
  const handleConnectSocket = () => {
    socket.current = connectSocket(boardUuid, userId);
  }

  const handleSendMessage = () => {
    console.log(socket);
    if (socket.current) {
      socket.current.send(JSON.stringify({
        userId,
        boardUuid,
        message: "Hello, World!",
      }));
    }
  }

  return (
     <>
      <Map loc={loc} onChangeZoom={handleChangeZoom} onChangeCenter={handleChangeCenter} onChangeBounds={handleChangeBounds}/>
      <button onClick={handleConnectSocket}>Connect</button>
      <button onClick={handleSendMessage}>Message</button>
    </>
  );
}
