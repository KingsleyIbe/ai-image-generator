// import { useState } from 'react';
import {
  BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';
import './index.css';
import { Home, CreatePost } from './pages';

import { logo } from './assets';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <header
        className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]"
      >
        <Link to="/">
          <img src={logo} alt="Project Logo" className="w-28 object-contain" />
        </Link>
        <Link to="/create-post" className="font-inter font-medium">Create Post</Link>
      </header>
    </BrowserRouter>
  );
}

export default App;
