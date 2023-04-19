import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import feedbackImage from '../../assets/feedback-image.svg'
import {
  AddressIconContainer,
  BulletPointContainer,
  DeliveryInfoContainer,
  FeedBackPageContainer,
  PaymentIconContainer,
  TimeIconContainer,
  TitleFeedback,
} from './styles'
import { useContext } from 'react'
import { CoffeContext } from '../../context/CoffeContext'

export function Feedback() {
  const { deliveryInfo } = useContext(CoffeContext)

  return (
    <FeedBackPageContainer>
      <div>
        <TitleFeedback>Uhu! Pedido confirmado</TitleFeedback>
        <span>Agora é só aguardar que logo o café chegara até você</span>
        <DeliveryInfoContainer>
          <BulletPointContainer>
            <AddressIconContainer>
              <MapPin size={16} />
            </AddressIconContainer>
            <span>
              Entrega em{' '}
              <strong>{`${deliveryInfo.street}, ${deliveryInfo.number}`}</strong>
              <br />
              {`${deliveryInfo.district} - ${deliveryInfo.city}, ${deliveryInfo.uf} `}
            </span>
          </BulletPointContainer>
          <BulletPointContainer>
            <TimeIconContainer>
              <Timer size={16} />
            </TimeIconContainer>
            <div>
              <span>Previsão de entrega</span>
              <span>20 min - 30 min</span>
            </div>
          </BulletPointContainer>
          <BulletPointContainer>
            <PaymentIconContainer>
              <CurrencyDollar size={16} />
            </PaymentIconContainer>
            <div>
              <span>Pagamento na entrega</span>
              <span>{deliveryInfo.payment}</span>
            </div>
          </BulletPointContainer>
        </DeliveryInfoContainer>
      </div>
      <img src={feedbackImage} alt="" />
    </FeedBackPageContainer>
  )
}
