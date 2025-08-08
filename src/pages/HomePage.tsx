import { useEffect, useState } from "react";
import Container from "../components/Container";
import CountryCard from "../components/CountryCard";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import { getAllCountries } from "../api/requests";
import DropDownSelect from "../components/DropDownSelect";

type Country = {
  name: { common: string };
  capital: string[];
  flags: { png: string; svg: string };
  region: string;
};

export default function HomePage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeRegion, setActiveRegion] = useState("None");
  const [finalData, setFinalData] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getAllCountries();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    let result = countries;

    const filterCountries = () => {
      if (activeRegion) {
        result = result.filter((country) => {
          return activeRegion === "None" || !activeRegion
            ? true
            : country.region === activeRegion;
        });
      }
      result = result.filter((country) =>
        country?.name?.common.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFinalData(result);
    };

    filterCountries();
  }, [activeRegion, searchTerm, countries]);

  return (
    <div className="mb-40">
      <Header />
      <Container className="py-10 flex justify-between flex-col px-5 lg:px-0 md:flex-row gap-5">
        <SearchBox
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <DropDownSelect
          activeRegion={activeRegion}
          setActiveRegion={setActiveRegion}
        />
      </Container>

      <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 lg:px-0">
        {finalData.length > 0 &&
          finalData.map((country, index) => (
            <CountryCard
              className="transform hover:-translate-y-2 transition duration-300 ease-in-out hover:outline hover:outline-solid hover:outline-white"
              key={index}
              name={country.name.common}
              capital={country.capital[0]}
              flagURL={country?.flags.svg}
            />
          ))}
      </Container>
    </div>
  );
}
