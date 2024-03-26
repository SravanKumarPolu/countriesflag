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
export function useCountryFlagsSource(): {
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

export const CountryFlagContext = createContext<
  ReturnType<typeof useCountryFlagsSource>
>({} as unknown as ReturnType<typeof useCountryFlagsSource>);

export function useCountryFlags() {
  return useContext(CountryFlagContext);
}

export function CountryFlagProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CountryFlagContext.Provider value={useCountryFlagsSource()}>
        {children}
      </CountryFlagContext.Provider>
    </>
  );
}
