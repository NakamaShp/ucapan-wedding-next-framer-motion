import { useMusic } from "@/context/musiccontext";
import { Music, VolumeX } from "lucide-react";

export default function MusicButton() {
  const { isPlaying, play, pause } = useMusic();
  return (
    <button
      onClick={isPlaying ? pause : play}
      className="fixed bottom-5 right-5 bg-purple-600/80 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg backdrop-blur-md border border-purple-400/50"
    >
      {isPlaying ? (
        <Music size={24} className="animate-spin-slow" />
      ) : (
        <VolumeX size={24} />
      )}
    </button>
  );
}
