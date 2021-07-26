import homeImg from "../../assets/homeImg.svg";
import { Title, Button } from "../../components";
import { Container, HomeImg, ButtonContainer, ImageContainer } from "./style";
import { useMemo } from 'react'

export const Home = () => {
  const imgMemoized = useMemo(() => (
      <HomeImg
      src={homeImg}
      alt="Woman sat on some coins looking to coins with Dollar, Euro and another cotations"
    />
  ),[])

  return (
    <Container>
      <Title>Bem vindo!</Title>
      <ImageContainer>
        {imgMemoized}
      </ImageContainer>
      <div>
        <ButtonContainer>
          <Button path="/convert/EUR" currency="EUR" isBackgroundPurple>
            Euro
          </Button>
          <Button path="/convert/USD" currency="USD" isBackgroundPurple>
            Dolar
          </Button>
        </ButtonContainer>
      </div>
    </Container>
  );
};
