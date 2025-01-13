import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from "./layouts/header/Header";
import Landing from './pages/landing/Landing';

const App: React.FC = () => {
  return (
    <div>
    <Header/>
     <Landing/>
    </div>
  )
};

export default App;
