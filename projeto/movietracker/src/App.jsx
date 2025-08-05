import { useState } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

async function API(){
  try {
      const resposta = await axios.get(
        'https://api.themoviedb.org/3',
      );
      return resposta.data;
    } catch (error) {
      console.log(error);
    }
}
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <API/>
    </>
  )
}

export default App
