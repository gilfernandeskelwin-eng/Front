import { useEffect, useState } from "react";
// import Card from "./components/card/Card"
import PokeCard from "./components/pokecard/PokeCard";
import './index.css';


function App() {
  
  const [data, setData] = useState({})

  useEffect(() => {
    
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((response) => response.json())
    .then((data) => setData(data))

  }, [])

  console.log("aqui é o state", data)

  return (
    <>
      <h1>Itens:</h1>
      {/* <Card
        title={data.title}
        description={data.description}
        price={data.price}
        category={data.category}
        src={data.image}
      /> */}
      <PokeCard
        name={data.name}
        image={data.sprites.front_default}
        type={data.types[0].type.name}
      />

    </>
  );
}

export default App;
