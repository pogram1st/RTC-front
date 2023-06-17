import { io } from 'socket.io-client';

const options = {
  'force new connection': true,
  reconnectionAttempts: 'Infinity',
  timeout: 10000,
  transports: ['websocket'],
};

const socket = io(process.env.PORT || 4444, options);

export default socket;
