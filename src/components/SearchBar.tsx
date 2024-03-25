import useCountriesFlagSource from "./useCountriesFlagSource";

const SearchBar = () => {
  const { search, setSearch } = useCountriesFlagSource();
  return (
    <input
      className="mt-3 pl-2 block w-full  rounded  text-blue-400
      border border-gray-300 shadow-md"
      placeholder="search..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
