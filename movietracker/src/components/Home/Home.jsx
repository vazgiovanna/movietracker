import { Link } from "react-router-dom";
import './home.css';

function Home() {
    return (
        <>
        <div className="catalogo">
            <div className="cards">
                <div className='card bg-gray-950'>
                    <img src="src/components/images/HappyFeet(1).jpg" alt="Happy Feet" />
                    <Link className='info' to="/filme/happy-feet">
                        <button className='info'>Saiba Mais</button>
                    </Link>
                </div>

                <div className='card bg-gray-950'>
                    <img src="src/components/images/Lilo&Stitch.jpg" alt="Lilo & Stitch" />
                    <Link className='info' to="/filme/lilo-e-stitch">
                        <button className='info'>Saiba Mais</button>
                    </Link>
                </div>

                <div className='card bg-gray-950'>
                    <img src="src/components/images/Superman.jpg" alt="Superman" />
                    <Link className='info' to="/filme/superman">
                        <button className='info'>Saiba Mais</button>
                    </Link>
                </div>

                <div className='card bg-gray-950'>
                    <img src="src/components/images/TaDandoOnda.jpg" alt="Tá Dando Onda" />
                    <Link className='info' to="/filme/ta-dando-onda">
                        <button className='info'>Saiba Mais</button>
                    </Link>
                </div>

                <div className='card bg-gray-950'>
                    <img src="src/components/images/TheBatman.jpg" alt="The Batman" />
                    <Link className='info' to="/filme/the-batman">
                        <button className='info'>Saiba Mais</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;