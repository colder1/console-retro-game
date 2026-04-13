import React, { use, useState } from 'react'

function GameScreen({ myPokeSelection, pcPokeSelection }) {
  console.log(myPokeSelection)

  const myPokemon=myPokeSelection?.[0];
  const pcPokemon=pcPokeSelection?.[0];

  const [myHP, setmyHP]= useState (100);
  const [pcHP, setPcHP] = useState (100);

  return (
    <>
      <div className="w-[440px] h-[250px] border-y-4 border-solid">
      <h1 className='text-center font-extrabold'>FIGHT</h1>

        <div className="flex justify-around items-center mt-4">

        <div className='flex flex-col items-center'>
          <h2 className='font-bold uppercase'>
            {myPokemon.name}
          </h2>
          <p className='text-sm font-bold text-green-600'>
            HP: {myHP}/100
          </p>
          <div className='w-32 bg-gray-300 border border-black h-3 rounded-sm overflow-hidden mt-1'>
            <div 
              className='bg-green-500 h-full transition-all duration-300'
              style={{width: `${myHP}%`}}>
            </div>
          </div>
          <img 
          src={myPokemon.sprites?.front_default}
          alt={myPokemon.name} 
          className='w-24 h-24'/>
        </div>

          <h2>VS</h2>

        <div className="flex flex-col items-center">
          <h2 className='font-bold uppercase'>
            {pcPokemon.name}
          </h2>
          <p className='text-sm font-bold text-red-600'>
            HP: {pcHP}/100
          </p>
          <div className='w-32 bg-gray-300 border border-black h-3 rounded-sm overflow-hidden mt-1'>
            <div 
              className='bg-red-500 h-full transition-all duration-300'
              style={{width: `${pcHP}%`}}>
            </div>
          </div>
          <img 
          src={pcPokemon.sprites.front_default} 
          alt={pcPokemon.name} 
          className='w-24 h-24'/>
        </div>

        </div>
      </div>
    </>
  )
}

export default GameScreen
