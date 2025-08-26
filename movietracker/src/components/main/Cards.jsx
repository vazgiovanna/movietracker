import React from "react";
import { useNavigate } from "react-router-dom";

export const movies = [
  {
    id: "happy-feet",
    title: "Happy Feet",
    description: "Um pinguim que não sabe cantar, mas sabe dançar como ninguém.",
    image: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/d2ee035c-cf27-486d-844d-138aecd2b88a/face640d82a6c30340beb7cf5c58cabc67ad8ea9.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom",
    ratings: [
      { user: "João", score: 5, comment: "Muito divertido!" },
      { user: "Maria", score: 4, comment: "Ótima animação." },
    ],
  },
  {
    id: "lilo-e-stitch",
    title: "Lilo & Stitch",
    description: "Uma garota havaiana faz amizade com um alienígena fujão.",
    image: "https://telinha.com.br/wp-content/uploads/2025/01/lilostitch.jpg",
    ratings: [
      { user: "Ana", score: 5, comment: "Fofo demais!" },
      { user: "Carlos", score: 4, comment: "História emocionante." },
    ],
  },
  {
    id: "superman",
    title: "Superman",
    description: "O clássico herói dos quadrinhos em sua luta contra o mal.",
    image: "https://portaln10.com.br/todocanal/wp-content/uploads/2025/08/Superman-2025.png",
    ratings: [
      { user: "Pedro", score: 5, comment: "Super nostálgico!" },
      { user: "Julia", score: 3, comment: "Legal, mas antigo." },
    ],
  },
  {
    id: "ta-dando-onda",
    title: "Tá Dando Onda",
    description: "Um pinguim surfista busca vencer uma grande competição.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqnEBEeZpxuJOm8lNIm6KgSBVXZoGvgm1HGeCFvTwt5e12__yDDjNb_-JB_nI5_sUP6uTHkItaFWlCOklI7zodSzxGyFnAguhkTScyQsb95oyL3a7PxIxNs_izHm5GSrvqquMoJw35tnA/w1200-h630-p-k-no-nu/ta-dando-onda.jpg",
    ratings: [
      { user: "Arthur Fernandes", score: 4, comment: "Surf e diversão!" },
      { user: "Bruna Rodrigues", score: 5, comment: "Adoro esse filme!" },
    ],
  },
  {
    id: "the-batman",
    title: "The Batman",
    description: "O novo Batman enfrenta mistérios e vilões em Gotham.",
    image: "https://rollingstone.com.br/media/uploads/2025/08/the-batman-2-com-robert-pattinson-ganha-previsao-para-inicio-de-filmagens.jpg",
    ratings: [
      { user: "Rafael", score: 5, comment: "Muito sombrio e intenso!" },
      { user: "Fernanda", score: 4, comment: "Ótima atuação." },
    ],
  },
];

function Cards() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-950 min-h-screen py-12 px-4">
      <h2 className="text-3xl font-bold text-white mb-8">
        Filmes em destaque
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-white mb-2">
                {movie.title}
              </h3>
              <p className="text-gray-300 mb-4 line-clamp-3">
                {movie.description}
              </p>
              <button
                className="mt-auto bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition"
                onClick={() => navigate(`/filme/${movie.id}`)}
              >
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;