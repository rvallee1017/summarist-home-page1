"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown when clicking outside the search component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch search results from API as query changes
  useEffect(() => {
  // Only search if 2 or more characters are entered
  if (searchQuery.trim().length < 2) {
    setSearchResults([]);
    setIsDropdownOpen(false);
    setIsLoading(false);
    return;
  }

  setIsLoading(true);
  const controller = new AbortController();

  const fetchSearchResults = async () => {
    try {
      const response = await fetch(
        `https://us-central1-summaristt.cloudfunctions.net/getBooks?search=${encodeURIComponent(
          searchQuery.trim()
        )}`,
        { signal: controller.signal }
      );

      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }

      const data = await response.json();
      console.log("Search API results:", data);
      setSearchResults(Array.isArray(data) ? data : []);
      setIsDropdownOpen(true);
    } catch (error: any) {
      if (error.name !== "AbortError") {
        console.error("Error searching books:", error);
        setSearchResults([]);
      }
    } finally {
      if (!controller.signal.aborted) {
        setIsLoading(false);
      }
    }
  };

  const timer = setTimeout(() => {
    fetchSearchResults();
  }, 400); // 400ms debounce

  return () => {
    clearTimeout(timer);
    controller.abort(); // Cancel previous fetch if input changes
  };
}, [searchQuery]);

    const fetchSearchResults = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://us-central1-summaristt.cloudfunctions.net/getBooks?search=${searchQuery}`
        );
        const data = await response.json();
        console.log("Search API data:", data);
        setSearchResults(Array.isArray(data) ? data : []);
        setIsDropdownOpen(true);
      } catch (error) {
        console.error("Error searching books:", error);
        setSearchResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchSearchResults();
    }, 300); // 300ms debounce to prevent firing on every keystroke

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div ref={searchRef} className="relative w-full max-w-[340px]">
      <div className="flex items-center bg-[#f1f6f4] rounded border border-transparent focus-within:border-[#032b41] overflow-hidden px-3 py-2">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => searchQuery.trim() && setIsDropdownOpen(true)}
          className="w-full bg-transparent text-sm text-[#032b41] outline-none"
        />
        <span className="text-gray-400 text-sm ml-2">🔍</span>
      </div>

      {/* Dropdown Menu Results */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded shadow-lg max-h-[360px] overflow-y-auto z-50">
          {isLoading ? (
            <div className="p-4 text-center text-sm text-gray-500">Searching...</div>
          ) : searchResults.length > 0 ? (
            searchResults.map((book) => (
              <div
                key={book.id}
                onClick={() => {
                  setIsDropdownOpen(false);
                  setSearchQuery("");
                  router.push(`/book/${book.id}`);
                }}
                className="flex items-center gap-3 p-3 hover:bg-[#f1f6f4] cursor-pointer border-b last:border-b-0 transition-colors"
              >
                <img
                  src={book.imageLink}
                  alt={book.title}
                  className="w-10 h-14 object-cover rounded"
                />
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-semibold text-[#032b41] truncate">
                    {book.title}
                  </span>
                  <span className="text-xs text-gray-500 truncate">
                    {book.author}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-sm text-gray-500">
              No books found
            </div>
          )}
        </div>
      )}
    </div>
  );
}