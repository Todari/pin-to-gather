'use client';

import {useParams} from 'next/navigation';
import {MapBoard} from '@components/MapBoard/MapBoard';
import {useEffect, useRef, useState} from 'react';
import {NaverMap} from '@type/map';
import {coordToNaverLatLng, localMapXYToLatLng} from '@utils/map';
import {Maker} from '@components/Maker/Maker';
import ReactDOMServer from 'react-dom/server';
import {Header} from '@components/Header/Header';
import {LocalItem} from '@type/model';

export default function BoardPage() {
  const boardUuid = useParams().boardUuid as string;
  // const userId = '3';
  const userId = crypto.randomUUID();
  const [localSearchResult, setLocalSearchResult] = useState<LocalItem[]>([]);
  const mapRef = useRef<NaverMap | null>(null);

  const markers = useRef<naver.maps.Marker[]>([]);

  useEffect(() => {
    // 이전 마커들 제거
    markers.current.forEach(marker => marker.setMap(null));
    markers.current = [];

    // 새로운 마커 생성
    localSearchResult.forEach(item => {
      const marker = new window.naver.maps.Marker({
        position: coordToNaverLatLng(localMapXYToLatLng(item.mapy, item.mapx)),
        map: mapRef.current ?? undefined,
        title: item.title.replace(/<b>/g, '').replace(/<\/b>/g, ''),
        icon: {
          content: ReactDOMServer.renderToString(<Maker item={item} />),
          size: new naver.maps.Size(22, 35),
          anchor: new naver.maps.Point(11, 35),
        },
      });
      markers.current.push(marker);
    });

    // Cleanup markers on component unmount or before next effect run
    return () => {
      markers.current.forEach(marker => marker.setMap(null));
      markers.current = [];
    };
  }, [localSearchResult]);

  return (
    <>
      <Header onSearch={setLocalSearchResult} />
      <MapBoard ref={mapRef} boardUuid={boardUuid} userId={userId} />
    </>
  );
}
