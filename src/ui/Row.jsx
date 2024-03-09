import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "vertical" &&
    css`
      align-items: center;
      justify-content: space-between;
    `}
  ${(props) =>
    props.type === "horizontal" &&
    css`
      flex-direction: column;
      gap: 10px;
    `}
  padding: 5px;
  margin: 5px;
`;

export default Row;
