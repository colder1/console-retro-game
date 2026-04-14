import React, { useState, useEffect } from 'react'

function GameScreen({ myPokeSelection, pcPokeSelection }) {
  const myPokemon = myPokeSelection?.[0];
  const pcPokemon = pcPokeSelection?.[0];

  const [myHP, setMyHP] = useState(100);
  const [pcHP, setPcHP] = useState(100);
  const [mensaje, setMensaje] = useState("¡A pelear!");

  const myMoves = myPokemon?.moves?.slice(0, 4);
  const pcMoves = pcPokemon?.moves?.slice(0, 4);

  const juegoTerminado = myHP <= 0 || pcHP <= 0;

  useEffect(() => {
    if (pcHP <= 0) {
      setMensaje(`¡${pcPokemon.name} debilitado! ¡GANASTE!`);
    } else if (myHP <= 0) {
      setMensaje(`¡Tu ${myPokemon.name} cayó! Perdiste.`);
    }
  }, [myHP, pcHP, myPokemon.name, pcPokemon.name]);

  const ejecutarAtaque = (damage, moveName) => {
    if (juegoTerminado) return;

    setMensaje(`Usaste ${moveName}!`);
    setPcHP((prev) => Math.max(0, prev - damage));

    if (pcHP - damage > 0) {
      setTimeout(() => {
        const moveRnd = pcMoves[Math.floor(Math.random() * pcMoves.length)];
        setMensaje(`${pcPokemon.name} usó ${moveRnd.move.name}!`);
        setMyHP((prev) => Math.max(0, prev - moveRnd.attack));
      }, 1500);
    }
  };

  return (
    <div className="w-[440px] h-[250px] border-y-4 border-solid border-black bg-white flex flex-col overflow-hidden">
      <h1 className='text-center font-extrabold text-sm p-1 uppercase'>{mensaje}</h1>

      <div className="flex justify-around items-center flex-grow p-1">
        {/* MI POKEMON */}
        <div className='flex flex-col items-center flex-1'>
          <p className='text-[8px] font-bold text-green-600 mb-1'>HP: {myHP}/100</p>
          <div className='w-20 bg-gray-200 h-2 rounded-full overflow-hidden border border-black'>
            <div 
              className={`h-full transition-all duration-500 ${myHP < 30 ? 'bg-red-500' : 'bg-green-500'}`} 
              style={{ width: `${myHP}%` }}
            ></div>
          </div>
          {}
          <img 
            src={myPokemon.sprites?.front_default} 
            className={`w-16 h-16 object-contain transition-opacity ${myHP <= 0 ? 'opacity-30' : 'opacity-100'}`} 
            alt="yo" 
          />
          
          <div className='grid grid-cols-2 gap-0.5 mt-1'>
            {myMoves?.map((m, i) => (
              <button 
                key={i}
                disabled={juegoTerminado}
                onClick={() => ejecutarAtaque(m.attack, m.move.name)}
                className={`text-[7px] p-0.5 px-1 rounded uppercase font-bold ${
                  juegoTerminado ? 'bg-gray-300 text-gray-500' : 'bg-cyan-500 text-white hover:bg-cyan-600'
                }`}
              >
                {m.move.name} {m.attack}
              </button>
            ))}
          </div>
        </div>

        <h2 className='font-black text-xl'>VS</h2>

        {/* POKEMON PC */}
        <div className="flex flex-col items-center flex-1">
          <p className='text-[8px] font-bold text-red-600 mb-1'>HP: {pcHP}/100</p>
          <div className='w-20 bg-gray-200 h-2 rounded-full overflow-hidden border border-black'>
            <div 
              className={`h-full transition-all duration-500 ${pcHP < 30 ? 'bg-red-500' : 'bg-green-500'}`} 
              style={{ width: `${pcHP}%` }}
            ></div>
          </div>
          <img 
            src={pcPokemon.sprites?.front_default} 
            className={`w-16 h-16 object-contain transition-opacity ${pcHP <= 0 ? 'opacity-30' : 'opacity-100'}`} 
            alt="pc" 
          />
          <div className='grid grid-cols-2 gap-0.5 mt-1 opacity-60'>
            {pcMoves?.map((m,i)=> (
              <div key={i}
              className='text-[6px] border border-gray-400 p-0.5 text-center bg-gray-50 rounded-sm uppercase font-medium leading-none'
              style={{ width: '45px' }}>

                {m.move.name}


              </div>

            ) )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameScreen