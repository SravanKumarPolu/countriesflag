import useCountryFlagsSource from "../store";
import { createContext, useContext } from "react";

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
