import logo from './logo.svg';
import './App.css';
import Home from '../src/pages/home/Home'
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div >
  );
}

export default App;
