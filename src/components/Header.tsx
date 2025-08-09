import Container from "./Container";

export default function Header() {
  return (
    <div className="flex bg-accent h-15 px-10 text-white">
      <Container className="flex text-xl items-center w-full">
        <h1>Countries App</h1>
      </Container>
    </div>
  );
}
