import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
//import Center from '../components/Center';

const Movements = () => {
  return (
    <div>
      <NavBar />
      <div className="main-grid">
        <SideBar />
        <div>
          {/* <Center /> */}
          Ultimos Movimientos
        </div>
      </div>
      <Footer />
    </div>
    
  )
}

export default Movements