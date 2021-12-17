import { Box } from '@react-three/drei';
import React from 'react';

const Home: React.FC = props => {
	return (
		<Box args={[1, 1, 1]}>
			<meshBasicMaterial color="hotPink" />
		</Box>
	);
};

export default Home;
