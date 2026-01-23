import { memo } from "react";
import type { GameCard } from "@/data/cards";
import { cn } from "@/lib/utils";
import { Coins, Sparkles } from "lucide-react";

interface CardProps {
  card: GameCard;
  onClick: () => void;
  isLocked: boolean;
}

export const Card = memo(function Card({ card, onClick, isLocked }: CardProps) {
  const handleClick = () => {
    if (!isLocked && !card.isFlipped && !card.isMatched) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={card.isMatched || isLocked}
      aria-pressed={card.isFlipped}
      aria-label={card.isFlipped ? card.text : "Card face down"}
      className={cn(
        "relative w-full aspect-[3/4] perspective-1000 group",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "transition-transform duration-200 ease-out",
        card.isMatched && "opacity-50 cursor-not-allowed scale-95",
        !card.isFlipped && !card.isMatched && !isLocked && "hover:scale-102 active:scale-100"
      )}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-500 preserve-3d",
          card.isFlipped && "rotate-y-180"
        )}
        style={{
          transformStyle: "preserve-3d",
          transform: card.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          willChange: card.isFlipped ? "transform" : "auto",
        }}
      >
        {/* Card Back - Enhanced for black background */}
        <div
          className={cn(
            "absolute inset-0 backface-hidden rounded-3xl p-6 flex flex-col items-center justify-center gap-4",
            "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600",
            "shadow-2xl shadow-blue-500/20",
            "border-2 border-blue-400/50",
            "backdrop-blur-sm",
            !card.isFlipped && !card.isMatched && !isLocked && "group-hover:shadow-2xl group-hover:shadow-blue-500/30"
          )}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative">
            <Coins className="w-14 h-14 text-white drop-shadow-lg" />
            <Sparkles className="absolute -top-1 -right-1 w-6 h-6 text-yellow-300" />
          </div>
          
          <div className="text-white font-bold text-sm text-center leading-relaxed drop-shadow-md">
            <span className="block text-xs opacity-90 mb-1">CHƯƠNG 4</span>
            <span className="block text-base">Dân chủ xã hội chủ nghĩa và nhà nước xã hội chủ nghĩa</span>
          </div>
          
          {/* Enhanced glow effects */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-white/5 to-transparent pointer-events-none" />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        </div>

        {/* Card Front - Enhanced for black background */}
        <div
          className={cn(
            "absolute inset-0 backface-hidden rounded-3xl p-5 flex flex-col items-center justify-center gap-4",
            "bg-gray-800/95 backdrop-blur-sm",
            "shadow-2xl shadow-gray-900/50",
            "border-2 border-gray-600/60",
            "transition-colors duration-300"
          )}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <span
            className={cn(
              "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-md",
              "transition-all duration-300",
              card.role === "concept"
                ? "bg-gradient-to-r from-blue-900/80 to-blue-800/80 text-blue-200 border border-blue-500"
                : "bg-gradient-to-r from-purple-900/80 to-purple-800/80 text-purple-200 border border-purple-500"
            )}
          >
            {card.role === "concept" ? "Khái niệm" : "Bản chất"}
          </span>
          
          <div className="flex-1 flex items-center justify-center px-3">
            <p className="text-center text-sm lg:text-base font-semibold leading-relaxed text-gray-100 transition-colors duration-300">
              {card.text}
            </p>
          </div>

          {/* Subtle accent decorations */}
          <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-80" />
          <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 opacity-80" />
          
          {/* Card number indicator */}
          <div className="absolute bottom-2 right-2 text-xs font-mono text-gray-400 opacity-70">
            #{card.id.slice(-2)}
          </div>
        </div>

        {/* Matched state overlay */}
        {card.isMatched && (
          <div className="absolute inset-0 rounded-3xl bg-green-500/30 border-2 border-green-400 flex items-center justify-center backdrop-blur-sm z-10">
            <div className="bg-green-500 text-white rounded-full p-3 shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
        )}
      </div>
    </button>
  );
});