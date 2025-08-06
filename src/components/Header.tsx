import Container from "./Container";

export default function Header() {
  return (
    <div className="flex bg-[#1F1F1F] h-15 px-10 text-white">
      <Container className="flex text-[20px] items-center w-full">
        <h1>Countries App</h1>
      </Container>
    </div>
  );
}
