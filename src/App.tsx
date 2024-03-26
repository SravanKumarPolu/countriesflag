import { useEffect, useState, createContext, useContext } from "react";

interface CountryFlag {
  callingCodes: number;
  name: string;
  capital: string;
  region: string;
  population: number;
  flag: string;
  code: string;
  independent: boolean;
}
function useCountrFlag(): {
  countryFlag: CountryFlag[];
} {
  const [countryFlag, setCountryFlag] = useState<CountryFlag[]>([]);

  useEffect(() => {
    fetch(`/countries.json`)
      .then((response) => response.json())

      .then((data) => setCountryFlag(data));
  }, []);
  return { countryFlag };
}

const CountryFlagContext = createContext({ countryFlag: [] as CountryFlag[] });

const CountryFlagList = () => {
  const { countryFlag } = useContext(CountryFlagContext);
  return (
    <div>
      {countryFlag.map((c) => (
        <div key={c.callingCodes}>{c.name}</div>
      ))}
    </div>
  );
};

function App() {
  return (
    <>
      <CountryFlagContext.Provider value={useCountrFlag()}>
        <div className="container mx-auto p-4 max-w-3xl">
          <h1 className="text-[40px] font-bold mb-4 text-center">
            Countryflags.com
          </h1>

          <CountryFlagList />
        </div>
      </CountryFlagContext.Provider>
    </>
  );
}

export default App;
