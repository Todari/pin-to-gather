"use client";

import { useCallback, useEffect, useRef, useState} from "react";
import { Bounds, Coordinates, MapInfo, NaverMap } from "@type/map";
import Script from "next/script";

interface Props {
  loc: Coordinates;
  onChangeMapInfo: (mapInfo: MapInfo) => void;
}

export function Map({ loc, onChangeMapInfo }: Props) {
  const mapRef = useRef<NaverMap>(null);
  // const [mapInfo, setMapInfo] = useState<MapInfo>({
  //   center: loc,
  //   bounds: {min: {x: 0, y: 0}, max: {x: 0, y: 0}},
  //   zoom: 12,
  // });

  const handleChangeMapInfo = () => {
    if (mapRef.current) {
      onChangeMapInfo({
        center: {x: mapRef.current.getCenter().x, y: mapRef.current.getCenter().y},
        bounds: {min: {x: mapRef.current.getBounds().minX(), y: mapRef.current.getBounds().minY()}, max: {x: mapRef.current.getBounds().maxX(), y: mapRef.current.getBounds().maxY()}},
        zoom: mapRef.current.getZoom(),
      });
    }
  }

  const initializeMap = useCallback((loc: Coordinates) => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(loc.x, loc.y),
      zoom: 12,
    };
    const map = new window.naver.maps.Map("map", mapOptions);
    mapRef.current = map;
    
    // naver.maps.Event.addListener(map, 'zoom_changed', () => {
    //   handleChangeMapInfo();
    // });

    // naver.maps.Event.addListener(map, 'center_changed', () => {
    //   handleChangeMapInfo();
    // });

    naver.maps.Event.addListener(map, 'bounds_changed', () => {
      handleChangeMapInfo();
    });
  }, [loc]);
  
  return (
    <>
    <Script
        strategy="afterInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=myuj2bw9tf`}
        onLoad={() => initializeMap(loc)}
      ></Script>
      <div id="map" style={{ width: "80vw", height: "80vh" }} />
    </>
  );
}
