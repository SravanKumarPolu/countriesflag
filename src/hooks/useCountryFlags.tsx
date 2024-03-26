import useCountryFlagsSource from "../components/useCountryFlagsSource";
import React from "react";

interface CountriesProviderProps {
  children: React.ReactNode;
}
const CountriesContext = React.createContext<
  ReturnType<typeof useCountryFlagsSource>
>({} as unknown as ReturnType<typeof useCountryFlagsSource>);

const useCountries = () => {
  return React.useContext(CountriesContext);
};

const CountriesProvider: React.FC<CountriesProviderProps> = ({ children }) => {
  const contextValue = useCountryFlagsSource();
  return (
    <CountriesContext.Provider value={contextValue}>
      {children}
    </CountriesContext.Provider>
  );
};

export { useCountries, CountriesProvider };
