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

interface CoffeContextType {
  shoppingCart: CartItem[]
  addItemToShoppingCart: (newItem: CartItem) => void
}

export const CoffeContext = createContext({} as CoffeContextType)

export function CoffeContextProvider({ children }: ContextProviderProps) {
  const [shoppingCart, setShoppingCart] = useState<CartItem[]>([])

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

  return (
    <CoffeContext.Provider value={{ shoppingCart, addItemToShoppingCart }}>
      {children}
    </CoffeContext.Provider>
  )
}
