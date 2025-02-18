"use client";

import { useParams } from "next/navigation";
import { Map } from "../../components/Map/Map";

export default function BoardPage() {
  const boardUuid = useParams().boardUuid as string;
  const userId = crypto.randomUUID();

  return (
     <>
      <Map boardUuid={boardUuid} userId={userId} />
    </>
  );
}
