import axios from 'axios';
import './App.css'

function App() {
  try {
      const resposta = axios.get(
        'https://api.themoviedb.org/3',
      );
      return resposta.data;
    } catch (error) {
      console.log(error);
    }
}

export default App