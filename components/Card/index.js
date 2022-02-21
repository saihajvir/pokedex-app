import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";

const CardCont = styled(motion.div)`
    display: flex;
    width: 400px;
    height: 500px;
    background-color: white;
    border-radius: 30px;
    margin: 10px;
`

const Card = () => {

    return <>
        <CardCont
            whileHover={{
                scale: 1.1
            }}
        >

        </CardCont>
    </>

}

export default Card;