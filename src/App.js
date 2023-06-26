import socketIO from "socket.io-client";
import './App.css';

const ENDPOINT = 'http://localhost:4500/'; // address of server
const socket = socketIO(ENDPOINT, {transports: ['websocket']});

function App() {
  
  socket.on('connect', () => {
    
  });
  
  return (
    <div className="App">
      <h1>Working!</h1>
    </div>
  );
}

export default App;
