const baseURl = "https://restcountries.com/v3.1/";

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

const getNameByCode = async (alphaCode: string) => {
  try {
    const response = await fetch(`${baseURl}alpha/${alphaCode}`);
    const data = await response.json();
    return data[0].name.common;
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

export { getCountryByName, getAllCountries, getNameByCode };
