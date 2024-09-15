import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import Island from '../models/Island'
import Sky from '../models/Sky'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'
import { socialLinks } from '../constants'
import { Link } from 'react-router-dom'

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIsland = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0]

    if(window.innerWidth < 768) {
        screenScale =[0.9, 0.9, 0.9];
        screenPosition = [0, -6.5, -43]
    } else {
        screenScale =[1, 1, 1];
    }

    return [screenScale, screenPosition, rotation]
  }
  
  const adjustPlane = () => {
    let screenScale, screenPosition;

    if(window.innerWidth < 768) {
        screenScale = [1.5, 1.5, 1.5];
        screenPosition = [0, -1.5, 0];
    } else {
        screenScale =[3, 3, 3];
        screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIsland();
  const [planeScale, planePosition] = adjustPlane();

  return (
    <section className="w-full h-screen relative">
        {
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>
        }
        <Canvas 
            className={"w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}"}
            camera={{ near: 0.1, far: 1000 }}
        >
            <Suspense fallback={<Loader />}>
                <directionalLight position={[10, 5, 1]} intensity={1} />
                <ambientLight intensity={0.2} />
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
                <Sky isRotating={isRotating} />
                <Island 
                    position={islandPosition}
                    scale={islandScale}
                    rotation={islandRotation}
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}
                    setCurrentStage={setCurrentStage}
                />
                <Plane
                    isRotating={isRotating}
                    scale={planeScale}
                    position={planePosition}
                    rotation={[0, 20, 0]}
                 />
            </Suspense>
        </Canvas>

        <div className="absolute bottom-2 left-2 space-y-1">
            {socialLinks.map( (social) => (
                <div>
                    <a href={social.link}>
                        <img 
                            src={social.iconUrl}
                            alt={social.name}
                            className="w-6 h-6 object-contain"
                        />
                    </a>
                </div>
            ))}
        </div>

    </section>
  )
}

export default Home