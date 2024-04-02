import { useState } from "react"
import styled from "styled-components"


const RollDice = ({correntDice, rollDice}) => {
    

    

  return (
    <DiceContainer>
        <div className="dice" onClick={rollDice}>
            <img src={`/images/dice/dice_${correntDice}.png`} alt="Dice 1" />
        </div>
        <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 48px;
    flex-direction: column;

    .dice{
        cursor: pointer;
    }
    p{
        font-size: 24px;
    }
`