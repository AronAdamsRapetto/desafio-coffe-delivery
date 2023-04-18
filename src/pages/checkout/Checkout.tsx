import { CheckoutForm } from './components/checkoutForm'
import { ShopSummary } from './components/shopSummary'
import { CheckoutPageContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutPageContainer>
      <CheckoutForm />
      <ShopSummary />
    </CheckoutPageContainer>
  )
}
