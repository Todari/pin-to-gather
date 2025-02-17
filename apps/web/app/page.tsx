"use client";

import { Map } from "../components/Map/Map";

export default function Home() {
  const boardUuid = "1";
  const userId = `${window.screen.width}-${window.screen.height}`;
  
  return (
     <>
      <Map boardUuid={boardUuid} userId={userId} />
    </>
  );
}
