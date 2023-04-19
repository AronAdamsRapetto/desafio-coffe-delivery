import styled from 'styled-components'

export const FeedBackPageContainer = styled.main`
  display: flex;
  justify-content: center;
  gap: 6.37rem;
  padding-top: 5rem;
  align-items: flex-end;
`

export const TitleFeedback = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.3;
  color: ${(props) => props.theme['yellow-dark']};

  ~ span {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const DeliveryInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
  margin-top: 2.5rem;

  ::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px;
    border: 1px solid transparent;
    background: linear-gradient(90deg, #dbac2c, #8047f8) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

export const BulletPointContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: flex-start;
  line-height: 1.3;

  > div {
    display: flex;
    flex-direction: column;

    > span:last-child {
      font-weight: bold;
    }
  }
`

const BaseIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  color: ${(props) => props.theme.white};
  border-radius: 50%;
`

export const AddressIconContainer = styled(BaseIconContainer)`
  background-color: ${(props) => props.theme.purple};
`

export const TimeIconContainer = styled(BaseIconContainer)`
  background-color: ${(props) => props.theme.yellow};
`

export const PaymentIconContainer = styled(BaseIconContainer)`
  background-color: ${(props) => props.theme['yellow-dark']};
`
