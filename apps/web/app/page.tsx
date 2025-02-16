"use client";

import { connectSocket } from "@api/socket";
import { Map } from "../components/Map/Map";
import { useEffect, useRef, useState } from "react";
import { Bounds, Coordinates, MapInfo } from "@type/map";

export default function Home() {
  const boardUuid = "1";
  const userId = `${window.screen.width}-${window.screen.height}`;
  const socket = useRef<WebSocket | null>(null);
  const [loc, setLoc] = useState<Coordinates>({x: 37.3595704, y: 127.105399});
  
  const handleChangeMapInfo = (mapInfo: MapInfo) => {
    if (socket.current) {
      socket.current.send(JSON.stringify({
        userId,
        boardUuid,
        ...mapInfo,
      }));
    }
  }
    
  const handleConnectSocket = () => {
    socket.current = connectSocket(boardUuid, userId);
  } 

  return (
     <>
      <Map loc={loc} onChangeMapInfo={handleChangeMapInfo}/>
      <button onClick={handleConnectSocket}>Connect</button>
    </>
  );
}
