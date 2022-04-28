import main from '../Main.css'   // import main.css
import logo from '../source/img/fondo2.png'

export default function Mainpage() {
    return (
        <>
            <div className="Main-container">

                {/* LOGO */}
                <div className='logo-container'>
                    <img src={logo}
                        alt='logo' />
                </div>



                {/* NAVBAR */}
                <div className='navbar-container'>
                    
                       <p>Inicio</p>
                       <p>Sobre nosotros</p>
                       <p>Actividades</p>
                       <p>Transparencia</p>
                       <p>Contáctanos</p>
                       
                        
                    
                    
                </div>

                {/* SLIDER A LA IZQUIERDA */}

                {/* ASIDE DE NOTICIAS LA DERECHA */}

                {/* DIRECTIVA SLIDER */}

                {/* FOOTER */}









            </div>


        </>

    )
};