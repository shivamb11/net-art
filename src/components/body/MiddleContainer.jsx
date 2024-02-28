import styled from "styled-components";

const StyledMiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    margin: 20px 0;
    margin-bottom: 30px;
  }
`;

const Para = styled.p`
  @media (max-width: 800px) {
    margin: 0 30px;
    line-height: 22px;
  }
`;

const Img = styled.img`
  width: 1200px;
  height: 500px;
  margin: 20px 0;

  @media (max-width: 800px) {
    width: 750px;
    height: 250px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 10px;
`;

const ListItem = styled.li`
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

const Dash = styled.span``;

function MiddleContainer() {
  return (
    <StyledMiddleContainer>
      <Para>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </Para>
      <Img src="/images/3.png" />
      <List>
        <ListItem>Valves</ListItem>
        <Dash>-</Dash>
        <ListItem>Pumps - Pipes</ListItem>
        <Dash>-</Dash>
        <ListItem>IoT Drives & Controllers</ListItem>
        <Dash>-</Dash>
        <ListItem>Wires & Cables</ListItem>
        <Dash>-</Dash>
        <ListItem>Solar Systems</ListItem>
        <Dash>-</Dash>
        <ListItem>Motors</ListItem>
      </List>
    </StyledMiddleContainer>
  );
}

export default MiddleContainer;
