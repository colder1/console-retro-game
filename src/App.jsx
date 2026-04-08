import { useEffect, useState } from 'react';
import './App.css';
import LeftControl from './components/LeftControl';
import RightControl from './components/RightControl';
import Screen from './components/Screen';
import GameScreen from './components/GameScreen';
import useFetch from './hooks/useFetch';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
  const { data, loading, error } = useFetch(url);

  // sanitizer data 
  const [pokemones, setPokemones] = useState([]);
  const getListPokemones = () => {
    const list = data?.results?.filter((p) => p.url);
    const plist = list?.map((l) => fetch(l.url).then((res) => res.json()));
    Promise.all(plist).then((values) => {
      // console.log('promesa values', values);
      setPokemones(values);
    });
  };

  useEffect(() => {
    getListPokemones();
  }, [data]);

  // Handle Direction
  const [position, setPosition] = useState(1);

  const [myPokeSelection, setMyPokeSelection] = useState([]);
  const [pcPokeSelection, setPcPokeSelection] = useState([]);

  const handleDirection = (direction) => {
    
    if (direction === 'right' && position + 1 < 101) {
      setPosition((prev) => prev + 1);
    } else if(direction === 'left' && position - 1 > 0){
      setPosition((prev) => prev - 1);
    } else if(direction === 'down' && position + 4 < 101){
      setPosition((prev) => prev + 4);
    }else if(direction === 'up' && position - 4 > 0){
      setPosition((prev) => prev - 4);
    }else{
      setPosition(1);
    }
  };

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

  const computerSelection = () => {
    const rnd = getRandomInt(1, 100);
    const pc = pokemones.filter((p) => p.id === rnd);
    // console.log(pc);
    setPcPokeSelection(pc);
  }

  const handleSelection = () => {
    const selectPokemon = pokemones.filter((p) => p.id === position)
    // console.log(selectPokemon);
    setMyPokeSelection(selectPokemon);
    computerSelection();
  }

  console.log("my",myPokeSelection.length, myPokeSelection)
  console.log("pc",pcPokeSelection.length, pcPokeSelection)
  return (
    <div className="flex items-center justify-center min-h-screen">
      <LeftControl handleDirection={handleDirection} />
      
      {myPokeSelection.length && pcPokeSelection.length ? (
        <GameScreen myPokeSelection={myPokeSelection} pcPokeSelection={pcPokeSelection}/>
      ) : (
        <Screen pokemones={pokemones} position={position} />
      )}


      <RightControl handleSelection={handleSelection} />
    </div>
  );
}

export default App;
