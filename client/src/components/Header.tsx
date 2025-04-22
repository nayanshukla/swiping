import { User, Heart, ShoppingCart } from "lucide-react";

interface HeaderProps {
  cartCount?: number;
}

export default function Header({ cartCount = 0 }: HeaderProps) {
  return (
    <header className="px-4 py-4 flex justify-between items-center border-b border-neutral-200 bg-white">
      <div className="flex items-center space-x-2">
        <User className="text-xl text-neutral-700" size={20} />
        <span className="text-lg font-medium text-neutral-800">Swipe Shop</span>
      </div>
      <div className="flex space-x-4">
        <button className="relative" aria-label="View favorites">
          <Heart className="text-xl text-neutral-700" size={20} />
        </button>
        <button className="relative" aria-label="View cart">
          <ShoppingCart className="text-xl text-neutral-700" size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
