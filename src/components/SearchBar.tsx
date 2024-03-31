import { useCountryFlags } from "../hooks/CountryFlagContext";

export function SearchBar() {
  const { search, setSearch } = useCountryFlags();
  return (
    <>
      <div className="m-3 mx-6">
        <input
          type="text"
          className="my-3 px-4 py-2 block w-full rounded border border-gray-300 shadow-sm focus:outline-blue-500 appearance-none"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
}
