"use client";

import { useRef, useCallback } from "react";
import { NaverMap, Coordinates } from "../types/map";
import { Map } from "./components/Map/Map";

export default function Home() {

  return (
     <>
      <Map loc={[37.3595704, 127.105399]}/>
    </>
  );
}
