import { createContext } from "react";
import CountriesFlagList from "./components/CountriesFlagList";
import useCountriesFlagSource from "./components/useCountriesFlagSource";

interface Countries {
  name: string;
  flag: string;
  capital: string;
}

const initialCountries: Countries[] = [];

const CountriesContext = createContext<{ countries: Countries[] }>({
  countries: initialCountries,
});

function App() {
  const { countries } = useCountriesFlagSource(); // Call the function to get the value
  return (
    <>
      <CountriesContext.Provider value={{ countries }}>
        {" "}
        {/* Pass the actual value */}
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Countriesflag.com</h1>
          <CountriesFlagList countries={countries} />
        </div>
      </CountriesContext.Provider>
    </>
  );
}

export default App;
