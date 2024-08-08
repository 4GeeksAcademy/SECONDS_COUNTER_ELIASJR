import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import Home from "./component/home.jsx";


// Definición de la función syncPointer que recibe un objeto con propiedades x e y,
// representando las coordenadas del puntero del mouse o touch.
const syncPointer = ({ x: pointerX, y: pointerY }) => {
  // Redondea las coordenadas del puntero a dos decimales.
  const x = pointerX.toFixed(2);
  const y = pointerY.toFixed(2);
  
  // Calcula la posición normalizada del puntero en relación con el tamaño de la ventana.
  const xp = (pointerX / window.innerWidth).toFixed(2);
  const yp = (pointerY / window.innerHeight).toFixed(2);
  
  // Aplica las coordenadas y posiciones normalizadas como variables CSS personalizadas
  // en el documento. Esto permite acceder a estas variables desde cualquier parte de la aplicación
  // usando la sintaxis var(--nombreVariable).
  document.documentElement.style.setProperty("--x", x);
  document.documentElement.style.setProperty("--xp", xp);
  document.documentElement.style.setProperty("--y", y);
  document.documentElement.style.setProperty("--yp", yp);
};

// Agrega un event listener para el evento 'pointermove' al body del documento.
// Cuando el puntero se mueva sobre la pantalla, la función syncPointer se ejecutará,
// actualizando las variables CSS personalizadas con las nuevas coordenadas del puntero.
document.body.addEventListener("pointermove", syncPointer);



//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);



