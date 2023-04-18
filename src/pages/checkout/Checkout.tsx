import { CheckoutForm } from './components/checkoutForm/CheckoutForm'
import { ShopSummary } from './components/shopSummary/ShopSummary'
import { CheckoutPageContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutPageContainer>
      <CheckoutForm />
      <ShopSummary />
      {/* Sub-componente de checkout (cards dos produtos) */}
    </CheckoutPageContainer>
  )
}
