import { useParams } from "react-router-dom";
import { movies } from "./Cards.jsx";

function Filme() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return (
      <div className="text-white p-8">
        <h2>Filme não encontrado.</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-950 min-h-screen py-12 px-4 flex flex-col items-center">
      <img src={movie.image} alt={movie.title} className="w-full max-w-xl h-96 object-cover rounded-xl mb-6" />
      <h2 className="text-3xl font-bold text-white mb-4">{movie.title}</h2>
      <p className="text-gray-300 mb-6 max-w-xl">{movie.description}</p>
      <h4 className="text-lg font-semibold text-white mb-2">Avaliações</h4>
      <ul className="space-y-2 max-w-xl w-full">
        {movie.ratings.map((rating, idx) => (
          <li key={idx} className="bg-gray-800 rounded-lg p-3">
            <span className="font-bold text-yellow-400">{rating.user}</span>
            <span className="ml-2 text-white">Nota: {rating.score}/5</span>
            <p className="text-gray-300">{rating.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filme;