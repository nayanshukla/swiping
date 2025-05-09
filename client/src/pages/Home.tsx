import { useState, useEffect } from "react";
import CardStack from "@/components/CardStack";
import Header from "@/components/Header";
import SwipeActions from "@/components/SwipeActions";
import EmptyState from "@/components/EmptyState";
import { products } from "@/data/products";

export default function Home() {
  const [likes, setLikes] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);
  const [viewedAll, setViewedAll] = useState(false);
  const [productImageLoaded, setProductImageLoaded] = useState(false);

  // Check if image is loaded
  useEffect(() => {
    const img = new Image();
    img.src = "/test-image-1.jpg";
    img.onload = () => {
      console.log("Product image loaded successfully");
      setProductImageLoaded(true);
    };
    img.onerror = (err) => {
      console.error("Error loading product image:", err);
    };
  }, []);

  const handleSwipe = (productId: number, direction: 'left' | 'right' | 'up') => {
    if (direction === 'right') {
      console.log(`Liked Product ID: ${productId}`);
      setLikes(prev => [...prev, productId]);
    } else if (direction === 'left') {
      console.log(`Passed Product ID: ${productId}`);
    } else if (direction === 'up') {
      console.log(`Add to cart Product ID: ${productId}`);
      setCart(prev => [...prev, productId]);
    }
  };

  const handleReset = () => {
    setLikes([]);
    setCart([]);
    setViewedAll(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-neutral-100 to-neutral-200">
      <Header cartCount={cart.length} />
      
      <main className="flex-1 p-4 flex flex-col items-center justify-center relative overflow-hidden">
        {!viewedAll && (
          <div className="swipe-instruction text-center mb-4 text-neutral-600 opacity-80 text-sm">
            <p>Swipe right to like, left to pass, up to add to cart</p>
          </div>
        )}

        <CardStack 
          products={products} 
          onSwipe={handleSwipe} 
          onEmptyStack={() => setViewedAll(true)} 
        />

        {!viewedAll && (
          <SwipeActions 
            onDislike={() => document.dispatchEvent(new CustomEvent('triggerSwipe', { detail: 'left' }))}
            onLike={() => document.dispatchEvent(new CustomEvent('triggerSwipe', { detail: 'right' }))}
            onAddToCart={() => document.dispatchEvent(new CustomEvent('triggerSwipe', { detail: 'up' }))}
          />
        )}

        {viewedAll && <EmptyState onReset={handleReset} />}
      </main>
    </div>
  );
}
