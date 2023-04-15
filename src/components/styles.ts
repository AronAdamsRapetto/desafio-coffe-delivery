import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 5rem;
  background: ${props => props.theme.background};
`

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocaleContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  background: ${props => props.theme["purple-light"]};
  border-radius: 6px;
  gap: 0.25rem;

  span {    
    font-size: 0,875;
    color: ${props => props.theme["purple-dark"]};
    line-height: 1.3;
  }
`

export const ShopLinkContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.theme["yellow-ligth"]};
  padding: 0.5rem;
  border-radius: 6px;
  color: ${props => props.theme["yellow-dark"]};

  :hover {
    cursor: pointer;
  }
`

export const ItemsCounter = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  min-height: 20px;
  font-weight: bold;
  font-size: 0.75rem;
  background: ${props => props.theme["yellow-dark"]};
  color: ${props => props.theme.white};
  border-radius: 50%;
  margin-left: -1.5rem;
  margin-top: -1.75rem;
`