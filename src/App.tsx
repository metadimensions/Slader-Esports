import "./styles.css";
import { Card } from "./pages/components/Card";
import styled from "styled-components";
import img1 from "./Assets/images/img1.jpg";
import img2 from "./Assets/images/img2.jpg";

const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
`;

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

export default function App() {
  return (
    <div className="App">
      <h1>Elektronica Game Tournament</h1>
      <CardContainer>
        <Card title={"Cricket"} date={1} imgUrl={img1} />
        <Separator />
        <Card title={"Poker"} date={2} imgUrl={img2} />
      </CardContainer>
    </div>
  );
}
