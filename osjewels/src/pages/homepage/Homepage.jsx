import React from 'react';
import TopBanner from '../../components/topbanner/TopBanner';

import Header from '../../components/header/Header';
import Cert from '../../components/cert/Cert';
import Shipping from '../../components/shipping/Shipping';
import MiniNavigation from '../../components/mininavigation/MiniNavigation';

const Homepage = () => {
  return (
    <div>
        <TopBanner/>
        
        <Header/>
        <MiniNavigation/>
        <Cert/>
        <Shipping/>
    </div>
  )
}

export default Homepage