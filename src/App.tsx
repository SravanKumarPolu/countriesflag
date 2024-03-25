import { useEffect, useState } from "react";

interface Countries {
  name: string;
  flag: string;
  capital: string;
}

function useCountriesFlag() {
  const [countries, setCountries] = useState<Countries[]>([]);

  useEffect(() => {
    fetch("/countries.json")
      .then((response) => response.json())
      .then((data: Countries[]) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);
  return { countries };
}
const CountriesflagList: React.FC<{ countries: Countries[] }> = ({
  countries,
}) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {countries.map((c, index) => (
        <div key={index}>
          {" "}
          <img src={c.flag} width={80} />
          <div>{c.name}</div>
          <p>Capital:{c.capital}</p>
        </div>
      ))}
    </div>
  );
};
function App() {
  const { countries } = useCountriesFlag();
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Countriesflag.com</h1>
        <CountriesflagList countries={countries} />
      </div>
    </>
  );
}

export default App;
