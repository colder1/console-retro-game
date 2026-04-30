
const Screen = ({ pokemones, position }) => {
    return (
        <>
            <div className="w-[440px] h-[250px] overflow-y-auto border-y-4 border-solid border-black bg-slate-100">
                <div className="grid grid-cols-4 gap-1 p-2 justify-items-center">
                    {pokemones?.map((pokemon, index)=>{
                        const isSelected = position===pokemon.id;
                        return(
                            <div
                                key={index}
                                className="flex flex-col items-center border p-1 m-1 w-[100px] h-[110px] bg-white rounded shadow-sm"
                                style={{
                                    borderColor: isSelected? "#0891B2":"#C9C9C9",
                                    color: isSelected? "#0891B2":"#C9C9C9",
                                    borderWidth: isSelected ? "3px" : "1px"
                                }}
                            >
                                <img 
                                src={pokemon?.sprites?.front_default} 
                                alt={pokemon.name}
                                className="w-20 h-20 object-contain" />

                                <p className={`uppercase text-xs text-center ${isSelected ? 'font-black' : 'font-normal'}`}>
                                    {pokemon.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Screen;