import { useCountryFlags } from "../hooks/CountryFlagContext";
import { Link, useMatch } from "@tanstack/react-location";

export default function CountryDetail() {
  const {
    params: { name },
  } = useMatch();
  const { countryFlag } = useCountryFlags();
  const countryData = countryFlag.find((c) => c.name === name);

  if (!countryData) {
    return (
      <div className="h-full">
        <Link to="/" className="  mb-4  ">
          <div
            className=" bg-slate-400 w-36  shadow-md text-xl 
    font-semibold  px-6 m-1  hover:bg-slate-500">
            <div className="flex justify-around align-middle text-center text-white">
              <span className="text-center pt-1">Back</span>
              <span className="py-2 hover:translate-x-4 transition-transform duration-500 ease-in-out">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="dig-UIIcon dig-UIIcon--standard"
                  width="24"
                  height="24"
                  role="presentation"
                  focusable="false">
                  <path
                    d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    vector-effect="non-scaling-stroke"></path>
                </svg>
              </span>
            </div>
          </div>

          <h2 className=" text-center mt-10">No Country Found</h2>
        </Link>
      </div>
    );
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
    <div className=" text-white flex flex-col  h-full p-4">
      <Link to="/" className=" text-white mb-4 ">
        <h1 className=" bg-slate-400 w-36  shadow-md text-2xl font-semibold  px-6 m-1">
          {/* <span className=" w-14 mr-2">&#8592;</span> */}
        </h1>
        <div
          className=" bg-slate-400 w-36  shadow-md text-xl 
    font-semibold  px-6 m-1  hover:bg-slate-500">
          <div className="flex justify-around align-middle text-center ">
            <span className="text-center pt-1">Back</span>
            <span className="py-2 hover:translate-x-4 transition-transform duration-500 ease-in-out">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="dig-UIIcon dig-UIIcon--standard"
                width="24"
                height="24"
                role="presentation"
                focusable="false">
                <path
                  d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  vector-effect="non-scaling-stroke"></path>
              </svg>
            </span>
          </div>
        </div>
      </Link>
      <ul className="flex flex-col items-center justify-center gap-4">
        <div>
          <img
            src={flag}
            alt={`${name} flag`}
            className="w-[25rem] h-[20rem] rounded shadow-orange-400  shadow-md"
          />
        </div>
        <li className="flex  flex-col gap-2   ml-5  ">
          <h1 className="text-left leading-10  font-semibold text-2xl">
            Detail Info:-
          </h1>
          <h3 className="text-xl text-left leading-8 ">Name: {name}</h3>

          <p className=" text-left leading-6">Population : {population}</p>
          <p className=" text-left leading-6">Capital : {capital}</p>
          <p className=" text-left leading-6">
            Calling Code : {callingCodes.join(", ")}
          </p>
          <p className=" text-left leading-6">
            Currency : {currencies.map((m) => m.name).join(", ")}
          </p>
          <p className=" text-left leading-6">Region : {region}</p>
          <p className=" text-left leading-6">
            Languages : {languages.map((lang) => lang.name).join(", ")}
          </p>
          <p className=" text-left leading-6">
            Independence : {independent ? "Yes" : "No"}
          </p>
        </li>
      </ul>
      {/* <div> {JSON.stringify(countryData)}</div> */}
    </div>
  );
}
