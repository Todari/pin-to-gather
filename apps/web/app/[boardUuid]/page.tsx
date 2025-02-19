'use client';

import {useParams} from 'next/navigation';
import {MapBoard} from '@components/MapBoard/MapBoard';
import {useEffect, useRef, useState} from 'react';
import {NaverMap} from '@type/map';
import {useRequestGetLocalSearch} from '../../hooks/useRequestGetLocalSearch';
import {coordToNaverLatLng, localMapXYToLatLng} from '@utils/map';
import {Maker} from '@components/Maker/Maker';
import ReactDOMServer from 'react-dom/server';
import {Header} from '@components/Header/Header';

export default function BoardPage() {
  const boardUuid = useParams().boardUuid as string;
  const userId = '3';
  // const userId = crypto.randomUUID();
  const [query, setQuery] = useState<string>('');
  const mapRef = useRef<NaverMap | null>(null);

  const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const {data, isLoading} = useRequestGetLocalSearch(query);

  for (const item of data?.items ?? []) {
    new window.naver.maps.Marker({
      position: coordToNaverLatLng(localMapXYToLatLng(item.mapy, item.mapx)),
      map: mapRef.current ?? undefined,
      title: item.title.replace(/<b>/g, '').replace(/<\/b>/g, ''),
      icon: {
        content: ReactDOMServer.renderToString(<Maker item={item} />),
        size: new naver.maps.Size(22, 35),
        anchor: new naver.maps.Point(11, 35),
      },
    });
  }

  return (
    <>
      <Header />
      <MapBoard ref={mapRef} boardUuid={boardUuid} userId={userId} />
    </>
  );
}
