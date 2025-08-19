import './home.css'

function Home(){
    return (
        <>

        <div className="catalogo">
            <div className="cards">
                <div className='card bg-gray-950'>
                    <img src="src\components\images\HappyFeet(1).jpg" alt="" />
                    <button className='info'>Saiba Mais</button>
                </div>

                <div className='card bg-gray-950'>
                    <img src="src\components\images\Lilo&Stitch.jpg" alt="" />
                    <button className='info'>Saiba Mais</button>

                </div>

                <div className='card bg-gray-950'>
                    <img src="src\components\images\Superman.jpg" alt="" />
                    <button className='info'>Saiba Mais</button>

                </div>

                <div className='card bg-gray-950'>
                    <img src="src\components\images\TaDandoOnda.jpg" alt="" />
                    <button className='info'>Saiba Mais</button>

                </div>

                <div className='card bg-gray-950'>
                    <img src="src\components\images\TheBatman.jpg" alt="" />
                    <button className='info'>Saiba Mais</button>

                </div>
                
            </div>
        </div>
        </>
    )
}

export default Home