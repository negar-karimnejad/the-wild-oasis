import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Input from "./ui/Input";
import Row from "./ui/Row";

function App() {
  return (
    <>
      <GlobalStyles />
      <Row type="vertical">
        <Heading as="h1">The wild oasis</Heading>
        <div>
          <Heading as="h2">Check in and out</Heading>
          <Button type="button" onClick={() => alert("Check in")}>
            Check in
          </Button>
          <Button type="button" onClick={() => alert("Check out")}>
            Check out
          </Button>
        </div>
      </Row>
      <Row type="horizontal">
        <Heading as="h3">Form</Heading>
        <div>
          <form action="">
            <Input type="text" placeholder="write here..." />
            <Input type="text" placeholder="write here..." />
          </form>
        </div>
      </Row>
    </>
  );
}

export default App;
