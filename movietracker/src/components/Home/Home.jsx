import './home.css'

function Home(){
    return (
        <>
        <div className="catalogo">
            <div className="cards">
                <div className='card bg-gray-950'>
                    <img src="src\components\images\HappyFeet(1).jpg" alt="" />
                    <a className='info' href="">
                        <button className='info'>Saiba Mais</button>
                    </a>
                </div>

                <div className='card bg-gray-950'>
                    <img src="src\components\images\Lilo&Stitch.jpg" alt="" />
                    <a className='info' href="">
                        <button className='info'>Saiba Mais</button>
                    </a>

                </div>

                <div className='card bg-gray-950'>
                    <img src="src\components\images\Superman.jpg" alt="" />
                    <a className='info' href="">
                        <button className='info'>Saiba Mais</button>
                    </a>

                </div>

                <div className='card bg-gray-950'>
                    <img src="src\components\images\TaDandoOnda.jpg" alt="" />
                    <a className='info' href="">
                        <button className='info'>Saiba Mais</button>
                    </a>

                </div>

                <div className='card bg-gray-950'>
                    <img src="src\components\images\TheBatman.jpg" alt="" />
                    <a className='info' href="">
                        <button className='info'>Saiba Mais</button>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home