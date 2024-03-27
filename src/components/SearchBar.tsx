import { useCountryFlags } from "../hooks/CountryFlagContext";

export function SearchBar() {
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
