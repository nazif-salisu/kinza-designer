import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Work from './Pages/Work';
import LatestWork from './Components/MyLatest/LatestWork';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/work' element={<Work/>}>
            <Route path=':workId' element={<Work/>}/>
          </Route>
          <Route path='/latest' element={<LatestWork/>}>
            <Route path=':latestId' element={<LatestWork/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
