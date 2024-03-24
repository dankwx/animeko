"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Anime {
  id: number;
  name: string;
  genre: string;
  rating: number;
}

export default function Home() {
  const [animes, setAnimes] = useState<Anime[]>([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setAnimes(data))
      .catch((error) => console.error("Erro ao buscar animes:", error));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Animes</h1>
        <ul>
          {animes.map((anime) => (
            <li key={anime.id}>
              {anime.name} - {anime.genre} - {anime.rating}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
