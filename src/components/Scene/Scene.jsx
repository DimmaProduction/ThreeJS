import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";

import css from "./styles.module.scss";

const Box = ({figure = "cube", ...props}) =>  {
  const ref = useRef();

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame(() => ref.current.rotation.x += 0.01);

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />

      {figure === "cube" ? <boxGeometry args={[2, 2, 2]} /> : null}
      {figure === "sphere" ? <sphereGeometry args={[1, 16, 16]} /> : null}

      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const Scene = () => {
    return (
        <div className={css.scene__wrapper}>
            <Canvas className={css.scene}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />

                <Box figure='cube' position={[1.2, 0, 0]} />
                {/* <Box figure='sphere' position={[4.2, 0, 0]} /> */}
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default Scene;


