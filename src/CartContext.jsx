import { useState, createContext } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const cartCount = cart.reduce(
        (total, product) => total + product.quantity,
        0
    );
    const cartSum = cart.reduce(
        (total, product) => total + product.final_price * product.quantity,
        0
    );

    function handleAddProduct(newProduct) {
        // Check if item exists
        const found = cart.find((product) => product.id === newProduct.id);

        if (found) {
            // Increase quantity
            const updatedCart = cart.map((product) => {
                if (product.id === newProduct.id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1,
                    };
                }
                return product;
            });
            setCart(updatedCart);
        } else {
            // Product is new to the cart
            setCart([
                ...cart,
                {
                    ...newProduct,
                    quantity: 1,
                },
            ]);
        }
    }

    function handleRemoveProduct(product) {
        if (product.quantity > 1) {
            const updatedCart = cart.map((cartProduct) => {
                if (cartProduct.id === product.id) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity - 1,
                    };
                }
                return cartProduct;
            });
            setCart(updatedCart);
        } else {
            const updatedCart = cart.filter(
                (cartProduct) => cartProduct.id !== product.id
            );
            setCart(updatedCart);
        }
    }

    return (
        <CartContext
            value={{
                cart,
                cartCount,
                cartSum,
                handleAddProduct,
                handleRemoveProduct,
            }}
        >
            {children}
        </CartContext>
    );
}
