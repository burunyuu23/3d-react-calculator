import React from 'react';
import Tv from "../components/Tv";
import KeycapPanel from "../components/KeycapPanel";
import {Canvas} from "@react-three/fiber";

const CalcScene = () => {
    return (
        <>
            <Canvas
                camera={{
                    fov: 90,
                    position: [0, 0, 3]
                }}
            >
                <ambientLight intensity={0.1}/>
                <directionalLight position={[1, 1, 1]} intensity={0.8}/>
                {/* ! */}
                <Tv
                    basePosition={[0, -900, -100]}
                />
                <KeycapPanel/>
            </Canvas>
        </>
    );
};

export default CalcScene;