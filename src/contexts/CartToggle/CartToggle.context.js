import { createContext } from 'react'



const CartToggleContext = createContext({
    hidden: true,
    toggleHidden: () => { }

})

export default CartToggleContext