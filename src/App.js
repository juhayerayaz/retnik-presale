import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
      </Routes>
    </>
  );
}

export default App;
