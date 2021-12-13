import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Features from '../src/components/Features';
import Apps from '../src/routes/Apps';
import Blog from '../src/routes/Blog';
import Help from '../src/routes/Help';
import MyAccount from '../src/routes/MyAccount';
import Pricing from '../src/routes/Pricing';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Features />}/>
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/apps' element={<Apps />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/help' element={<Help />} />
        <Route path='/myAccount' element={<MyAccount />} />
    </Routes>
    </>
  );
}

export default App;
