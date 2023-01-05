import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Contact from './Contact'
import About from './About'

function App() {
  return (
    <>

      <Routes>
        <Route path="/" component={<About/>} /> 
        <Route path="/contact" component={<Contact/>} />


      </Routes>

    </>
  );
}

export default App;
