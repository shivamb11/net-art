import styled from "styled-components";

const StyledBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 20px 0;

  @media (max-width: 800px) {
    margin: 20px 10px;
  }
`;

const Heading = styled.h3`
  font-weight: 700;
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px 4px;

  @media (max-width: 800px) {
    gap: 8px 6px;
  }
`;

const ListItem = styled.li``;

const Break = styled.hr`
  border: 1.5px solid #ec3237;
`;

function BottomContainer() {
  return (
    <StyledBottomContainer>
      <Heading>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</Heading>
      <List>
        <ListItem>CHEMICALS & PROCESS</ListItem>
        <Break />
        <ListItem>POWER</ListItem>
        <Break />
        <ListItem>WATER & WASTE WATER</ListItem>
        <Break />
        <ListItem>OILS & GAS</ListItem>
        <Break />
        <ListItem>PHARMA SUGARS</ListItem>
        <Break />
        <ListItem>SUGARS & DISTILLERIES</ListItem>
        <Break />
        <ListItem>PAPER & PULP</ListItem>
        <Break />
        <ListItem>MARINE & DEFENCE</ListItem>
        <Break />
        <ListItem>METAL & MINING</ListItem>
        <Break />
        <ListItem>FOOD & BEVERAGE</ListItem>
        <Break />
        <ListItem>PETROCHEMICAL & REFINERIES</ListItem>
        <Break />
        <ListItem>SOLAR</ListItem>
        <Break />
        <ListItem>BUILDING</ListItem>
        <Break />
        <ListItem>HVAC</ListItem>
        <Break />
        <ListItem>FIRE FIGHTING</ListItem>
        <Break />
        <ListItem>AGRICULTURE & RESIDENTIAL</ListItem>
      </List>
    </StyledBottomContainer>
  );
}

export default BottomContainer;
