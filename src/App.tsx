import CountriesFlagList from "./components/CountriesFlagList";
import SearchBar from "./components/SearchBar";
import useCountryFlagsSource from "./components/useCountryFlagsSource";

import { CountriesContext } from "./hooks/useCountryFlags";

function App() {
  const { country } = useCountryFlagsSource();
  return (
    <>
      <CountriesContext.Provider value={{ country }}>
        <div className="container mx-auto p-4 max-w-3xl">
          <h1 className="text-[40px] font-bold mb-4 text-center">
            Countriesflag.com
          </h1>
          <SearchBar />
          <CountriesFlagList countries={country} />
        </div>
      </CountriesContext.Provider>
    </>
  );
}

export default App;
