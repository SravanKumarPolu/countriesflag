import { SearchBar } from "./components/SearchBar";

import {
  CountryFlagProvider,
  useCountryFlags,
} from "./hooks/CountryFlagContext";

export const CountryFlagsList = () => {
  const { countryFlag } = useCountryFlags();
  return (
    <ul className="grid grid-cols-3 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      {countryFlag.map((c) => (
        <li
          key={c.name}
          className=" col-span-1 rounded-lg text-center bg-white shadow-xl ">
          <div className="flex flex-1 flex-col p-8">
            <img src={c.flag} className="w-32 h-32 rounded-full" />

            <h2>{c.name}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
};
function App() {
  return (
    <>
      <CountryFlagProvider>
        <div className="container mx-auto p-4 max-w-3xl">
          <h1 className="text-[40px] font-bold mb-4 text-center">
            Countryflags.com
          </h1>
          <SearchBar />
          <CountryFlagsList />
        </div>
      </CountryFlagProvider>
    </>
  );
}

export default App;
