import { useEffect, useReducer, useCallback } from "react";

interface Countries {
  name: string;
  flag: string;
  capital: string;
  setSearch: (search: string) => void;
}

function useCountriesFlagSource() {
  // const [countries, setCountries] = useState<Countries[]>([]);
  // const [search, setSearch] = useState();
  type CountriesState = {
    country: Countries[];
    search: string;
  };
  type CountriesAction =
    | {
        type: "setCounties";
        payload: Countries[];
      }
    | { type: "setSearch"; payload: string };
  const [{ country, search }, dispatch] = useReducer(
    (state: CountriesState, action: CountriesAction) => {
      switch (action.type) {
        case "setCounties":
          return { ...state, country: action.payload };
        case "setSearch":
          return { ...state, search: action.payload };
      }
    },
    {
      country: [],
      search: "",
    }
  );

  useEffect(() => {
    fetch("/countries.json")
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "setCounties",
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
  return { country, search, setSearch };
}
export default useCountriesFlagSource;
