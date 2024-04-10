import { Link } from "@tanstack/react-location";
import { useCountryFlags } from "../hooks/CountryFlagContext";
import { motion } from "framer-motion";

export const CountryFlagsList = () => {
  const { countryFlag } = useCountryFlags();
  return (
    <div className="mx-5 mr-3">
      <div className=" lg:h-[41rem] h-full overflow-y-auto scrollbar-hide ">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ml-1 m-3 ">
          {countryFlag.map((c) => (
            <Link key={c.name} to={`./countryFlag/${c.name}`}>
              <li
                key={c.name}
                className=" col-span-1  rounded text-center bg-white shadow-xl  ">
                <div className="flex flex-1 flex-col p-8 justify-center items-center shadow-md">
                  <motion.div
                    initial={{ opacity: 0.5, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 3.4 }}
                    className="flex bg-cyan-500  w-40 h-40 justify-center items-center rounded-sm">
                    <img
                      src={c.flag}
                      className="px-1 align-middle rounded object-center shadow-md"
                    />
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0.5, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2.4 }}
                    className="py-4">
                    {c.name}
                  </motion.h2>
                  <motion.span
                    className="DM "
                    initial={{ opacity: 0.1, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3.4 }}>
                    Capital:<span> {c.capital}</span>
                  </motion.span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
