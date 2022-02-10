import { Box, OrbitControls } from '@react-three/drei';
import React from 'react';
import Circle from '../components/Circle';

const Home: React.FC = (props) => {
  return (
    <>
      <Box args={[1, 1, 1]} position={[2, 0, 0]}>
        <meshBasicMaterial color="hotPink" />
      </Box>
      <Circle moveTo={undefined} movement={undefined} />
      <OrbitControls />
    </>
  );
};

export default Home;
