import { CountryFlagsList } from "./components/CountryFlagList";
import { SearchBar } from "./components/SearchBar";
import { motion } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CountryFlagProvider } from "./hooks/CountryFlagContext";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CountryFlagProvider>
          <div className="bg-blue-400  py-4 mx-auto p-4 max-w-6xl">
            <motion.h1
              initial={{ opacity: 0.5, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.4 }}
              className="text-[40px] text-white font-bold mb-4 text-center">
              Countryflags.com
            </motion.h1>
            <SearchBar />
            <CountryFlagsList />
          </div>
        </CountryFlagProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
