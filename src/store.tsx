import {
  useEffect,
  useState,
  createContext,
  useContext,
  useReducer,
  useCallback,
} from "react";

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
  search: string;
  setSearch: (search: string) => void;
} {
  //   const [countryFlag, setCountryFlag] = useState<CountryFlag[]>([]);
  //   const [search, setSearch] = useState<string>("");

  type CountryFlagState = {
    countryFlag: CountryFlag[];
    search: string;
  };
  type CountryFlagAction =
    | {
        type: "setCountryFlag";
        payload: CountryFlag[];
      }
    | { type: "setSearch"; payload: string };
  const [{ countryFlag, search }, dispatch] = useReducer(
    (state: CountryFlagState, action: CountryFlagAction) => {
      switch (action.type) {
        case "setCountryFlag":
          return { ...state, countryFlag: action.payload };
        case "setSearch":
          return { ...state, search: action.payload };
      }
    },
    {
      countryFlag: [],
      search: "",
    }
  );

  useEffect(() => {
    fetch(`/countries.json`)
      .then((response) => response.json())

      .then((data) =>
        dispatch({
          type: "setCountryFlag",
          payload: data,
        })
      );
  }, []);
  const setSearch = useCallback((search: string) => {
    dispatch({
      type: "setSearch",
      payload: search,
    });
  }, []);
  return { countryFlag, search, setSearch };
}

const CountryFlagContext = createContext<
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
