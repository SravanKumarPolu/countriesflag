import { useQuery, QueryKey } from "@tanstack/react-query";
import { useEffect, useReducer, useCallback, useMemo } from "react";

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
    return countryFlag
      .filter((c) => c.name.toLowerCase().startsWith(search.toLowerCase()))
      .slice(0, 20);
  }, [countryFlag, search]);

  const sortedCountryFlag = useMemo(
    () => [
      ...filteredCountryFlag?.sort((a, b) => a.name.localeCompare(b.name)),
    ],
    [filteredCountryFlag]
  );

  return { countryFlag: sortedCountryFlag || [], search, setSearch };
}
