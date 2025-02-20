'use client';

import {useCallback, useEffect, useRef} from 'react';
import {NaverMap, NaverRectangle} from '@type/map';
import Script from 'next/script';
import {boundsToNaverBounds} from '@utils/map';

import {useWebSocket} from '../../hooks/useSocket';

interface Props {
  boardUuid: string;
  userId: string;
  ref: React.RefObject<NaverMap | null>;
}

interface ClientRect {
  userId: string;
  rect: NaverRectangle;
}

const WS_BASE_URL = process.env.NEXT_PUBLIC_WS_BASE_URL;
const NAVER_MAP_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;

export function MapBoard({boardUuid, userId, ref: mapRef}: Props) {
  const rectRefs = useRef<ClientRect[]>([]);
  const {messages, sendMessage} = useWebSocket(`${WS_BASE_URL}/${boardUuid}?userId=${userId}`);

  const initializeMap = useCallback(() => {
    const handleChangeMapInfo = () => {
      if (mapRef.current) {
        sendMessage({
          userId,
          boardUuid,
          center: {x: mapRef.current.getCenter().x, y: mapRef.current.getCenter().y},
          bounds: {
            min: {x: mapRef.current.getBounds().minX(), y: mapRef.current.getBounds().minY()},
            max: {x: mapRef.current.getBounds().maxX(), y: mapRef.current.getBounds().maxY()},
          },
          zoom: mapRef.current.getZoom(),
        });
      }
    };

    const mapOptions = {
      center: new window.naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 12,
    };
    const map = new window.naver.maps.Map('map', mapOptions);
    mapRef.current = map;

    naver.maps.Event.addListener(map, 'bounds_changed', () => {
      handleChangeMapInfo();
    });
  }, [mapRef, sendMessage, userId, boardUuid]);

  useEffect(() => {
    const checkExistClient = (userId: string) => {
      return rectRefs.current.find(rect => rect.userId === userId);
    };
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage) return;
    if (!checkExistClient(lastMessage.userId)) {
      const rect = new window.naver.maps.Rectangle({
        bounds: boundsToNaverBounds(lastMessage.bounds),
        strokeColor: '#2C97E1',
        strokeWeight: 2,
        map: mapRef.current ?? undefined,
      });
      rectRefs.current.push({userId: lastMessage.userId, rect});
    } else {
      rectRefs.current
        .find(rect => rect.userId === lastMessage.userId)
        ?.rect.setBounds(
          new window.naver.maps.LatLngBounds(
            new window.naver.maps.LatLng(lastMessage.bounds.min.y, lastMessage.bounds.min.x),
            new window.naver.maps.LatLng(lastMessage.bounds.max.y, lastMessage.bounds.max.x),
          ),
        );
    }
  }, [messages, mapRef]);

  useEffect(() => {
    return () => {
      rectRefs.current.forEach(({rect}) => {
        rect.setMap(null);
      });
      rectRefs.current = [];
    };
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_MAP_CLIENT_ID}`}
        onLoad={() => initializeMap()}
      ></Script>
      <div id="map" style={{width: '100vw', height: '100vh'}} />
    </>
  );
}
