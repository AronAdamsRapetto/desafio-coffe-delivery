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

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeDeliveryLogo} alt="" />
      <MenuContainer>
        <LocaleContainer>
          <img src={mapPinFill} alt="" />
          <span>Porto Alegre, RS</span>
        </LocaleContainer>
        <ShopLinkContainer>
          <ShoppingCart size={22} />
        </ShopLinkContainer>
        <ItemsCounter>1</ItemsCounter>
      </MenuContainer>
    </HeaderContainer>
  )
}
