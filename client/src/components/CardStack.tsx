import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import ProductCard from "./ProductCard";
import { Product } from "@/data/products";
import useSwipe from "@/hooks/useSwipe";

interface CardStackProps {
  products: Product[];
  onSwipe: (productId: number, direction: 'left' | 'right' | 'up') => void;
  onEmptyStack: () => void;
}

export default function CardStack({ products, onSwipe, onEmptyStack }: CardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitDirection, setExitDirection] = useState<'left' | 'right' | 'up' | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  const cardStackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const {
    handleDrag,
    handleDragEnd,
    showLikeBadge,
    showDislikeBadge,
    showCartBadge,
  } = useSwipe({
    onSwipe: (direction) => {
      if (currentIndex < products.length) {
        setExitDirection(direction);
        onSwipe(products[currentIndex].id, direction);
        
        // Delay index change to allow animation to complete
        setTimeout(() => {
          setCurrentIndex(prev => prev + 1);
          setExitDirection(null);
          x.set(0);
          y.set(0);
          
          // Check if we've reached the end of the products
          if (currentIndex + 1 >= products.length) {
            onEmptyStack();
          }
        }, 500);
      }
    }
  });

  useEffect(() => {
    // Listen for triggerSwipe events from buttons
    const handleExternalSwipe = (e: CustomEvent<'left' | 'right' | 'up'>) => {
      if (e.detail === 'left') {
        setExitDirection('left');
        onSwipe(products[currentIndex].id, 'left');
      } else if (e.detail === 'right') {
        setExitDirection('right');
        onSwipe(products[currentIndex].id, 'right');
      } else if (e.detail === 'up') {
        setExitDirection('up');
        onSwipe(products[currentIndex].id, 'up');
      }
      
      // Delay index change to allow animation to complete
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setExitDirection(null);
        x.set(0);
        y.set(0);
        
        // Check if we've reached the end of the products
        if (currentIndex + 1 >= products.length) {
          onEmptyStack();
        }
      }, 500);
    };

    document.addEventListener('triggerSwipe', handleExternalSwipe as EventListener);
    
    return () => {
      document.removeEventListener('triggerSwipe', handleExternalSwipe as EventListener);
    };
  }, [currentIndex, onEmptyStack, onSwipe, products, x, y]);

  // Determine exit animation variants for Framer Motion
  const getExitVariant = () => {
    switch (exitDirection) {
      case 'left':
        return 'exitLeft';
      case 'right':
        return 'exitRight';
      case 'up':
        return 'exitUp';
      default:
        return '';
    }
  };

  // Apply badge visibility based on drag position
  useEffect(() => {
    if (!cardStackRef.current) return;
    
    const currentCard = cardStackRef.current.querySelector('.card');
    if (!currentCard) return;
    
    const likeBadge = currentCard.querySelector('.like-badge') as HTMLElement;
    const dislikeBadge = currentCard.querySelector('.dislike-badge') as HTMLElement;
    const cartBadge = currentCard.querySelector('.cart-badge') as HTMLElement;
    
    if (likeBadge) {
      likeBadge.style.display = showLikeBadge ? 'block' : 'none';
    }
    
    if (dislikeBadge) {
      dislikeBadge.style.display = showDislikeBadge ? 'block' : 'none';
    }
    
    if (cartBadge) {
      cartBadge.style.display = showCartBadge ? 'block' : 'none';
    }
  }, [showLikeBadge, showDislikeBadge, showCartBadge]);

  if (products.length === 0 || currentIndex >= products.length) {
    return null;
  }

  // Calculate constraints based on card size
  const constraints = {
    top: -1000,
    right: 1000,
    bottom: 1000,
    left: -1000
  };

  return (
    <div 
      ref={cardStackRef}
      className="card-container relative w-full max-w-sm h-[70vh] mx-auto"
    >
      {/* Render visible cards in the stack (current + 2 behind) */}
      {products.slice(currentIndex, currentIndex + 3).map((product, index) => {
        const isCurrentCard = index === 0;
        
        // Stack effect styling
        let stackStyle: React.CSSProperties = {};
        
        if (index === 1) {
          stackStyle = {
            transform: 'translateY(2px) scale(0.98)',
            opacity: 0.8,
          };
        } else if (index === 2) {
          stackStyle = {
            transform: 'translateY(4px) scale(0.96)',
            opacity: 0.6,
          };
        }
        
        // Create basic stack style - no exit animations in style prop
        const cardStyle = { ...stackStyle };
        
        return (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            isActive={isCurrentCard}
            style={cardStyle}
            dragConstraints={constraints}
            onDrag={isCurrentCard ? handleDrag : undefined}
            onDragEnd={isCurrentCard ? handleDragEnd : undefined}
          />
        );
      })}
    </div>
  );
}
