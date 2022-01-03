import type { NextPage } from 'next';

import Header from '../components/Header';
import Presentational from '../components/Presentational';
import WeatherSection from '../components/WeatherSection';
import PicturesSection from '../components/PicturesSection';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Presentational />
      <WeatherSection />
      <PicturesSection />
      <Footer />
    </>
  )
}

export default Home
