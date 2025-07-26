import React from "react";
import {
  Sparkle,
  Guitar,
  Book,
  Disc,
  Dumbbell,
  Utensils,
  NotebookText,
} from "lucide-react";
import "lucide-react";
export default function Navbar() {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col p-4 shadow-lg">
      <div className="text-2xl font-bold mb-8">
        <a href="/">Parker's DevSite</a>
      </div>
      <nav className="flex flex-col gap-4">
        <a
          href="/bass"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          <Guitar size={20} />
          Bass
        </a>
        <a
          href="/blog"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          <NotebookText size={20} />
          Blog
        </a>
        <a
          href="/books"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          <Book size={20} />
          Books
        </a>
        <a
          href="/discgolf"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          <Disc size={20} />
          Disc Golf
        </a>
        <a
          href="/fitness"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          <Dumbbell size={20} />
          Fitness
        </a>
        <a
          href="/sandbox"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          <Sparkle size={20} />
          Sandbox
        </a>
        <a
          href="/trails"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          <Utensils size={20} />
          Trails
        </a>
      </nav>
    </div>
  );
}
