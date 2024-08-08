import React, { useState, useEffect } from 'react';
import icon from "../../img/cronometro.png";

function SecondsCounter() {
  const [contador, setContador] = useState(0);
  const [tiempoRestante, setTiempoRestante] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [tiempoEspecifico, setTiempoEspecifico] = useState(0);

  const iniciarTemporizador = () => {
    setIsRunning(true);
    const id = setInterval(() => {
      if (tiempoRestante === 1) {
        alert("¡¡ TIME OVER !!");
        clearInterval(id);
      } else if (tiempoRestante > 0) {
        setTiempoRestante((prevTime) => prevTime - 1);
        setContador((prevCount) => Math.max(prevCount - 1, 0));
      }
    }, 1000);
    setTimerId(id);
  };

  const pausarTemporizador = () => {
    setIsRunning(false);
    clearInterval(timerId);
  };

  const reiniciarTemporizador = () => {
    pausarTemporizador();
    setContador(tiempoEspecifico);
    setTiempoRestante(tiempoEspecifico);
    setIsRunning(false);
  };

  const reanudarTemporizador = () => {
    if (!isRunning && tiempoRestante > 0) {
      iniciarTemporizador();
    }
  };

  useEffect(() => {
    return () => clearInterval(timerId);
  }, [timerId]);

  useEffect(() => {
    if (isRunning && tiempoRestante > 0) {
      iniciarTemporizador();
    }
  }, [isRunning, tiempoRestante]);

  useEffect(() => {
    if (tiempoEspecifico > 0) {
      reiniciarTemporizador();
    }
  }, [tiempoEspecifico]);

  const contadorFormateado = contador.toString().padStart(6, '0');
  const digitos = contadorFormateado.split('').map((digito, index) => (
    <span className="digito" key={index}>{digito}</span>
  ));

  return (
    <div className="container mt-5" style={{ minWidth: "500px" }}>
      <div className="buttonsContainer mb-4">
        <button className="btn" style={{ borderRadius: '15px', marginRight: '10px' }} onClick={iniciarTemporizador}><span>START</span></button>
        <button className="btn" style={{ borderRadius: '15px', marginRight: '10px' }} onClick={pausarTemporizador}><span>PAUSE</span></button>
        <button className="btn" style={{ borderRadius: '15px' }} onClick={reanudarTemporizador}><span>CONTINUE</span></button>
        <button className="btn" style={{ borderRadius: '15px', marginRight: '10px' }} onClick={reiniciarTemporizador}><span>RESTART</span></button>
      </div>
      <input className="inputButton mb-5" type="number" placeholder="Enter a number" onChange={(e) => setTiempoEspecifico(Number(e.target.value))}/>
      <h1>
        <img src={icon} alt="" />
        {digitos}
      </h1>
    </div>
  );
}

export default SecondsCounter;
