import {  Routes, Route } from 'react-router-dom';
import Resources from './components/Resources';
import './App.css';
import './styles/main.scss'


function App() {
  return (
    <div className='conteiner'>
      <Routes>
        <Route path="/html" element={<Resources category="html" />} />
        <Route path="/css" element={<Resources category="css" />} />
        <Route path="/javascript" element={<Resources category="javascript" />} />
        <Route path="/react" element={<Resources category="react" />} />
        <Route path="/sanity" element={<Resources category="headless-cms" />} />
      </Routes>
    </div>
  );
}


export default App;
