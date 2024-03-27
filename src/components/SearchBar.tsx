import { useCountryFlags } from "../hooks/CountryFlagContext";

export function SearchBar() {
  const { search, setSearch } = useCountryFlags();
  return (
    <input
      className="my-3 pl-2 block w-full rounded border border-gray-300 shadow-sm focus:outline-blue-500 "
      placeholder="search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
