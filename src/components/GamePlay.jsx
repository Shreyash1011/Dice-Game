import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import Score from "./Score";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const[correntDice, setCurrentDice] = useState(1);
  const[showRules, setShowRules] = useState(false);

const generateRandomNumber = (min, max) =>{
  return Math.floor(Math.random() * (max - min) + min);
}

const rollDice = () => {
    const randomNo = generateRandomNumber(1, 7);

    setCurrentDice((prev) => randomNo);

    if(!selectedNumber) return; 

    if(selectedNumber === randomNo){
      setScore((prev)=> prev+randomNo);
    }else{
      setScore((prev) => prev-1);
    }

    setSelectedNumber(undefined);
};

const resetScore = () => {
  setScore(0);
}



  return (
    <MainContainer>
      <div className="top_section">
        <Score score={score}/>
        <NumberSelector 
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice 
      correntDice={correntDice}
      rollDice={rollDice}
      />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button 
        onClick={()=> setShowRules(prev => !prev)}
        >{showRules ? "Hide": "Show"} Rules</Button>
      </div>

      {showRules && <Rules />}

    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`

    padding-top: 70px ;

    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .btns{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;

    }
  `;

