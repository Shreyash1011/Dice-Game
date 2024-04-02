import styled from "styled-components"

const Score = ({score}) => {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>TOTAL SCORE</p>
    </ ScoreContainer >
  )
}

const ScoreContainer = styled.div`
    max-width: 200px;
    text-align: center;

    h1{
        font-size: 100px;
        line-height: 100px;
        margin: 0px;
    }

    p{
        font-size: 24px;
        font-weight: 500px;
        margin: 0px;
    }
`

export default Score