import styled from "styled-components";

export const Container = styled.div`
  @media display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  margin: 1rem;

  img {
    width: 300px;
    padding: 2rem;
  }
`;
