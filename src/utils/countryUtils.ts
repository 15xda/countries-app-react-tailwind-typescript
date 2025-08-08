import countries from "../constants/country_iso_object";

const getCountryNameByISO = (code: string) => {
  return countries[code.toUpperCase()] || "Unknown";
};

export { getCountryNameByISO };
