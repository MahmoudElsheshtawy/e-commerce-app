import { createContext, useContext, useEffect, useState } from "react";
import Navbar from "../components/Header/Navbar";
import Home from "../components/Home/Home";
// transfare []=> {}
const initialvalue = localStorage.getItem("shoppingcart")
  ? JSON.parse(localStorage.getItem("shoppingcart"))
  : [];

export const ShoppingCartContext = createContext({});

const ShoppingCartProvider = ({ Children }) => {
  // conuter
  const [cartItems, setCartItems] = useState(initialvalue);
  // counter
  const cartQuntity = cartItems.reduce(
    (qunatity, item) => item.qunatity + qunatity,
    0
  );
  // qunatity in cart
  const gitItemqunatity = (id) => {
    return cartItems.find((item) => item.id === id)?.qunatity || 0;
  };
  // qunatity apper in cart +1
  const increaseCartQunatity = (id) => {
    //    edit state
    setCartItems((currntitem) => {
      if (currntitem.find((item) => item.id === id) == null) {
        return [...currntitem, { id, qunatity: 1 }];
      } else {
        return currntitem.map((item) => {
          if (item.id === id) {
            return { ...item, qunatity: item.qunatity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  // qunatity apper in cart -1
  const decreaseCartQunatity = (id) => {
    setCartItems((currntitem) => {
      if (currntitem.find((item) => item.id === id)?.qunatity === 1) {
        return currntitem.filter((item) => item.id !== id);
      } else {
        return currntitem.map((item) => {
          if (item.id === id) {
            return { ...item, qunatity: item.qunatity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItemFromCart = (id) => {
    setCartItems((currntitem) => currntitem.filter((item) => item.id !== id));
  };

  useEffect(() => {
    //create local
    localStorage.setItem("shoppingcart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <>
      <ShoppingCartContext.Provider
        value={{
          cartItems,
          gitItemqunatity,
          increaseCartQunatity,
          decreaseCartQunatity,
          removeItemFromCart,
          cartQuntity,
        }}
      >
        {Children}

        <Navbar />
        <Home />
      </ShoppingCartContext.Provider>
    </>
  );
};

export default ShoppingCartProvider;

// create a fun for call eny commponent
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
