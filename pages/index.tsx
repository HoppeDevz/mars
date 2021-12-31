import type { NextPage } from 'next';

import Header from '../components/Header';
import Presentational from '../components/Presentational';
import WeatherSection from '../components/WeatherSection';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Presentational />
      <WeatherSection />
    </>
  )
}

export default Home
