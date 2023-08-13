import { Container, DecorRound, ImgDecor, MainSection, MainText, ShadowDecor, SpanText } from "./Home.styled";
import timeDecor from 'img/times-decor.png'
export const Home = () => {
    return (
      <main>
        <MainSection>
          <Container>
            <MainText>
              Дивіться, втілення елегантності та точності: наручний годинник,
              який виходить за межі простого вимірювання часу, щоб стати
              шедевром <SpanText> мистецтва</SpanText> та майстерності. Його
              <SpanText> тонкий </SpanText>
              силует обіймає зап’ястя з витонченістю, яка не піддається опису,
              симфонія вигинів і ліній, ретельно розроблена, щоб підвищити
              <SpanText> комфорт</SpanText> і <SpanText> стиль</SpanText>.
            </MainText>
            <DecorRound>
              <ImgDecor src={timeDecor} alt="timeDecor" />
              <ShadowDecor></ShadowDecor>
            </DecorRound>
          </Container>
        </MainSection>
      </main>
    );
}