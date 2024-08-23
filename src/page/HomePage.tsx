
import React, { useEffect } from 'react';
import Slider from '../component/Slider';
import Search from '../component/Search';
import About from '../component/About';
import Services from '../component/Services';
import TopOffice from '../component/TopOffice';
import StaffTeam from '../component/StaffTeam';
import Testimonial from '../component/Testimonial';
import { getProfile } from '../services/UserService';

const Home: React.FC = () => {

  useEffect(() => {
    const fetchTest = async () => {
      const data = await getProfile();
      console.log(data);
    }
    fetchTest();
  },[]) 
  return (
    <>
      <Slider/>
      <Search/>
      <About/>
      <Services/>
      <TopOffice/>
      <StaffTeam/>
      <Testimonial/>
    </>
  );
};

export default Home;
