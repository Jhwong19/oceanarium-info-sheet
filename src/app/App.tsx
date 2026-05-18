import { useState } from "react";
import { BubbleAnimation } from "./components/BubbleAnimation";
import { Card } from "./components/ui/card";
import { Camera, Trophy, Gift, Eye, Zap, Heart, X } from "lucide-react";
import bhpLogo from "../imports/image.png";
import img1 from "../imports/IMG_7282.jpg";
import img2 from "../imports/IMG_7283.jpg";
import img3 from "../imports/IMG_7284.jpg";
import img4 from "../imports/IMG_7285.jpg";
import img5 from "../imports/IMG_7286.jpg";
import img6 from "../imports/IMG_7287.jpg";
import img7 from "../imports/IMG_7288.jpg";
import img8 from "../imports/IMG_7289.jpg";

export default function App() {
  const [expandedPhoto, setExpandedPhoto] = useState<{ id: number; src: string } | null>(null);

  const photos = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
    { id: 6, src: img6 },
    { id: 7, src: img7 },
    { id: 8, src: img8 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-500 to-blue-900 relative overflow-hidden">
      {/* Bubble Animation Background */}
      <div className="print-hide">
        <BubbleAnimation />
      </div>

      {/* BHP Logo */}
      <div className="absolute top-6 left-6 z-20">
        <img src={bhpLogo} alt="BHP Logo" className="w-24 h-auto" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="print-card text-center mb-8 bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4),0_10px_30px_-10px_rgba(59,130,246,0.3)]">
          <h1 className="text-5xl font-bold text-blue-600 mb-2">
            Aquarium Adventure Challenge!
          </h1>
          <p className="text-2xl text-blue-500 mb-2">Oceanarium Singapore</p>
          <p className="text-xl text-gray-700">
            Ready to dive into a fun hunt around the aquarium? Here's your mission:
          </p>
        </div>

        {/* How the Game Works */}
        <Card className="print-card mb-6 p-8 bg-white/95 backdrop-blur-sm shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4),0_10px_30px_-10px_rgba(59,130,246,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5),0_15px_40px_-10px_rgba(59,130,246,0.4)] transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-500 text-white p-3 rounded-full">
              <Camera className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-blue-600">How the Game Works</h2>
          </div>
          <div className="space-y-4 text-lg text-gray-700">
            <p className="flex items-start gap-3">
              <span className="text-2xl">🖼️</span>
              <span>Each participant will receive <strong>8 mystery photos</strong></span>
            </p>
            <p className="font-semibold text-blue-600 text-xl mb-2">Your task?</p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">👉</span>
              <span>Explore the aquarium and find the exact spot where each photo was taken</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">👉</span>
              <span><strong>Snap a selfie at each location</strong>, replicating the photo as closely as possible!</span>
            </p>
          </div>
        </Card>

        {/* Winning the Game */}
        <Card className="print-card mb-6 p-8 bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-300 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4),0_10px_30px_-10px_rgba(245,158,11,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5),0_15px_40px_-10px_rgba(245,158,11,0.4)] transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-amber-500 text-white p-3 rounded-full">
              <Trophy className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-amber-600">Winning the Game</h2>
          </div>
          <div className="space-y-4 text-lg text-gray-700">
            <p className="flex items-start gap-3">
              <span className="text-2xl">⚡</span>
              <span><strong>Be quick!</strong> The first <strong className="text-amber-600">5 participants</strong> to complete all 8 photos and submit their selfies will win prizes 🎉</span>
            </p>
          </div>
        </Card>

        {/* Lucky Draw */}
        <Card className="print-card mb-6 p-8 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4),0_10px_30px_-10px_rgba(168,85,247,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5),0_15px_40px_-10px_rgba(168,85,247,0.4)] transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-500 text-white p-3 rounded-full">
              <Gift className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-purple-600">Not the fastest? No worries!</h2>
          </div>
          <div className="space-y-4 text-lg text-gray-700">
            <p className="flex items-start gap-3">
              <span className="text-2xl">✨</span>
              <span>Even if you're not in the first 5, complete the challenge anyway</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">🎲</span>
              <span>You'll still be entered into a <strong className="text-purple-600">lucky draw</strong> with more exciting prizes up for grabs!</span>
            </p>
          </div>
        </Card>

        {/* Pro Tips */}
        <Card className="print-card mb-8 p-8 bg-gradient-to-r from-green-50 to-teal-50 border-2 border-teal-300 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4),0_10px_30px_-10px_rgba(20,184,166,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5),0_15px_40px_-10px_rgba(20,184,166,0.4)] transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-teal-500 text-white p-3 rounded-full">
              <Zap className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-teal-600">Pro Tips</h2>
          </div>
          <div className="space-y-3 text-lg text-gray-700">
            <p className="flex items-center gap-3">
              <Eye className="w-6 h-6 text-teal-500 flex-shrink-0" />
              <span>Pay attention to details in the photos 👀</span>
            </p>
            <p className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-teal-500 flex-shrink-0" />
              <span>Work smart, not just fast ⚡</span>
            </p>
            <p className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-teal-500 flex-shrink-0" />
              <span><strong>Most importantly—have fun, be safe and enjoy the adventure! 🐟✨</strong></span>
            </p>
          </div>
        </Card>

        {/* Mystery Photos */}
        <Card className="print-card p-8 bg-white/95 backdrop-blur-sm shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4),0_10px_30px_-10px_rgba(59,130,246,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5),0_15px_40px_-10px_rgba(59,130,246,0.4)] transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-blue-600 mb-2 text-center">
            📸 Your 8 Mystery Photos
          </h2>
          <p className="text-center text-gray-600 mb-6 text-lg">
            Find them in any order you like! Click each photo to view larger.
          </p>
          <div className="print-photo-grid grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setExpandedPhoto(photo)}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="aspect-square bg-gray-200">
                  <img
                    src={photo.src}
                    alt={`Mystery photo ${photo.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-2 left-2 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-lg">
                  {photo.id}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-white text-lg">
          <p className="font-semibold mb-2">Good luck and have an amazing adventure!</p>
          <p className="text-blue-100">BHP Company • Fun Day 2026</p>
        </div>
      </div>

      {/* Photo Lightbox Modal */}
      {expandedPhoto && (
        <div
          className="print-hide fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setExpandedPhoto(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setExpandedPhoto(null)}
              className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={expandedPhoto.src}
                alt={`Mystery photo ${expandedPhoto.id}`}
                className="w-full h-auto max-h-[80vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg text-xl">
                {expandedPhoto.id}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
