import type { NextPage } from 'next';

import Header from '../components/Header';
import Presentational from '../components/Presentational';
import WeatherSection from '../components/WeatherSection';
import PicturesSection from '../components/PicturesSection';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Presentational />
      <WeatherSection />
      <PicturesSection />
    </>
  )
}

export default Home
