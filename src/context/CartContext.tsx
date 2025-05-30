
import { createContext, useContext, useState, ReactNode } from 'react';

export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartContextData {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
}

const CartContext = createContext({} as CartContextData);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart(prev =>
            prev.some(p => p.id === product.id)
                ? prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p)
                : [...prev, { ...product, quantity: 1 }]
        );
    };

    const removeFromCart = (id: string) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
