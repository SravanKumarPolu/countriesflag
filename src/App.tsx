import CountriesFlagList from "./components/CountriesFlagList";
import SearchBar from "./components/SearchBar";
import useCountriesFlagSource from "./components/useCountriesFlagSource";
import { CountriesContext } from "./hooks/useCountriesFlag";

function App() {
  const { country } = useCountriesFlagSource();
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
