import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../components/Container";
import Button from "../components/Button";
import { getCountryByName, getNameByCode } from "../api/requests";
import Loader from "../components/Loader";

type CountryInfo = {
  name: { common: string; official: string };
  borders: string[];
  flags: { png: string; svg: string };
  coatOfArms: { png: string; svg: string };
  capital: string[];
  languages: { [code: string]: string };
  population: number;
  area: number;
  currencies: { [code: string]: { symbol: string; name: string } };
  region: string;
  subregion: string;
  car: { side: string };
  tld: string[];
  timezones: string[];
};

export default function CountryInstpectPage() {
  const [countryInfo, setCountryInfo] = useState<CountryInfo>();
  const [borders, setBorders] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { countryName } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const getCountryInfo = async () => {
      if (countryName === undefined) return;
      setLoading(true);
      try {
        const countryData = await getCountryByName(countryName);

        console.log(countryData[0]);
        setCountryInfo(countryData[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCountryInfo();
  }, [countryName]);

  useEffect(() => {
    const getBorders = async () => {
      if (!countryInfo?.borders || countryInfo.borders.length === 0) {
        return;
      }
      try {
        const borders = await Promise.all(
          countryInfo?.borders.map((country: string) => getNameByCode(country))
        );

        setBorders(borders);
      } catch (error) {
        console.log(error);
      }
    };

    getBorders();
  }, [countryInfo]);

  useEffect(() => {
    console.log(countryInfo);
  }, [countryInfo]);

  if (loading) return <Loader />;
  if (!countryInfo && !loading)
    return (
      <div className="flex absolute items-center justify-center w-full h-full">
        <h1 className="absolute text-white text-2xl">
          No Country Found or Bad Request!
        </h1>
      </div>
    );

  return (
    <div className="text-white mb-40">
      <Container className="py-10 px-5 lg:px-0">
        <div>
          <Button
            onClick={() => navigate("/")}
            text="Home"
            className="flex gap-2 flex-row px-10 py-3 bg-[#1f1f1f]"
          >
            <img src="/icons/arrow.svg" className="brightness-1000"></img>
          </Button>
        </div>
      </Container>

      <Container className="">
        <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-[#131314] after:to-[#131314]/0">
          <img
            className="w-full h-[300px] object-cover opacity-70"
            src={countryInfo?.flags.svg}
            alt=""
          />
          <div className="absolute bottom-5 items-center left-10 z-100 flex flex-col gap-1">
            <img
              className="w-[120px]"
              alt=""
              src={countryInfo?.coatOfArms.svg}
            />

            <h1 className="lg:text-[40px] ">{countryInfo?.name.common}</h1>
            <p className=" text-sm">
              {countryInfo?.capital ? countryInfo.capital[0] : ""}
            </p>
          </div>
        </div>
      </Container>

      <Container className="grid lg:grid-cols-2 md:grid-cols-1 px-5 mt-10 gap-10">
        <div className="grid grid-cols-2 gap-5">
          <ul className="flex flex-col gap-5 border border-[#131314]">
            <li>
              <h1 className="">Official Name:</h1>
              <h2 className=" font-bold">{countryInfo?.name.official}</h2>
            </li>

            <li>
              <h1 className=" ">Languages:</h1>
              <ul className="flex flex-row flex-wrap gap-1">
                {Object.values(countryInfo?.languages ?? {}).map((language) => {
                  return (
                    <li key={language} className="font-bold">
                      {language}
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <h1 className="">Population:</h1>
              <h2 className=" font-bold">
                {countryInfo?.population.toLocaleString()}
              </h2>
            </li>

            <li>
              <h1 className="">Region:</h1>
              <h2 className=" font-bold">{countryInfo?.region}</h2>
            </li>

            <li>
              <h1 className="">Subregion:</h1>
              <h2 className=" font-bold">{countryInfo?.subregion}</h2>
            </li>
          </ul>

          <ul className="flex flex-col gap-5 border border-[#131314]">
            <li>
              <h1 className="">Area:</h1>
              <h2 className=" font-bold">
                {countryInfo?.area.toLocaleString()} km²
              </h2>
            </li>
            <li>
              <h1 className="">Driving Side:</h1>
              <h2 className=" font-bold">{countryInfo?.car.side}</h2>
            </li>

            <li>
              <h1 className="">Currency:</h1>
              <h2 className=" font-bold">
                {Object.values(countryInfo?.currencies ?? {}).map(
                  (currency) => `${currency.symbol} ${currency.name}`
                )}
              </h2>
            </li>

            <li>
              <h1 className="">Top-Level Domains:</h1>
              <h2 className=" font-bold">
                {countryInfo?.tld.map((domain) => `${domain} `)}
              </h2>
            </li>

            <li>
              <h1 className="">Timezones:</h1>
              <h2 className=" font-bold">
                {countryInfo?.timezones.map((timezone) => `${timezone} `)}
              </h2>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="">Bordering Countries:</h1>

          <div className="flex flex-row gap-4 flex-wrap ">
            {borders.length > 0 ? (
              borders.map((country, index) => (
                <Button
                  onClick={() => navigate(`/country/${country}`)}
                  key={index}
                  text={country}
                />
              ))
            ) : (
              <h2 className=" font-bold">N/A</h2>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
