import { useRef, useEffect, useState } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { lerp } from 'three/src/math/MathUtils'

import planeScene from "../assets/3d/plane.glb"
import { useFrame } from '@react-three/fiber'

const Plane = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref);
    const [targetTimeScale, setTargetTimeScale] = useState(0.3);
    const [currentTimeScale, setCurrentTimeScale] = useState(0.3);

    useEffect(() => {
        const action = actions['Take 001'];
        action.play();
        action.timeScale = 0.3;
        
        setTargetTimeScale(isRotating ? 1.5 : 0.3);
        
    }, [actions, isRotating])
    
    useFrame((_, delta) => {
        setCurrentTimeScale(prev => {
            const newTimeScale = lerp(prev, targetTimeScale, 0.01);
            actions['Take 001'].timeScale = newTimeScale;
            return newTimeScale;
        });
    })

    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane