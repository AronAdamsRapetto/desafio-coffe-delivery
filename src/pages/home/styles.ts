import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 5.875rem 0;
`

export const WelcomeContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
  margin-bottom: 4.5rem;
`

export const IntroductionContainer = styled.div`
  max-width: 588px;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const BulletPointsContainer = styled.div`
  max-width: 588px;
  display: flex;
  margin-top: 4.125rem;
  gap: 2.5rem;
`

export const BulletPointsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.25rem;
`

export const BulletPoint = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    font-size: 1rem;
  }
`

const BaseIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 32px;
  min-width: 32px;
  border-radius: 50%;
  color: ${(props) => props.theme.white};
`

export const ShopIconContainer = styled(BaseIconContainer)`
  background-color: ${(props) => props.theme['yellow-dark']};
`

export const TimerIconContainer = styled(BaseIconContainer)`
  background-color: ${(props) => props.theme.yellow};
`
export const DeliveryIconContainer = styled(BaseIconContainer)`
  background-color: ${(props) => props.theme['base-text']};
`
export const CoffeIconContainer = styled(BaseIconContainer)`
  background-color: ${(props) => props.theme.purple};
`

export const CafeListContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto 4.5rem auto;

  h2 {
    margin-bottom: 3.375rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  div {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`
