"use client";

import { Map } from "../components/Map/Map";

export default function Home() {
  const boardUuid = "1";
  const userId = crypto.randomUUID();

  return (
     <>
      <Map boardUuid={boardUuid} userId={userId} />
    </>
  );
}
