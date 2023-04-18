import { ReactNode, createContext, useState } from 'react'

interface ContextProviderProps {
  children: ReactNode
}

interface CartItem {
  id: number
  name: string
  image: string
  price: number
  qtd: number
}

interface DeliveryInformations {
  cep: string
  street: string
  number: string
  complement?: string
  district: string
  city: string
  uf: string
  payment: string
}

interface CoffeContextType {
  shoppingCart: CartItem[]
  addItemToShoppingCart: (newItem: CartItem) => void
  deliveryInfo: DeliveryInformations
  updateDeliveryInformation: (newAddress: DeliveryInformations) => void
}

export const CoffeContext = createContext({} as CoffeContextType)

export function CoffeContextProvider({ children }: ContextProviderProps) {
  const [shoppingCart, setShoppingCart] = useState<CartItem[]>([])
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInformations>(
    {} as DeliveryInformations,
  )

  const addItemToShoppingCart = (newItem: CartItem) => {
    const isNewItemExistInCart = shoppingCart.find(
      ({ id }) => id === newItem.id,
    )

    if (isNewItemExistInCart) {
      setShoppingCart((state) =>
        state.map((item) => {
          if (item.id === newItem.id) return newItem
          return item
        }),
      )
    } else {
      setShoppingCart((state) => [...state, newItem])
    }
  }

  const updateDeliveryInformation = (
    newDeliveryInformation: DeliveryInformations,
  ) => {
    setDeliveryInfo((_state) => ({ ...newDeliveryInformation }))
  }

  return (
    <CoffeContext.Provider
      value={{
        shoppingCart,
        addItemToShoppingCart,
        deliveryInfo,
        updateDeliveryInformation,
      }}
    >
      {children}
    </CoffeContext.Provider>
  )
}
