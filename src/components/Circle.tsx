import { a, useSprings } from '@react-spring/three';
import { Sphere } from '@react-three/drei';
import React, { useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { color } from '../lib/colors';
import { useStore } from '../lib/useStore';

const Line: React.FC<any> = ({ index, verticesAmount, position }) => {
  const material = new THREE.LineBasicMaterial({
    color: color[Object.keys(color)[index]],
  });
  const geometry = new THREE.BufferGeometry();
  // geometry.y = (index / linesAmount) * radius * 2;
  const points = [];
  for (let i = 0; i <= verticesAmount; i++) {
    const vector = new THREE.Vector3();
    vector.x = Math.cos((i / verticesAmount) * Math.PI * 2);
    vector.z = Math.sin((i / verticesAmount) * Math.PI * 2);
    // vector. = vector.clone();
    points.push(vector);
  }
  geometry.setFromPoints(points);
  return <a.line userData={{ verticesAmount }} geometry={geometry} material={material} position={position} />;
};

const Circle: React.FC<{ movement: any; moveTo: any }> = ({ movement, moveTo }) => {
  const circlesAmount = useStore((state: any) => state.circlesAmount);
  const [springs, api] = useSprings(circlesAmount, (i) => ({
    from: { position: [0, i, 0] },
  }));

  useEffect(() => {}, []);
  return (
    <Sphere>
      <meshBasicMaterial color="hotpink" />
    </Sphere>
  );
};

export default Circle;
