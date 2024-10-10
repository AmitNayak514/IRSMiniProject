import React from "react";
import Section from "../components/Section";

function LikedSongsPage() {
  // Static data for liked songs
  const likedSongs = [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",
    },
    {
      id: 2,
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      cover:
        "https://i1.sndcdn.com/artworks-IeJj19bzbXIrLiE3-Foa40Q-t500x500.jpg",
    },
    {
      id: 3,
      title: "Save Your Tears",
      artist: "The Weeknd",
      album: "After Hours",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Save_Your_Tears_Remix_-_The_Weeknd_and_Ariana_Grande.png/220px-Save_Your_Tears_Remix_-_The_Weeknd_and_Ariana_Grande.png",
    },
    {
      id: 4,
      title: "Peaches",
      artist: "Justin Bieber",
      album: "Justice",
      cover: "https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431",
    },
    {
      id: 5,
      title: "Montero (Call Me By Your Name)",
      artist: "Lil Nas X",
      album: "Montero",
      cover:
        "https://media.them.us/photos/612e58f66cea93e3924d2d39/1:1/w_1080,h_1080,c_limit/montero.jpg",
    },
  ];

  return (
    <div className="overflow-y-auto h-100 p-4">
      <div className="grid gap-y-8">
        <Section
          title="Liked Songs"
          more="/liked"
          items={likedSongs} // Pass static liked songs
          reverse={true}
        />
      </div>
    </div>
  );
}

export default LikedSongsPage;
