import { createContext, useContext } from "react";

interface Countries {
  name: string;
  flag: string;
  capital: string;
}

const initialCountries: Countries[] = [];

export const CountriesContext = createContext<{ country: Countries[] }>({
  country: initialCountries,
});

function useCountriesFlag() {
  return useContext(CountriesContext);
}

export default useCountriesFlag;
