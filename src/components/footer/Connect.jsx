import styled from "styled-components";

const StyledConnect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  border-radius: 50%;
  padding: 3px;
  width: fit-content;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Text = styled.p`
  color: white;
  align-self: flex-end;
`;

function Connect({ connectStyle, iconStyle, renderItem, children }) {
  return (
    <StyledConnect style={connectStyle}>
      <Icon style={iconStyle}>{renderItem}</Icon>
      <Text>{children}</Text>
    </StyledConnect>
  );
}

export default Connect;
