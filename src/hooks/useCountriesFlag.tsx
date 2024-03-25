import { createContext, useContext } from "react";

interface Countries {
  name: string;
  flag: string;
  capital: string;
}

const initialCountries: Countries[] = [];

export const CountriesContext = createContext<{ countries: Countries[] }>({
  countries: initialCountries,
});

function useCountriesFlag() {
  return useContext(CountriesContext);
}

export default useCountriesFlag;
