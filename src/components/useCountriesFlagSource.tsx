import { useEffect, useReducer, useState } from "react";

interface Countries {
  name: string;
  flag: string;
  capital: string;
}

function useCountriesFlagSource() {
  // const [countries, setCountries] = useState<Countries[]>([]);
  // const [search, setSearch] = useState();
  type CountriesState = {
    country: Countries[];
    search: string;
  };
  type CountriesAction = {
    type: "setCounties";
    payload: Countries[];
  };
  const [{ country, search }, dispatch] = useReducer(
    (state: CountriesState, action: CountriesAction) => {
      switch (action.type) {
        case "setCounties":
          return { ...state, country: action.payload };
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
  return { country, search };
}
export default useCountriesFlagSource;
