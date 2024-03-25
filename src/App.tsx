import { useEffect, useState } from "react";

import "./App.css";

interface Countries {
  name: string;
  flag: string;
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
    <div>
      {countries.map((c, index) => (
        <div key={index}>
          {" "}
          {c.flag}
          <div>{c.name}</div>
        </div>
      ))}
    </div>
  );
};
function App() {
  const { countries } = useCountriesFlag();
  return (
    <>
      <div>
        <h1>Countriesflag.com</h1>
      </div>

      <CountriesflagList countries={countries} />
    </>
  );
}

export default App;
