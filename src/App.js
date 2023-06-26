import socketIO from "socket.io-client";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Join from './Component/Join'
import Chat from "./Component/Chat";

function App() {
  
  return (
    <div className="App">
      
    {/* defining the routes */}
    <Router>
      <Routes>
        <Route exact path="/" Component={Join} />
        <Route path="/chat" Component={Chat}/>
      </Routes>
    </Router>

    </div>
  );
}

export default App;
