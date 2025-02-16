"use client";

import { connectSocket } from "@api/socket";
import { Map } from "../components/Map/Map";
import { useEffect, useRef, useState } from "react";
import { Bounds, Coordinates, MapInfo } from "@type/map";
import { useWebSocket } from "@api/useSocket";

export default function Home() {
  const boardUuid = "1";
  const userId = `${window.screen.width}-${window.screen.height}`;
  
  return (
     <>
      <Map boardUuid={boardUuid} userId={userId} />
    </>
  );
}
