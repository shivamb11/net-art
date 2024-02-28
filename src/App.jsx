import styled from "styled-components";
import Body from "./components/body/Body.jsx";
import Footer from "./components/footer/Footer.jsx";
import Logo from "./components/logo/Logo.jsx";

const StyledApp = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

function App() {
  return (
    <StyledApp>
      <Logo />
      <Body />
      <Footer />
    </StyledApp>
  );
}

export default App;
