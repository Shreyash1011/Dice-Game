import styled from "styled-components"
import { Button } from "../styled/Button";

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src="https://media.istockphoto.com/id/183819034/photo/two-dices.jpg?s=612x612&w=0&k=20&c=sawA-Q6tAlmzm37EiFViPCr9AT3f-PnwCM8qXrQzR2w=" alt="" />
        </div>
        <div className="content">
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

const Container = styled.div`
    max-width: 1180px;
    height: 100vp;
    display: flex;
    margin: 0 auto;
    align-items: center;

    .content {
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }

`;


export default StartGame