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

  const handleDrag = (_: any, info: PanInfo) => {
    const { x, y } = info.offset;
    const absX = Math.abs(x);
    const absY = Math.abs(y);

    // Reset all badges first
    setShowLikeBadge(false);
    setShowDislikeBadge(false);
    setShowCartBadge(false);

    // Show appropriate badge based on direction and distance
    if (absX > 50 && absY < absX) {
      if (x > 0) {
        setShowLikeBadge(true);
      } else {
        setShowDislikeBadge(true);
      }
    } else if (y < -50 && absY > absX) {
      setShowCartBadge(true);
    }
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const { x, y } = info.offset;
    const absX = Math.abs(x);
    const absY = Math.abs(y);
    
    if (absX > threshold && absY < absX) {
      // Horizontal swipe
      if (x > 0) {
        onSwipe('right');
      } else {
        onSwipe('left');
      }
    } else if (y < -threshold && absY > absX) {
      // Upward swipe
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
