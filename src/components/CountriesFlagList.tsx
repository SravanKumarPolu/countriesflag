interface Countries {
  name: string;
  flag: string;
  capital: string;
}
const CountriesFlagList: React.FC<{ countries: Countries[] }> = ({
  countries,
}) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {countries.map((c, index) => (
        <div key={index}>
          {" "}
          <img src={c.flag} width={80} />
          <div>{c.name}</div>
          <p>Capital:{c.capital}</p>
        </div>
      ))}
    </div>
  );
};

export default CountriesFlagList;
