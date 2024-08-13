
import React from 'react';
import Slider from '../component/Slider';
import Search from '../component/Search';
import About from '../component/About';
import Services from '../component/Services';
import TopOffice from '../component/TopOffice';
import StaffTeam from '../component/StaffTeam';
import Testimonial from '../component/Testimonial';

const Home: React.FC = () => {
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
