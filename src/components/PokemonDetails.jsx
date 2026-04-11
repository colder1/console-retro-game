import React from 'react';

const PokemonDetails = ({ actual }) => {
    const pokemon = actual?.[0];

    if (!pokemon) {
        return (
            <div className="w-[440px] bg-gray-800 p-4 rounded-lg text-white text-center border-2">
            </div>
        );
    }

    return (
        <div className="w-[440px] bg-white border-4 border-gray-200 rounded-xl p-4 shadow-xl text-gray-800">
            <div className="flex justify-between items-center mb-2 border-b-2 pb-2">
                <span className="font-mono text-xl text-gray-400">#{String(pokemon.id).padStart(3, '0')}</span>
                <h2 className="text-2xl font-black uppercase">{pokemon.name}</h2>
            </div>

            <div className="flex justify-around bg-gray-50 rounded-lg py-2 mb-4 border border-gray-100">
                <div className="text-center">
                    <img src={pokemon.sprites?.front_default} className="w-24 h-24" alt="front" />
                    <p className="text-[10px] font-bold text-gray-400">FRONT</p>
                </div>
                <div className="text-center">
                    <img src={pokemon.sprites?.back_default} className="w-24 h-24" alt="back" />
                    <p className="text-[10px] font-bold text-gray-400">BACK</p>
                </div>
            </div>

            <div>
                <p className="font-bold text-sm mb-2 text-gray-500 italic">Moves</p>
                
                <div className="space-y-1 max-h-[200px] overflow-y-auto pr-2">
                    {pokemon.moves?.slice(0, 10).map((m, i) => (
                        <div key={i} className="flex justify-between bg-gray-100 p-2 rounded border-l-4 border-red-500">
                            <span className="capitalize font-medium text-sm">{m.move?.name}</span>
                            <span className="bg-neutral-800 text-white px-2 rounded text-xs flex items-center font-mono">
                                ATK: {m.attack}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PokemonDetails;