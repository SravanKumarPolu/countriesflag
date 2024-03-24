import { useEffect, useState } from "react";

import "./App.css";

interface Countries {
  speed: number;
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
function App() {
  const { countries } = useCountriesFlag();
  return (
    <>
      <div>
        <h1>Countriesflag.com</h1>
      </div>

      <div>{JSON.stringify(countries)}</div>
    </>
  );
}

export default App;
