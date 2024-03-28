import { useCountryFlags } from "../hooks/CountryFlagContext";
import { Link, useMatch } from "@tanstack/react-location";

export default function CountryDetail() {
  const {
    params: { name },
  } = useMatch();
  const { countryFlag } = useCountryFlags();
  const countryData = countryFlag.find((c) => c.name === name);

  if (!countryData) {
    return <div>No Country Found</div>;
  }
  const {
    flag,
    languages,
    population,
    capital,
    region,
    callingCodes,
    independent,
    currencies,
  } = countryData;
  return (
    <div className=" text-white flex flex-col j h-[34rem] p-4">
      <Link to="/" className=" text-white mb-4">
        <h1 className="flex bg-slate-400 w-44 text-2xl font-semibold py-2 px-6">
          <span className="w-12">&#8592;</span>
          <span>Back</span>
        </h1>
      </Link>
      <div className="flex flex-col items-center justify-center gap-4">
        <div>
          <img
            src={flag}
            alt={`${name} flag`}
            className="w-60  rounded shadow-orange-400  shadow-md"
          />
        </div>
        <div className="text-left">
          <h2 className="font-semibold text-lg">Detail Info:</h2>
          <h3 className="text-xl">Name: {name}</h3>
          <p>Population: {population}</p>
          <p>Capital: {capital}</p>
          <p>Calling Code: {callingCodes.join(", ")}</p>
          <p>Currency: {currencies.map((m) => m.name).join(", ")}</p>
          <p>Region: {region}</p>
          <p>Languages: {languages.map((lang) => lang.name).join(", ")}</p>
          <p>Independence: {independent ? "Yes" : "No"}</p>
        </div>
      </div>
    </div>
  );
}
