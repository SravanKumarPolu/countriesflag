import { CountryFlagsList } from "./components/CountryFlagList";
import { SearchBar } from "./components/SearchBar";
import { motion } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CountryFlagProvider } from "./hooks/CountryFlagContext";
import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import CountryDetail from "./components/CountryDetail";

const queryClient = new QueryClient();
const location = new ReactLocation();
const routes = [
  {
    path: "/",
    element: (
      <>
        <SearchBar />
        <CountryFlagsList />
      </>
    ),
  },
  {
    path: "/countryFlag/:name",
    element: (
      <>
        <CountryDetail />
      </>
    ),
  },
];
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CountryFlagProvider>
          <div className=" bg-blue-500 flex flex-col overflow-y-auto scrollbar-hide h-screen">
            <motion.h1
              initial={{ opacity: 0.5, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.4 }}
              className=" DM text-4xl text-white m-4 font-bold mb-4 text-center">
              Countryflags.com
            </motion.h1>
            <Router location={location} routes={routes}>
              <Outlet />
            </Router>
          </div>
        </CountryFlagProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
