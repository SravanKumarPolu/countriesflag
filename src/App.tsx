import CountriesFlagList from "./components/CountriesFlagList";
import useCountriesFlagSource from "./components/useCountriesFlagSource";
import { CountriesContext } from "./hooks/useCountriesFlag";

function App() {
  const { countries } = useCountriesFlagSource();
  return (
    <>
      <CountriesContext.Provider value={{ countries }}>
        <div className="container mx-auto p-4 max-w-3xl">
          <h1 className="text-[40px] font-bold mb-4 text-center">
            Countriesflag.com
          </h1>
          <CountriesFlagList countries={countries} />
        </div>
      </CountriesContext.Provider>
    </>
  );
}

export default App;
