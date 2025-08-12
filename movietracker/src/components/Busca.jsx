import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieComponent = () => {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const apiKey = '45a5a6b989f244ec8a61416b284c3143'; // Substitua pela chave real
  const movieId = 343611; // ID do filme

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=pt-BR`);
        setMovieData(response.data);
      } catch (error) {
        setError('Erro ao buscar dados do filme');
        console.error("Erro ao buscar dados do filme:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [movieId]);

  // Verificação de carregamento
  if (loading) {
    return <p>Carregando...</p>;
  }

  // Exibição de erro
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {movieData ? (
        <div>
          <h1>{movieData.original_title}</h1>
          <img 
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} 
            alt={movieData.original_title} 
          />
          <p>{movieData.overview}</p>
          <p><strong>Data de lançamento:</strong> {movieData.release_date}</p>
          <p><strong>Gêneros:</strong> {movieData.genres.map(genre => genre.name).join(', ')}</p>
          <p><strong>Avaliação:</strong> {movieData.vote_average}</p>
        </div>
      ) : (
        <p>Filme não encontrado ou dados ausentes.</p>
      )}
    </div>
  );
};

export default MovieComponent;
