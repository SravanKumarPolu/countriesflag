import { CountryFlagProvider, useCountryFlags } from "./store";
function SearchBar() {
  const { search, setSearch } = useCountryFlags();
  return (
    <input
      className="mt-3 pl-2 block w-full  rounded  text-blue-400
      border border-gray-300 shadow-sm"
      placeholder="search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

const CountryFlagsList = () => {
  const { countryFlag } = useCountryFlags();
  return (
    <ul className="grid grid-cols-3 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      {countryFlag.map((c) => (
        <li
          key={c.callingCodes}
          className=" col-span-1 rounded-lg text-center bg-white shadow-xl ">
          <div className="flex flex-1 flex-col p-8">
            <img src={c.flag} className="w-32 h-32 rounded-full" />

            <div>{c.name}</div>
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
