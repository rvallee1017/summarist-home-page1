"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Sidebar from "../../components/Sidebar";
import SearchBar from "../../components/SearchBar";
import { useRouter } from "next/navigation";

export default function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(
          `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
        );

        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    if (id) {
      fetchBook();
    }
  }, [id]);

  console.log(book);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Sidebar />
      <div className="md:ml-[200px] px-6 py-10">
        <div className="max-w-[1000px] mx-auto">
          <div className="border-b border-gray-200 py-3 px-6 flex items-center justify-between md:justify-end">
            <SearchBar />
          </div>
          <div className="flex flex-col-reverse lg:flex-row gap-12 justify-between">
            <div className="flex-1 max-w-[650px]">
              <h1 className="text-3xl font-bold mb-4">{book.title}</h1>

              <h2 className="font-semibold mb-4">{book.author}</h2>

              <p className="text-lg mb-6">{book.subTitle}</p>

              <div className="grid grid-cols-2 gap-4 py-5 border-y">
                <div>
                  ☆ {book.averageRating} ({book.totalRating} ratings)
                </div>
                <div>🎧 Audio & Text</div>
                <div>💡 {book.keyIdeas?.length} Key ideas</div>
              </div>

              <div className="flex gap-4 my-5">
                <button
                  onClick={() => router.push(`/player/${id}`)}
                  className="bg-[#032b41] text-white px-8 py-3 rounded flex items-center gap-2 hover:bg-[#064263] transition-colors"
                >
                  📖 Read
                </button>

                <button
                  onClick={() => router.push(`/player/${id}`)}
                  className="bg-[#032b41] text-white px-8 py-3 rounded flex items-center gap-2 hover:bg-[#064263] transition-colors"
                >
                  🎙 Listen
                </button>
              </div>

              <hr className="mb-6" />

              <h3 className="text-xl font-bold mt-6 mb-4">What's it about?</h3>
              <div className="flex flex-wrap gap-3 mb-5">
                {book.tags?.map((tag: string) => (
                  <span key={tag} className="bg-[#f1f6f4] px-4 py-3 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="leading-7">{book.bookDescription}</p>

              <h3 className="text-xl font-bold mt-6 mb-4">About the author</h3>

              <p className="leading-7">{book.authorDescription}</p>
            </div>

            <div className="flex justify-center lg:w-[350px]">
              <img
                src={book.imageLink}
                alt={book.title}
                className="w-[250px] lg:w-[320px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
