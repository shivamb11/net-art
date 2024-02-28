import styled from "styled-components";

const StyledTopContainer = styled.div`
  display: flex;
  padding: 0 10px;
  justify-content: space-around;
  margin: 0 10px 60px;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const LeftContainer = styled.div``;

const ImgLeft = styled.img`
  width: 490px;

  @media (max-width: 800px) {
    width: 260px;
  }
`;

const RightContainer = styled.div`
  @media (max-width: 800px) {
    text-align: center;
  }
`;

const Achievement = styled.h3`
  font-weight: 700;

  @media (max-width: 800px) {
    text-align: justify;
    text-align-last: center;
    margin: 20px 30px;
  }
`;

const List = styled.ul`
  margin: 12px 0 8px 45px;
`;

const ListItem = styled.li`
  letter-spacing: 0.4px;

  @media (max-width: 800px) {
    text-align: justify;
    margin: 20px 50px;
    font-size: 18px;
  }
`;

const ImgRight = styled.img`
  width: 980px;
  margin-bottom: 10px;

  @media (max-width: 800px) {
    width: 880px;
    margin: 30px 0;
  }
`;

const Para = styled.p`
  letter-spacing: 0.6px;
  word-spacing: 0.4px;
  span {
    font-weight: 700;
  }

  @media (max-width: 800px) {
    margin: 15px;
    line-height: 22px;
    font-size: 18px;
  }
`;

function TopContainer() {
  return (
    <StyledTopContainer>
      <LeftContainer>
        <ImgLeft src="/images/1.png" alt="" />
      </LeftContainer>
      <RightContainer>
        <Achievement>
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </Achievement>
        <List>
          <ListItem>
            C.R.I.&apos;s energy efficient products are well recognized by
            various Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </ListItem>
          <ListItem>
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </ListItem>
        </List>
        <ImgRight src="/images/2.png" alt="" />
        <Para>
          Government of India has awarded the{" "}
          <span>&quot;National Energy Conservation Award 2018&quot;</span>. Mr.
          G. Selvaraj, Joint Managing Director of C.R.I. Group received the
          award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
          Kumar Singh, Honorable Minister of State.
        </Para>
      </RightContainer>
    </StyledTopContainer>
  );
}

export default TopContainer;
