import { CountryFlagProvider, useCountryFlags } from "./store";
const CountryFlagsList = () => {
  const { countryFlag } = useCountryFlags();
  return (
    <div>
      {countryFlag.map((c) => (
        <div key={c.callingCodes}>{c.name}</div>
      ))}
    </div>
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

          <CountryFlagsList />
        </div>
      </CountryFlagProvider>
    </>
  );
}

export default App;
