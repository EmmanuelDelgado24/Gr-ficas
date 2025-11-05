import { Carousel } from 'flowbite-react';
import C1 from "../images/Carrusel1.jpg";
import C2 from "../images/Carrusel2.jpg";
import C3 from "../images/Carrusel3.jpg";
import C4 from "../images/Carrusel4.jpg";
import C5 from "../images/Carrusel5.jpg";

export const Bienvenida = () => {
  
  return (
    <>
      <br/><br/>
      {/* <p className="titulo-produccion w-full">Avances Pazstor</p> */}
      <div className="h-135">
      <Carousel>
        <img src={C1} />
        <img src={C3} />
        <img src={C4} />
        <img src={C5} />
        <img src={C2} />
      </Carousel>
    </div>
    </>
  );
};

export default Bienvenida;

// import fondoG from "../images/FondoG.jpg";
// import fondoF from "../images/FondoF.jpg";
// import fondoH from "../images/fondoH.jpg";

{/* <img className="h-130 max-w-lg rounded-lg" src={fondoG} alt="image description"/>
        <img className="h-130 max-w-lg rounded-lg" src={fondoF} alt="image description"/>
        <img className="h-130 max-w-lg rounded-lg" src={fondoH} alt="image description"/> */}