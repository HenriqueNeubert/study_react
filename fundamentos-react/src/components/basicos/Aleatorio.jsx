import React from "react";

export default (props) => {
  const { min, max } = props; 
  const aleatorio = parseInt(Math.random() * (max - min)) + min;
  return (    
    <div>
      <h2>Valor min:{min}</h2>
      <p>Valor max:{max}</p>
      <p>Valor escolhido:{aleatorio}</p>
    </div>
  );
};
