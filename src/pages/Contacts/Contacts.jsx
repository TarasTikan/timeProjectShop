import { Container, DecorRound, ImgDecor, MainSection, ShadowDecor } from './Contacts.styled';
import timeDecor from 'img/times-decor.png';
import { motion } from 'framer-motion';
export const Contacts = () => {
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
      <motion.main initial="initial" animate="animate" exit="exit" variants={pageVariants}>
        <MainSection>
          <Container>
            {/* <h1>Друга сторінка</h1> */}
            <DecorRound>
              <ImgDecor src={timeDecor} alt="timeDecor" />
              <ShadowDecor></ShadowDecor>
            </DecorRound>
          </Container>
        </MainSection>
      </motion.main>
  );
};
