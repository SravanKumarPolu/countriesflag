import { useEffect, useState } from "react";

interface Countries {
  name: string;
  flag: string;
  capital: string;
}

function useCountriesFlagSource() {
  const [countries, setCountries] = useState<Countries[]>([]);
  useEffect(() => {
    fetch("/countries.json")
      .then((response) => response.json())
      .then((data: Countries[]) => setCountries(data));
  }, []); // empty dependency array to run once
  return { countries };
}

export default useCountriesFlagSource;
