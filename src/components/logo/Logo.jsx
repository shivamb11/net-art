import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  @media (max-width: 800px) {
    margin-bottom: 30px;
  }
`;

const Img = styled.img`
  height: 120px;
  width: 340px;
`;

function Logo() {
  return (
    <Header>
      <Img src="/images/logo.png" alt="C.R.I Fluid Systems image" />
    </Header>
  );
}

export default Logo;
