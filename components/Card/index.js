import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";

const CardCont = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 400px;
    background-color: ${({bgcolor})=>bgcolor};
    border-radius: 30px;
    margin: 10px;
`
const PokemonCont = styled.div`
    display: flex;
    width: 100%;
    height: 70%;
    justify-content: center;
    align-items: center;
`
const InfoCont = styled.div`
    display: flex;
    width: 100%;
    height: 30%;
    justify-content: center;
    align-items: center;
`
const PokemonName = styled.h1`
    font-size: 2em;
    font-weight: 700;
    color: white;
`

const Card = ({
    name="default",
    pokeImg
}) => {

    return <>
        <CardCont
            bgcolor="green"
            whileHover={{
                scale: 1.1
            }}
        >
            <PokemonCont>
                <img src={pokeImg} width={200} />
            </PokemonCont>
            <InfoCont>
                <PokemonName>
                    {name}
                </PokemonName>
            </InfoCont>

        </CardCont>
    </>

}

export default Card;