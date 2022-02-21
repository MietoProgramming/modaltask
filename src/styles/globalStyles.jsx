import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 25px;
  padding: 10px 0px;
  justify-content: space-between;
  align-items: center;


  > :nth-child(2n){
    width: 100%;
    height: 100%;
    flex: 3;
  }

  > :nth-child(2n + 1){
    width: 100%;
    
    flex: 1;
  }

  > input[type="radio"]{
      color: black;
  }
`;
