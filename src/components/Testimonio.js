import React from "react";

function Testimonio(){
  return(
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio"
        src={require('../images/testimonio-emma.png')}
        alt='Foto de Emma'
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
        <p className='cargo-testimonio'>Ingeniera de Software en Spotify</p>
        <p className='texto-testimonio'>Voluptate veniam do ad duis. Cupidatat eiusmod do ipsum magna deserunt irure ex aliquip. Qui qui irure officia sint consectetur cillum veniam fugiat sit. Nisi nulla pariatur ut nostrud velit minim eu. Labore nulla anim aliquip commodo reprehenderit. Lorem reprehenderit ipsum fugiat duis fugiat.</p>
      </div>
    </div>
  );
}

export default Testimonio;