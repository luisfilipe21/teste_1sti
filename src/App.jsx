import './App.css'
import { useContext } from "react";
import { WeatherDataContext } from "./context";
import { FormCityData } from "./components/forms";
import { CapitalCard } from './components/CapitalsCard';
import { Modal } from './components/Modal';

function App() {

  const { city } = useContext(WeatherDataContext);
 
  return (
    <>
      <div className='containerHeader'>

        <h1>Previsão do tempo</h1>

        {city ?

          <Modal />
     
          : null}

        <FormCityData />

      </div>

      <hr />

      <div className='containerWeatherInfo'>
        <h2>Cidades</h2>

        <div>
          <div className='containerBoxFixed'>
            <h3>Min.</h3>
            <h3>Max.</h3>
          </div>

          <CapitalCard />
        </div>
      </div>
    </>
  )
}

export default App
