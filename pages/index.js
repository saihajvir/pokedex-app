import axios from "axios";
import { useState, useEffect } from "react";
import Card from "@/components/Card";

const fakeData = [
  {
    name: "mew"
  }
]

const Home = () => {
  
  const [data, setData] = useState(fakeData);
  
  useEffect (() => {
    const GetPokemon = async() => {
      const result = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      // console.log(result.data.results)
      setData(result.data.results)
    }
    GetPokemon();
}, [])

if(data === fakeData){
  return <>
    <h1>
      Sorry, No Pokemon Yet! :(
    </h1>
  </>
}

return <>
  {data && data.map((pokemon,index) => (
    <div key={index} style={{textTransform:"capitalize"}}>
      {pokemon.name}
    </div>
    )
  )}

  <Card/>
</>
}

export default Home;
