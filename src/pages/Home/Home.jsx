import {
  Container,
  DecorRound,
  ImgDecor,
  MainSection,
  MainText,
  ShadowDecor,
  SpanText,
} from './Home.styled';
import timeDecor from 'img/times-decor.png';
import { motion } from 'framer-motion';
export const Home = () => {
  const pageVariants = {
    initial: { opacity: 0, x: '-100%' },
    animate: {
      opacity: 1,
      x: '0%',
      transition: { duration: 1, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: { ease: 'backIn', duration: 0.8 },
    },
  };
  return (
    <div style={{ overflow: 'hidden', overflowX: 'hidden' }}>
      <motion.main
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        style={{ width: false ? '120%' : '100%' }}
      >
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
      </motion.main>
    </div>
  );
};
