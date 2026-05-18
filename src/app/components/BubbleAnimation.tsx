import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface Bubble {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

export function BubbleAnimation() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Generate more random bubbles
    const newBubbles: Bubble[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Random x position (percentage)
      size: Math.random() * 40 + 20, // Random size between 20-60px
      duration: Math.random() * 10 + 8, // Random duration between 8-18s
      delay: Math.random() * 5, // Random delay between 0-5s
    }));
    setBubbles(newBubbles);
  }, []);

  // Sea creatures emoji configuration
  const seaCreatures = [
    { emoji: "🐠", top: "10%", duration: 20, delay: 0 },
    { emoji: "🐟", top: "25%", duration: 25, delay: 2 },
    { emoji: "🐡", top: "15%", duration: 18, delay: 5 },
    { emoji: "🐠", top: "40%", duration: 30, delay: 8 },
    { emoji: "🐟", top: "50%", duration: 22, delay: 3 },
    { emoji: "🐡", top: "30%", duration: 35, delay: 10 },
    { emoji: "🐠", top: "60%", duration: 19, delay: 6 },
    { emoji: "🐟", top: "70%", duration: 24, delay: 12 },
    { emoji: "🐡", top: "45%", duration: 21, delay: 4 },
    { emoji: "🐠", top: "80%", duration: 28, delay: 15 },
    { emoji: "🐟", top: "55%", duration: 32, delay: 7 },
    { emoji: "🐡", top: "35%", duration: 20, delay: 9 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-white/20 backdrop-blur-sm"
          style={{
            left: `${bubble.x}%`,
            width: bubble.size,
            height: bubble.size,
            bottom: -100,
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5)",
          }}
          animate={{
            y: [-100, -window.innerHeight - 100],
            x: [0, Math.sin(bubble.id) * 100],
            opacity: [0, 0.7, 0.7, 0],
            scale: [0.8, 1, 1, 0.8],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Highlight spot on bubble */}
          <div
            className="absolute bg-white/40 rounded-full"
            style={{
              top: "20%",
              left: "30%",
              width: "30%",
              height: "30%",
            }}
          />
        </motion.div>
      ))}

      {/* Sea creatures swimming from right to left */}
      {seaCreatures.map((creature, i) => (
        <motion.div
          key={`creature-${i}`}
          className="absolute text-5xl"
          style={{
            top: creature.top,
            right: -100,
          }}
          animate={{
            x: [0, -(window.innerWidth + 200)],
          }}
          transition={{
            duration: creature.duration,
            delay: creature.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {creature.emoji}
        </motion.div>
      ))}

      {/* Add some coral/seaweed elements at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-900/30 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end px-4">
          {[...Array(15)].map((_, i) => {
            const plants = ["🌿", "🪸", "🌾"];
            const plantEmoji = plants[i % plants.length];

            return (
              <motion.div
                key={`plant-${i}`}
                className="text-5xl"
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {plantEmoji}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
