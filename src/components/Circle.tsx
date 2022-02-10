import { a, useSprings } from '@react-spring/three';
import { Sphere } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
// import * as Simplex from 'perlin-simplex';
import { makeNoise3D } from 'fast-simplex-noise';
import React, { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { color } from '../lib/colors';
import { Perlin } from '../lib/perlin';
import { useStore } from '../lib/useStore';

// const Line: React.FC<any> = ({ index, verticesAmount, position }) => {
//   const material = new THREE.LineBasicMaterial({
//     color: color[Object.keys(color)[index]],
//   });
//   const geometry = new THREE.BufferGeometry();
//   // geometry.y = (index / linesAmount) * radius * 2;
//   const points = [];
//   for (let i = 0; i <= verticesAmount; i++) {
//     const vector = new THREE.Vector3();
//     vector.x = Math.cos((i / verticesAmount) * Math.PI * 2);
//     vector.z = Math.sin((i / verticesAmount) * Math.PI * 2);
//     // vector. = vector.clone();
//     points.push(vector);
//   }
//   geometry.setFromPoints(points);
//   return <a.line userData={{ verticesAmount }} geometry={geometry} material={material} position={position} />;
// };

const perlin = new Perlin();
let x = 0;
let y = 0;
let z = 0;
let t = 1;
const tempVec = new THREE.Vector3();

function Ellipse(props: any) {
  const verticesAmount = useStore((state: any) => state.verticesAmount);
  const ref = useRef<any>();
  const geometry = useMemo(() => {
    const curve = new THREE.EllipseCurve(0, 0, 50, 50, 0, 2 * Math.PI, false, 0);
    const points = curve.getPoints(verticesAmount);
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [verticesAmount]);

  useFrame((state, delta) => {
    if (ref.current) {
      t += 0.00025 * (props.index + 10);
      //  t = requestAnimationFrame(Circle);
      const positions = ref.current.geometry.attributes.position.array;

      let index = 0;
      for (let i = 0, l = verticesAmount; i <= l; i++) {
        const xi = index++;
        const yi = index++;
        const zi = index++;
        x = positions[xi];
        y = positions[yi];
        z = positions[zi];
        const ratio = perlin.noise(x * 0.005 + t, y * 0.005 + t) * 3;
        positions[xi] += ratio * 0.005 * props.index;
        positions[yi] += ratio * 0.005 * props.index;
        positions[zi] += ratio * 0.01;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <line ref={ref} geometry={geometry} {...props}>
      <meshBasicMaterial color="red" />
    </line>
  );
}

const Circle: React.FC<{ movement: any; moveTo: any }> = ({ movement, moveTo }) => {
  const circlesAmount = useStore((state: any) => state.circlesAmount);
  const [springs, api] = useSprings(circlesAmount, (i) => ({
    from: { position: [0, i, 0] },
  }));

  // useEffect(() => {
  //   api.start((i) => ({
  //     position: [moveTo[i].x, i, moveTo[i].z],
  //     delay: i * 500,
  //   }));
  // }, []);

  return (
    <>
      <Ellipse index={1} />
      <Ellipse index={2} />
      <Ellipse index={3} />
      <Ellipse index={4} />
    </>
  );
};

export default Circle;
