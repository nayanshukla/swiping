import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  onReset: () => void;
}

export default function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
      <ShoppingBag className="text-6xl text-neutral-400 mb-4" size={64} />
      <h2 className="text-xl font-semibold text-neutral-700 mb-2">No more products</h2>
      <p className="text-neutral-600 mb-6">You've viewed all products in this collection</p>
      <Button 
        className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 active:scale-95 transition-transform"
        onClick={onReset}
      >
        Start Over
      </Button>
    </div>
  );
}
