import axios from "axios";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import styled from "styled-components";
import Switch from "@/components/Switch";
import { useTheme } from "@/utils/provider";
import { comp_themes, themes } from "@/utils/variables";
import AnimatedGradient from "@/utils/gradient";

const Wrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  width: 100vw;
  /* height: 100vh; */
  justify-content: center;
  align-items: center;
`

const fakeData = [
  {
    name: "mew"
  }
]

const arr = []

const Home = () => {
  
  const {theme, setTheme} = useTheme();
  
  const [data, setData] = useState([]);
  const [isDarkToggled, setIsDarkToggled] = useState(false);
  
  const PokemonLimit = 151

  const CatchPokemon = async() => {
    let PokemonArr = []
    for(let i = 1; i <= PokemonLimit; i++){
      PokemonArr.push(await GetPokemon(i))
    }
    setData(PokemonArr)
    console.log(PokemonArr)
  }
  
  const GetPokemon = async(id) => {
    // const result = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return result.data;
  }

  
  useEffect (() => {
    CatchPokemon();
}, [])

if(data === []){
  return <>
    <h1>
      Sorry, No Pokemon Yet! :(
    </h1>
  </>
}

return <>
      <Switch
        id="dark-mode-switch"
        toggled={theme === 'dark' ? true : false}
        onChange={e => setIsDarkToggled(e.target.checked)}
        onClick={()=>{setTheme(theme === 'dark' ? 'default' : 'dark')}}
      />
    <Wrapper>
        {data && data.map((pokemon) => (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            pokeImg={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          />
          )
        )}
    </Wrapper>
</>
}

export default Home;
