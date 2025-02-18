"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [boardUuid, setBoardUuid] = useState<string>("");
  const router = useRouter();

  return (
     <>
      <input value={boardUuid} onChange={(e) => setBoardUuid(e.target.value)} />
      <button onClick={() => {
        router.push(`/${boardUuid}`);
      }}>
        이동
      </button>
    </>
  );
}
