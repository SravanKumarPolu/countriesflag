import { Countries } from "@/components/useCountryFlagsSource";

const CountriesFlagList: React.FC<{ countries: Countries[] }> = ({
  countries,
}) => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      {countries.map((c, index) => (
        <li
          key={index}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow-md">
          <div className="flex-1 flex flex-col p-8">
            <img
              src={c.flag}
              className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
            />
            <h2 className="mt-6 text-gray-900 text-md font-medium">{c.name}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CountriesFlagList;
