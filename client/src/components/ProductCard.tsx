import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { formatCurrency } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index: number;
  isActive?: boolean;
  style?: React.CSSProperties;
  dragConstraints?: { top: number; right: number; bottom: number; left: number };
  onDrag?: (event: any, info: any) => void;
  onDragEnd?: (event: any, info: any) => void;
}

export default function ProductCard({
  product,
  index,
  isActive = false,
  style,
  dragConstraints,
  onDrag,
  onDragEnd,
}: ProductCardProps) {
  const { name, brand, price, originalPrice, discountPercentage, imageUrl } = product;

  const hasDiscount = originalPrice > price && discountPercentage > 0;

  return (
    <motion.div
      className={`card absolute top-0 left-0 w-full h-full rounded-xl shadow-lg overflow-hidden bg-white`}
      style={{
        zIndex: 10 - index,
        ...style,
      }}
      drag={isActive}
      dragConstraints={dragConstraints}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      dragElastic={0.7}
    >
      <div className="relative w-full h-full">
        <img 
          className="product-image" 
          src={imageUrl} 
          alt={name} 
        />
        
        {/* Like badge (hidden by default) */}
        <div className="like-badge hidden">LIKE</div>
        
        {/* Dislike badge (hidden by default) */}
        <div className="dislike-badge hidden">PASS</div>
        
        {/* Add to cart badge (hidden by default) */}
        <div className="cart-badge hidden">ADD TO CART</div>
        
        {/* Product info overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-semibold text-xl capitalize">{name}</h2>
              <p className="text-neutral-200 font-body capitalize">by {brand}</p>
            </div>
          </div>
          {isActive && <div className="action-hint">Swipe to discover</div>}
        </div>
        
        {/* Price tag */}
        <div className="price-tag">
          <div className="flex flex-col items-end">
            <span className="text-lg font-bold">{formatCurrency(price)}</span>
            {hasDiscount && (
              <>
                <span className="text-xs line-through text-neutral-200">
                  {formatCurrency(originalPrice)}
                </span>
                <span className="text-xs bg-white text-primary px-1 rounded mt-1">
                  {discountPercentage}% OFF
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
