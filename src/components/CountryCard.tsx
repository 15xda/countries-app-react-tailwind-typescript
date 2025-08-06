import { useNavigate } from "react-router-dom";

type CountryCard = {
  name: string;
  capital: string;
  flagURL: string;
  className?: string;
};

export default function CountryCard({
  name,
  capital,
  flagURL,
  className = "",
}: CountryCard) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/country/${name}`)}
      className={`flex flex-col bg-[#1F1F1F] h-50 h-70 ${className} cursor-pointer`}
    >
      <div className="  flex w-full h-50 relative after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-[#1F1F1F] after:to-[#1F1F1F]/0">
        <img src={flagURL} alt="" className="object-cover w-full opacity-75" />
      </div>
      <div className="pl-3">
        <h1 className="text-white text-[20px]">{name}</h1>
        <p className="text-white text-sm">{capital}</p>
      </div>
    </div>
  );
}
