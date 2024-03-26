import CountriesFlagList from "./components/CountriesFlagList";
import SearchBar from "./components/SearchBar";

import useCountryFlagsSource from "./components/useCountryFlagsSource";
import { CountriesProvider } from "./hooks/useCountryFlags";

function App() {
  const { country } = useCountryFlagsSource();
  return (
    <>
      <CountriesProvider>
        <div className="container mx-auto p-4 max-w-3xl">
          <h1 className="text-[40px] font-bold mb-4 text-center">
            Countryflags.com
          </h1>
          <SearchBar />

          <CountriesFlagList countries={country} />
        </div>
      </CountriesProvider>
    </>
  );
}

export default App;
