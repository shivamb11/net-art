import styled from "styled-components";
import Connect from "./Connect.jsx";
import { FacebookOutlined, LanguageOutlined, Phone } from "@mui/icons-material";

const StyledFooter = styled.footer`
  background-color: #ec3237;
  color: white;
  margin: 10px;
  padding: 30px 0px 60px;
  display: flex;
  justify-content: space-around;
`;

function Footer() {
  return (
    <StyledFooter>
      <Connect
        connectStyle={{ gap: "5px" }}
        iconStyle={{ backgroundColor: "white" }}
        renderItem={<Phone style={{ color: "#ec3237", fontSize: "26px" }} />}
      >
        Toll free <strong>1800 200 1234</strong>
      </Connect>
      <Connect renderItem={<FacebookOutlined style={{ fontSize: "36px" }} />}>
        www.facebook.com/cripumps
      </Connect>
      <Connect renderItem={<LanguageOutlined style={{ fontSize: "36px" }} />}>
        www.crigroups.com
      </Connect>
    </StyledFooter>
  );
}

export default Footer;
