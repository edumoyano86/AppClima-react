

import { useEffect, useState } from "react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";


function capitalizeFistLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


const App = () => {

  const [query, setQuery] = useState({q: 'Mendoza'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  const getWeather = async () => {
    
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      setWeather(data);
    });
  };

  useEffect(() => { 
    getWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return 'from-cyan-400 to-cyan-700';
    const threshold = units === 'metric' ? 20 : 60;
    if (weather.temp <= threshold) return 'from-cyan-400 to-cyan-700';
    return 'from-orange-300 to-orange-500';
  }

  return ( 
    <div
      className={`h-full w-full mx-auto py-5 px-32 bg-gradient-to-br shadow-gray-400 ${formatBackground()}`}
      >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />

      {weather && (
        <>
        <TimeAndLocation weather={weather} />
        <TempAndDetails weather={weather} units={units} />
        <Forecast title='3 hour step forecast' data={weather.hourly} />
        <Forecast title='daily forecast' data={weather.daily} />
        </>
      )}
      
    </div>
  )
}

export default App
