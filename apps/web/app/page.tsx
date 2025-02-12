"use client";

import { Map } from "../components/Map/Map";

export default function Home() {
  const boardUuid = "1234";
  const socket = new WebSocket(`ws://localhost:8080/ws/uuid/${boardUuid}`);
  const userId = "5678";
  const data = {
    boardUuid,
    userId,
    x: 100,
    y: 200,
  }

  // WebSocket 연결이 열렸을 때 호출되는 이벤트 핸들러
socket.onopen = function(event) {
    console.log('WebSocket connection established');
    // 서버로 메시지 전송
    sendCursorPosition(data.x, data.y);
};

// 서버로부터 메시지를 수신할 때 호출되는 이벤트 핸들러
socket.onmessage = function(event) {
    const cursorData = JSON.parse(event.data);
    console.log('Received cursor data:', cursorData);
    // 수신한 커서 데이터를 UI에 반영
    updateCursorPosition(cursorData);
};

// WebSocket 연결이 닫혔을 때 호출되는 이벤트 핸들러
socket.onclose = function(event) {
    console.log('WebSocket connection closed');
};

// WebSocket 오류가 발생했을 때 호출되는 이벤트 핸들러
socket.onerror = function(error) {
    console.error('WebSocket error:', error);
};

// 서버로 커서 위치를 전송하는 함수
function sendCursorPosition(x: number, y: number) {
    const cursorData = { userId, boardUuid, x, y };
    socket.send(JSON.stringify(cursorData));
}

// 수신한 커서 데이터를 UI에 반영하는 함수
function updateCursorPosition(data: { x: number; y: number; userId: string; boardUuid: string }) {
    // 예: 화면에 커서 위치 업데이트
    console.log(`Cursor moved to (${data.x}, ${data.y}) by user ${data.userId}`);
}

  return (
     <>
      <Map loc={[37.3595704, 127.105399]}/>
    </>
  );
}
