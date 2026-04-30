import { useEffect, useState } from 'react';
import './App.css';
import LeftControl from './components/LeftControl';
import RightControl from './components/RightControl';
import Screen from './components/Screen';
import GameScreen from './components/GameScreen';
import useFetch from './hooks/useFetch';

import PokemonDetails from './components/PokemonDetails';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
  const { data, loading, error } = useFetch(url);

  const [pokemones, setPokemones] = useState([]);

  const getListPokemones = () => {
    const list = data?.results?.filter((p) => p.url);
    const plist = list?.map((l) => fetch(l.url).then((res) => res.json()));

    Promise.all(plist).then((values) => {
      const saniData = values?.map((e) => {
        return {
          name: e.name,
          id: e.id,
          types: e.types,
          moves: e.moves.map((e) => {
            return {
              ...e,
              attack: getRandomInt(20, 98),
            };
          }),
          sprites: e.sprites,
        };
      });

      setPokemones(saniData);
    });
  };

  useEffect(() => {
    if (data) {
      getListPokemones();
    }
  }, [data]);

  const [position, setPosition] = useState(1);

  const [myPokeSelection, setMyPokeSelection] = useState([]);
  const [pcPokeSelection, setPcPokeSelection] = useState([]);

  const handleDirection = (direction) => {
    if (direction === 'right' && position < 100) {
      setPosition((prev) => prev + 1);
    } else if (direction === 'left' && position > 1) {
      setPosition((prev) => prev - 1);
    } else if (direction === 'down' && position + 4 <= 100) {
      setPosition((prev) => prev + 4);
    } else if (direction === 'up' && position - 4 >= 1) {
      setPosition((prev) => prev - 4);
    }
  };

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
  }

  const computerSelection = () => {
    const rnd = getRandomInt(1, 100);
    const pc = pokemones.filter((p) => p.id === rnd);
    setPcPokeSelection(pc);
  }

  const handleSelection = () => {
  
    const selectPokemon = pokemones.filter((p) => p.id === position)
    setMyPokeSelection(selectPokemon);
    computerSelection();
  }

  const handleBack =() => {
    setMyPokeSelection([]);
    setPcPokeSelection([]);
  }

  console.log("my", myPokeSelection.length, myPokeSelection)
  console.log("pc", pcPokeSelection.length, pcPokeSelection)

const pokemonEnLaMira = pokemones.filter((p) => p.id === position);

return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    
    <div className="flex items-center">
      <LeftControl handleDirection={handleDirection} />
      
      <div className="flex flex-col">
        {myPokeSelection.length && pcPokeSelection.length ? (
          <GameScreen myPokeSelection={myPokeSelection} pcPokeSelection={pcPokeSelection}/>
        ) : (
          <Screen pokemones={pokemones} position={position} />
        )}
      </div>

      <RightControl 
        handleSelection={handleSelection} 
        handleBack={handleBack}/>
    </div>


    {(!myPokeSelection.length || !pcPokeSelection.length) && (
      <div className="mt-8"> 
        <PokemonDetails actual={pokemones.filter(p => p.id === position)} />
      </div>
    )}

  </div>
);
}

export default App;