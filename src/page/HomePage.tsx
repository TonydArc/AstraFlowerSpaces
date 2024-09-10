
import React, { useEffect } from 'react';
import Slider from '../component/Slider';
import Search from '../component/Search';
import About from '../component/About';
import Services from '../component/Services';
import StaffTeam from '../component/StaffTeam';
import { getProfile } from '../services/UserService';
import Partner from '../component/Partner';
import TopBuilding from '../component/TopBuilding';


const Home: React.FC = () => {
  useEffect(() => {
    const fetchTest = async () => {
      const data = await getProfile();
      console.log(data);
    }
    fetchTest();
  }, [])
  return (
    <>
      <Slider />
      <Search />
      <About />
      <Services />
      <TopBuilding />
      <StaffTeam />
      <Partner />
    </>
  );
};

export default Home;
