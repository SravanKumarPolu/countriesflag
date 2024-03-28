import { useQuery } from "@tanstack/react-query";
import { useReducer, useCallback, useMemo } from "react";

interface CountryFlag {
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  region: string;
  population: number;
  flags: {
    svg: string;
    png: string;
  };
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages: {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }[];
  flag: string;
  independent: boolean;
}

export default function useCountryFlagsSource(): {
  countryFlag: CountryFlag[];
  search: string;
  setSearch: (search: string) => void;
} {
  const { data: countryFlag } = useQuery<CountryFlag[], Error>({
    queryKey: ["countryFlag"],
    queryFn: () => fetch(`/countries.json`).then((response) => response.json()),
    initialData: [],
  });

  type CountryFlagState = {
    search: string;
  };

  type CountryFlagAction = { type: "setSearch"; payload: string };
  const [{ search }, dispatch] = useReducer(
    (state: CountryFlagState, action: CountryFlagAction) => {
      switch (action.type) {
        case "setSearch":
          return { ...state, search: action.payload };
        default:
          return state;
      }
    },
    {
      search: "",
    }
  );

  const setSearch = useCallback((search: string) => {
    dispatch({
      type: "setSearch",
      payload: search,
    });
  }, []);

  const filteredCountryFlag = useMemo(() => {
    return countryFlag.filter((c) =>
      c.name.toLowerCase().startsWith(search.toLowerCase())
    );
  }, [countryFlag, search]);

  const sortedCountryFlag = useMemo(
    () => [...filteredCountryFlag.sort((a, b) => a.name.localeCompare(b.name))],
    [filteredCountryFlag]
  );

  return { countryFlag: sortedCountryFlag, search, setSearch };
}
