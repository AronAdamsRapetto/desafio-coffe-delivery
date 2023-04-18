import { ShoppingCart } from 'phosphor-react'
import coffeDeliveryLogo from '../assets/Coffe-delivery-logo.svg'
import mapPinFill from '../assets/map-pin-fill-icon.svg'
import {
  HeaderContainer,
  ItemsCounter,
  LocaleContainer,
  MenuContainer,
  ShopLinkContainer,
} from './styles'
import { useContext } from 'react'
import { CoffeContext } from '../context/CoffeContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { shoppingCart } = useContext(CoffeContext)
  const itemsCounter = shoppingCart.reduce((acc, { qtd }) => (acc += qtd), 0)

  return (
    <HeaderContainer>
      <img src={coffeDeliveryLogo} alt="" />
      <MenuContainer>
        <LocaleContainer>
          <img src={mapPinFill} alt="" />
          <span>Porto Alegre, RS</span>
        </LocaleContainer>
        <NavLink to="/checkout">
          <ShopLinkContainer>
            <ShoppingCart size={22} />
          </ShopLinkContainer>
        </NavLink>
        {itemsCounter ? <ItemsCounter>{itemsCounter}</ItemsCounter> : null}
      </MenuContainer>
    </HeaderContainer>
  )
}
