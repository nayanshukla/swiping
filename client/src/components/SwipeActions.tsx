import { Heart, X, ShoppingCart } from "lucide-react";

interface SwipeActionsProps {
  onDislike: () => void;
  onLike: () => void;
  onAddToCart: () => void;
}

export default function SwipeActions({ onDislike, onLike, onAddToCart }: SwipeActionsProps) {
  return (
    <div className="swipe-actions flex justify-center space-x-8 mt-8">
      <button 
        className="swipe-btn dislike-btn w-14 h-14 bg-white shadow-md rounded-full flex items-center justify-center border border-neutral-200 hover:bg-neutral-100 active:scale-95 transition-transform" 
        aria-label="Dislike product"
        onClick={onDislike}
      >
        <X className="text-2xl text-danger" size={24} />
      </button>
      
      <button 
        className="swipe-btn cart-btn w-14 h-14 bg-white shadow-md rounded-full flex items-center justify-center border border-neutral-200 hover:bg-neutral-100 active:scale-95 transition-transform" 
        aria-label="Add to cart"
        onClick={onAddToCart}
      >
        <ShoppingCart className="text-2xl text-secondary" size={24} />
      </button>
      
      <button 
        className="swipe-btn like-btn w-14 h-14 bg-white shadow-md rounded-full flex items-center justify-center border border-neutral-200 hover:bg-neutral-100 active:scale-95 transition-transform" 
        aria-label="Like product"
        onClick={onLike}
      >
        <Heart className="text-2xl text-success" size={24} />
      </button>
    </div>
  );
}
