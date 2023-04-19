import imagemDaHome from '../../assets/home-image.svg'
import {
  BulletPoint,
  BulletPointsContainer,
  BulletPointsSection,
  CafeListContainer,
  CoffeIconContainer,
  DeliveryIconContainer,
  HomeContainer,
  IntroductionContainer,
  ShopIconContainer,
  TimerIconContainer,
  WelcomeContainer,
} from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { coffeData } from '../../data'
import { CoffeCard } from './components/CoffeCard'

export function Home() {
  return (
    <HomeContainer>
      <WelcomeContainer>
        <div>
          <IntroductionContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </IntroductionContainer>
          <BulletPointsContainer>
            <BulletPointsSection>
              <BulletPoint>
                <ShopIconContainer>
                  <ShoppingCart size={16} />
                </ShopIconContainer>
                <span>Compra simples e segura</span>
              </BulletPoint>
              <BulletPoint>
                <TimerIconContainer>
                  <Timer size={16} />
                </TimerIconContainer>
                <span>Entrega rápida e restreada</span>
              </BulletPoint>
            </BulletPointsSection>
            <BulletPointsSection>
              <BulletPoint>
                <DeliveryIconContainer>
                  <Package size={16} />
                </DeliveryIconContainer>
                <span>Embalagem mantém o café intacto</span>
              </BulletPoint>
              <BulletPoint>
                <CoffeIconContainer>
                  <Coffee size={16} />
                </CoffeIconContainer>
                <span>O café chega fesquinho até você</span>
              </BulletPoint>
            </BulletPointsSection>
          </BulletPointsContainer>
        </div>
        <img src={imagemDaHome} alt="" />
      </WelcomeContainer>
      <CafeListContainer>
        <h2>Nossos cafés</h2>
        <div>
          {coffeData.map((coffe) => (
            <CoffeCard key={coffe.id} {...coffe} />
          ))}
        </div>
      </CafeListContainer>
    </HomeContainer>
  )
}
