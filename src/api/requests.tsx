const baseURl = import.meta.env.VITE_COUNTRIES_BASE_URL;

const getCountryByName = async (name: string) => {
  try {
    const response = await fetch(`${baseURl}name/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getAllCountries = async () => {
  try {
    const response = await fetch(
      `${baseURl}all?fields=name,capital,flags,region`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { getCountryByName, getAllCountries };
