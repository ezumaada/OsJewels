import React from 'react';


import Header from '../../components/header/Header';
import Cert from '../../components/cert/Cert';
import Shipping from '../../components/shipping/Shipping';
import MiniNavigation from '../../components/mininavigation/MiniNavigation';
import Weddings from '../../components/weddings/Weddings';
import NomWatches from '../../components/nomwatches/NomWatches';
const Homepage = () => {
  return (
    <div>
        
        <div>
          <h1>Ingoude luxury Jewellry Homepage</h1>
        </div>
        
        <Header/>
        <MiniNavigation/>
        <Cert/>
        <Weddings/>
        <NomWatches/>
        <Shipping/>
    </div>
  )
}

export default Homepage