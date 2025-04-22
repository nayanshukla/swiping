import { useState } from "react";
import { PanInfo } from "framer-motion";

interface UseSwipeOptions {
  onSwipe: (direction: 'left' | 'right' | 'up') => void;
  threshold?: number;
}

export default function useSwipe({ onSwipe, threshold = 100 }: UseSwipeOptions) {
  const [showLikeBadge, setShowLikeBadge] = useState(false);
  const [showDislikeBadge, setShowDislikeBadge] = useState(false);
  const [showCartBadge, setShowCartBadge] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = (event: any, info: PanInfo) => {
    // Set dragging state to true when drag starts
    if (!isDragging) {
      setIsDragging(true);
    }
    
    const { x, y } = info.offset;
    const absX = Math.abs(x);
    const absY = Math.abs(y);

    // Reset all badges first
    setShowLikeBadge(false);
    setShowDislikeBadge(false);
    setShowCartBadge(false);

    // Show appropriate badge based on direction and distance
    // Using lower threshold values to show badges sooner
    const badgeThreshold = 30;
    
    if (absX > badgeThreshold && absY < absX) {
      if (x > 0) {
        setShowLikeBadge(true);
      } else {
        setShowDislikeBadge(true);
      }
    } else if (y < -badgeThreshold) {
      // Show cart badge with lower threshold to make it more responsive
      setShowCartBadge(true);
    }
    
    // Let the element move freely with the drag
    console.log("Dragging card: ", {x, y});
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    // Reset dragging state
    setIsDragging(false);
    
    const { x, y } = info.offset;
    const absX = Math.abs(x);
    const absY = Math.abs(y);
    
    // Log the drag end values for debugging
    console.log("Drag ended: ", {x, y, absX, absY, threshold});
    
    const velocityFactor = 0.5; // This helps adjust how "far" the card has to be moved
    
    if (absX > threshold * velocityFactor && absY < absX) {
      // Horizontal swipe
      if (x > 0) {
        console.log("Like Product");
        onSwipe('right');
      } else {
        console.log("Dislike Product");
        onSwipe('left');
      }
    } else if (y < -threshold * velocityFactor) {
      // Upward swipe - made easier to trigger
      console.log("Add to cart Product");
      onSwipe('up');
    }
    
    // Reset badges
    setShowLikeBadge(false);
    setShowDislikeBadge(false);
    setShowCartBadge(false);
  };

  return {
    handleDrag,
    handleDragEnd,
    showLikeBadge,
    showDislikeBadge,
    showCartBadge,
  };
}
