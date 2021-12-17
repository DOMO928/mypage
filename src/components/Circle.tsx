import { Sphere } from '@react-three/drei';
import React from 'react';

const Circle: React.FC = props => {
	return (
		<Sphere>
			<meshBasicMaterial color="hotpink" />
		</Sphere>
	);
};

export default Circle;
