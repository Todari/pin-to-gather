"use client";

import { useCallback, useRef} from "react";
import { Coordinates, NaverMap } from "../../types/map";
import Script from "next/script";

interface Props {
  loc: Coordinates;
}

export function Map({ loc }: Props) {
  const mapRef = useRef<NaverMap>(null);

  

  const initializeMap = useCallback((loc: Coordinates) => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(loc),
      zoom: 9,
    };
    const map = new window.naver.maps.Map("map", mapOptions);
    mapRef.current = map;
  }, [loc]);

  const handleClick = () => {
    mapRef.current?.setCenter(new window.naver.maps.LatLng(37.42829747263545, 126.76620435615891));
  };

  return (
    <>
    <Script
        strategy="afterInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=myuj2bw9tf`}
        onLoad={() => initializeMap(loc)}
      ></Script>
      <div id="map" style={{ width: "80vw", height: "80vh" }} />
      <button onClick={handleClick}>click</button>
    </>
  );
}
