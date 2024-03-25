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
      .then((data: Countries[]) => setCountries(data));
  });
  return { countries };
}
export default useCountriesFlag;
