import CountriesFlagList from "./components/CountriesFlagList";
import useCountriesFlagSource from "./components/useCountriesFlagSource";
import { CountriesContext } from "./hooks/useCountriesFlag";

function App() {
  const { countries } = useCountriesFlagSource();
  return (
    <>
      <CountriesContext.Provider value={{ countries }}>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Countriesflag.com</h1>
          <CountriesFlagList countries={countries} />
        </div>
      </CountriesContext.Provider>
    </>
  );
}

export default App;
