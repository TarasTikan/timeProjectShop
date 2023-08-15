import { SlidesProducts } from 'components/SlidesProducts/SlidesProducts';
import { Container, MainSection,} from './Products.styled';
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
      x: '-100%',
      transition: { ease: 'backIn', duration: 0.8 },
    },
    bounceInLeft: {
      opacity: 1,
      x: '0%',
      transition: { type: 'spring', stiffness: 120, duration: 0.8 },
    },
    fadeOutLeft: {
      opacity: 0,
      x: '-100%',
      transition: { ease: 'easeOut', duration: 0.8 },
    },
  };


  return ( 
      <MainSection>
    <motion.main
      initial="initial"
      animate="animate"
      exit="fadeOutLeft"
      variants={pageVariants}
    >
        <Container>
       <SlidesProducts/>
        </Container>
    </motion.main>
      </MainSection>
  );
};
