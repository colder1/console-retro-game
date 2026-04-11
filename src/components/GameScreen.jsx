import React from 'react'

function GameScreen({ myPokeSelection, pcPokeSelection }) {
  console.log(myPokeSelection)
  return (
    <>
      <div className="w-[440px] h-[250px] border-y-4 border-solid">
        <div className="flex flex-wrap justify-center">
          <h1>FIGHT</h1>
          {myPokeSelection?.map((pokemon, index) => (
            <div key={index} className="flex flex-col" >
              <img
                src={pokemon?.sprites?.front_default}
                alt={pokemon.name}
                className="w-25 h-25"
              />
              <p>{pokemon.name}</p>
              <p>{pokemon.moves[0].move.name}</p>
            </div>
          ))}
          <h2>VS</h2>
          {pcPokeSelection?.map((pokemon, index) => (
            <div key={index} className="flex flex-col" >
              <img
                src={pokemon?.sprites?.front_default}
                alt={pokemon.name}
                className="w-25 h-25"
              />
              <p>{pokemon.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default GameScreen
