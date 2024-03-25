import { useEffect, useState } from "react";
import CountriesFlagList from "./components/CountriesFlagList";
import useCountriesFlag from "./components/useCountriesFlag";

function App() {
  const { countries } = useCountriesFlag();
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Countriesflag.com</h1>
        <CountriesFlagList countries={countries} />
      </div>
    </>
  );
}

export default App;
