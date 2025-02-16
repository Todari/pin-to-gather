export const connectSocket = (boardUuid: string, userId: string) => {
  const socket = new WebSocket(`ws://localhost:8080/ws/uuid/${boardUuid}?userId=${userId}`);

  socket.onopen = () => {
    console.log('WebSocket connection opened');
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('WebSocket message received:', data);
  };

  socket.onclose = () => {
    console.log('WebSocket connection closed');
  };  

  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  return socket;
}
