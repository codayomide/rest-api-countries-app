const CountryDetails = ({ countryData }) => {
  return (
    <>
      {countryData.map((country, index) => (
        <div key={index}>
          <p>{country.name.common}</p>
        </div>
      ))}
    </>
  );
}
 
export default CountryDetails;