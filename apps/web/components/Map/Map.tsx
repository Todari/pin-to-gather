"use client";

import { useCallback, useEffect, useRef} from "react";
import { Bounds, Coordinates, NaverMap } from "@type/map";
import Script from "next/script";

interface Props {
  loc: Coordinates;
  onChangeZoom?: (zoom: number) => void;
  onChangeCenter?: (loc: Coordinates) => void;
  onChangeBounds?: (bounds: Bounds) => void;
}

export function Map({ loc, onChangeZoom, onChangeCenter, onChangeBounds }: Props) {
  const mapRef = useRef<NaverMap>(null);

  const initializeMap = useCallback((loc: Coordinates) => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(loc[0], loc[1]),
      zoom: 12,
    };
    const map = new window.naver.maps.Map("map", mapOptions);
    mapRef.current = map;

    naver.maps.Event.addListener(map, 'zoom_changed', (zoom) => {
      onChangeZoom?.(zoom);
    });

    naver.maps.Event.addListener(map, 'center_changed', (center) => {
      onChangeCenter?.([center.x, center.y]);
    });

    naver.maps.Event.addListener(map, 'bounds_changed', (bounds) => {
      onChangeBounds?.([bounds.minX(), bounds.minY(), bounds.maxX(), bounds.maxY()]);
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
