import coffeDeliveryLogo from '../assets/Coffe-delivery-logo.svg'
import mapPinFill from '../assets/map-pin-fill.svg'
import shoppingCart from '../assets/shoppingCart.svg'
import { HeaderContainer, ItemsCounter, LocaleContainer, MenuContainer, ShopLinkContainer } from './styles'

export function Header () {
  return (
    <HeaderContainer>
      <img src={coffeDeliveryLogo} />
      <MenuContainer>
        <LocaleContainer>
          <img src={mapPinFill} />
          <span>Porto Alegre, RS</span>
        </LocaleContainer>
        <ShopLinkContainer>
          <img src={shoppingCart} />
        </ShopLinkContainer>
        <ItemsCounter>1</ItemsCounter>
      </MenuContainer>
    </HeaderContainer>
  )
}