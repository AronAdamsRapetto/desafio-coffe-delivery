import { ReactNode, createContext, useEffect, useState } from 'react'

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
  updateShoppingCart: (newItem: CartItem) => void
  deliveryInfo: DeliveryInformations
  updateDeliveryInformation: (newAddress: DeliveryInformations) => void
  removeCoffeFromCart: (id: number) => void
  clearCart: () => void
}

export const CoffeContext = createContext({} as CoffeContextType)

export function CoffeContextProvider({ children }: ContextProviderProps) {
  const [shoppingCart, setShoppingCart] = useState<CartItem[]>(() => {
    const storageShoppingCart = JSON.parse(
      localStorage.getItem('coffe-delivery@shoppingCart-1.0.0') as string,
    )

    if (!storageShoppingCart) {
      return []
    }

    return storageShoppingCart
  })

  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInformations>(
    {} as DeliveryInformations,
  )

  const updateShoppingCart = (newItem: CartItem) => {
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

  const removeCoffeFromCart = (idItem: number) => {
    setShoppingCart((state) => state.filter(({ id }) => id !== idItem))
  }

  const clearCart = () => {
    setShoppingCart([])
  }

  const updateDeliveryInformation = (
    newDeliveryInformation: DeliveryInformations,
  ) => {
    setDeliveryInfo((_state) => ({ ...newDeliveryInformation }))
  }

  useEffect(() => {
    localStorage.setItem(
      'coffe-delivery@shoppingCart-1.0.0',
      JSON.stringify(shoppingCart),
    )
  }, [shoppingCart])

  return (
    <CoffeContext.Provider
      value={{
        shoppingCart,
        updateShoppingCart,
        removeCoffeFromCart,
        deliveryInfo,
        updateDeliveryInformation,
        clearCart,
      }}
    >
      {children}
    </CoffeContext.Provider>
  )
}
