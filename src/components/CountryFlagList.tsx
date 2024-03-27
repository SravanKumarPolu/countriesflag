import { useCountryFlags } from "../hooks/CountryFlagContext";

export const CountryFlagsList = () => {
  const { countryFlag } = useCountryFlags();
  return (
    <div className="overflow-y-auto h-[32rem]  ">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-1 m-3">
        {countryFlag.map((c) => (
          <li
            key={c.name}
            className=" col-span-1 rounded-lg text-center bg-white shadow-xl  ">
            <div className="flex flex-1 flex-col p-8 justify-center items-center">
              <img
                src={c.flag}
                className="w-32 h-32 align-middle rounded object-center"
              />

              <h2 className="py-4">{c.name}</h2>
              {/* <span>Capital:{c.capital}</span> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
