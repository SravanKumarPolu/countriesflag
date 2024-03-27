import { CountryFlagsList } from "./components/CountryFlagList";
import { SearchBar } from "./components/SearchBar";

import { CountryFlagProvider } from "./hooks/CountryFlagContext";

function App() {
  return (
    <>
      <CountryFlagProvider>
        <div className="container mx-auto p-4 max-w-6xl">
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
