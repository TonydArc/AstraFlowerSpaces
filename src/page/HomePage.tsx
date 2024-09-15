
import React, { useEffect } from 'react';
import Slider from '../component/home/Slider';
import Search from '../component/home/Search';
import About from '../component/home/About';
import Services from '../component/home/Services';
import StaffTeam from '../component/home/StaffTeam';
import { getProfile } from '../services/UserService';
import Partner from '../component/home/Partner';
import TopBuilding from '../component/home/TopBuilding';


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
