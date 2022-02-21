import axios from "axios";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import styled from "styled-components";
import Switch from "@/components/Switch";
import { useTheme } from "@/utils/provider";
import { comp_themes, themes } from "@/utils/variables";
import MegaFunction from "@/utils/gradient";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const fakeData = [
  {
    name: "mew"
  }
]



const Home = () => {

  const {theme, setTheme} = useTheme();
  
  const [data, setData] = useState(fakeData);
  const [isDarkToggled, setIsDarkToggled] = useState(false);

  
  useEffect (() => {
    const GetPokemon = async() => {
      const result = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      console.log(result.data.results)
      setData(result.data.results)
    }
    GetPokemon();
    // MegaFunction();
}, [])

if(data === fakeData){
  return <>
    <h1>
      Sorry, No Pokemon Yet! :(
    </h1>
  </>
}

return <>
    <Wrapper>
      <Switch
        id="dark-mode-switch"
        toggled={theme === 'dark' ? true : false}
        onChange={e => setIsDarkToggled(e.target.checked)}
        onClick={()=>{setTheme(theme === 'dark' ? 'default' : 'dark')}}
        />
      <Card/>

      {/* <canvas id="gradient-canvas">

      </canvas> */}
    </Wrapper>
  {/* {data && data.map((pokemon) => (
    <div key={pokemon.name} style={{textTransform:"capitalize"}}>
      {pokemon.name}
    </div>
    )
  )} */}
</>
}

export default Home;
