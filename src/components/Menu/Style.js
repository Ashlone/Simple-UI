import styled from "styled-components";

export const MenuContainer = styled.div`
  background: orange;
  color: black;

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3rem;
  padding-right: 3rem;
`;

export const Logo = styled.h2`
  font-size: 1.5rem;
`;

export const List = styled.ul`
  display: flex;
  gap: 3rem;
`;

export const ListItems = styled.li`
  display: flex;
  align-items: center;

  list-style: none;
`;
