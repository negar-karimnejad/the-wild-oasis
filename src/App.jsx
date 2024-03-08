import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;
const Button = styled.button`
  background-color: purple;
  color: white;
  font-size: 20px;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  margin: 5px;
`;
const Input = styled.input`
  background-color: #d7d7d7;
  color: purple;
  font-size: 20px;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
`;
const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #ff000023;
  padding: 5px;
  margin: 5px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <DIV>
        <H1>The wild oasis</H1>
        <Button type="button" onClick={() => alert("Check in")}>
          Check in
        </Button>
        <Button type="button" onClick={() => alert("Check out")}>
          Check out
        </Button>
        <Input type="text" placeholder="write here..." />
      </DIV>
    </>
  );
}

export default App;
