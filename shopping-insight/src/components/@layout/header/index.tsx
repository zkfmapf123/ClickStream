import styled from "styled-components";
import { theme } from "../../../styles";

export default function DefaultHeader() {
  return (
    <HeaderContiner>
      <HeaderTitle>Click Stream Shopping Insight</HeaderTitle>
    </HeaderContiner>
  );
}

const HeaderContiner = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  background-color: ${theme.GREEN};
`;

const HeaderTitle = styled.span`
  margin-left: 20px;
  color: #fff;
  font-size: 25px;
`;
