"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import Sidebar from "../../components/Sidebar";
import SearchBar from "../../components/SearchBar";

export default function PlayerPage() {
  const { id } = useParams();
  const [book, setBook] = useState<any>(null);

  // Audio & Font States
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [fontSize, setFontSize] = useState<"sm" | "md" | "lg" | "xl">("md");

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchBook = async () => {
      try {
        const response = await fetch(
          `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
        );
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book for player:", error);
      }
    };

    fetchBook();
  }, [id]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const rewind10 = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
    }
  };

  const forward10 = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(
        duration,
        audioRef.current.currentTime + 10
      );
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = targetTime;
      setCurrentTime(targetTime);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const fontSizeClasses = {
    sm: "text-sm leading-relaxed",
    md: "text-base leading-relaxed",
    lg: "text-lg leading-loose",
    xl: "text-xl leading-loose",
  };

  if (!book) {
    return (
      <div className="flex justify-center items-center h-screen font-semibold text-gray-500">
        Loading player...
      </div>
    );
  }

  return (
    <>
      <Sidebar />

      <div className="md:ml-[200px] min-h-screen pb-36">
        <div className="border-b border-gray-200 py-3 px-6 flex items-center justify-between md:justify-end">
          <SearchBar />
        </div>

        <div className="max-w-[800px] mx-auto px-6 py-8">
          {/* Font Size Adjusters */}
          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Text Size:
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setFontSize("sm")}
                className={`text-xs font-bold ${
                  fontSize === "sm" ? "text-[#032b41] underline" : "text-gray-400"
                }`}
              >
                Aa
              </button>
              <button
                onClick={() => setFontSize("md")}
                className={`text-sm font-bold ${
                  fontSize === "md" ? "text-[#032b41] underline" : "text-gray-400"
                }`}
              >
                Aa
              </button>
              <button
                onClick={() => setFontSize("lg")}
                className={`text-base font-bold ${
                  fontSize === "lg" ? "text-[#032b41] underline" : "text-gray-400"
                }`}
              >
                Aa
              </button>
              <button
                onClick={() => setFontSize("xl")}
                className={`text-lg font-bold ${
                  fontSize === "xl" ? "text-[#032b41] underline" : "text-gray-400"
                }`}
              >
                Aa
              </button>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-[#032b41] mb-6">
            {book.title}
          </h1>

          <div
            className={`whitespace-pre-line text-[#032b41] ${fontSizeClasses[fontSize]}`}
          >
            {book.summary}
          </div>
        </div>

        {/* Audio Element */}
        {book.audioLink && (
          <audio
            ref={audioRef}
            src={book.audioLink}
            onTimeUpdate={() =>
              audioRef.current && setCurrentTime(audioRef.current.currentTime)
            }
            onLoadedMetadata={() =>
              audioRef.current && setDuration(audioRef.current.duration)
            }
            onEnded={() => setIsPlaying(false)}
          />
        )}

        {/* Fixed Bottom Audio Player Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#032b41] text-white py-3 px-6 z-50 shadow-2xl">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Book Thumbnail & Info */}
            <div className="flex items-center gap-3 w-full md:w-1/3">
              <img
                src={book.imageLink}
                alt={book.title}
                className="w-12 h-12 object-cover rounded flex-shrink-0"
              />
              <div className="overflow-hidden">
                <h4 className="text-sm font-semibold truncate">{book.title}</h4>
                <p className="text-xs text-gray-300 truncate">{book.author}</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 w-full md:w-1/3">
              <button
                onClick={rewind10}
                className="hover:text-gray-300 transition-colors p-1"
                title="Rewind 10 seconds"
              >
                <span className="text-xl font-bold">↺10</span>
              </button>

              <button
                onClick={togglePlay}
                className="w-12 h-12 rounded-full bg-white text-[#032b41] flex items-center justify-center font-bold text-xl hover:scale-105 transition-transform"
              >
                {isPlaying ? "❚❚" : "▶"}
              </button>

              <button
                onClick={forward10}
                className="hover:text-gray-300 transition-colors p-1"
                title="Forward 10 seconds"
              >
                <span className="text-xl font-bold">↻10</span>
              </button>
            </div>

            {/* Seek Bar & Timestamps */}
            <div className="flex items-center gap-3 w-full md:w-1/3">
              <span className="text-xs font-mono">{formatTime(currentTime)}</span>
              <input
                type="range"
                min={0}
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full accent-white cursor-pointer h-1.5 rounded bg-gray-600"
              />
              <span className="text-xs font-mono">{formatTime(duration)}</span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}