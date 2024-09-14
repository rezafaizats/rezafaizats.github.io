import { useRef, useEffect } from "react";
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

import skyScene from '../assets/3d/sky.glb'

const Sky = ({ isRotating, ...props }) => {
    
    const sky = useGLTF(skyScene)
    const { gl, viewport } = useThree();
    const skyRef = useRef();
    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.9;

    const handlePointerDown = (e) => {        
        const clientX = e.touches ? 
        e.touches[0].clientX : e.clientX;
        lastX.current = clientX;
    }

    const handlePointerMove = (e) => {
        if(isRotating) {
          const clientX = e.touches ? 
          e.touches[0].clientX : e.clientX;
    
          const delta = (clientX - lastX.current) / viewport.width;
          
          skyRef.current.rotation.y += delta * 0.0015 * Math.PI;
          lastX.current = clientX;
          rotationSpeed.current = delta * 0.0015 * Math.PI;
        }
    }

    const handleKeyDown = (e) => {
      if(e.key === 'ArrowLeft') {
        skyRef.current.rotation.y += 0.0015 * Math.PI;
      }
      else if (e.key === 'ArrowRight') {
        skyRef.current.rotation.y -= 0.0015 * Math.PI;
      }
    }

    useEffect(() => {
        const canvas = gl.domElement;
        canvas.addEventListener('pointerdown', handlePointerDown);
        canvas.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('keydown', handleKeyDown);
        
        return () => {
            canvas.removeEventListener('pointerdown', handlePointerDown);
            canvas.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('keydown', handleKeyDown);
        }
    })

    useFrame( (_, delta) => {
        if(!isRotating)  {
            rotationSpeed.current *= dampingFactor;

            if(Math.abs(rotationSpeed.current) < 0.001) {
                rotationSpeed.current = 0;
            }
            
            skyRef.current.rotation.y += rotationSpeed.current;
        }
    })

    return (
        <mesh ref={skyRef} {...props}>
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default Sky