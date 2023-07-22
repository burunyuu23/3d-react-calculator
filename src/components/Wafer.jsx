import React from 'react';
import BaseKeycap from "./BaseKeycap";
import {useGLTF} from "@react-three/drei";

const Wafer = ({basePosition, scaleAmp, ...props}) => {
    const {nodes, materials} = useGLTF('/wafer/wafer_m.gltf')
    return (
        <BaseKeycap basePosition={basePosition}
                    func={() => {}}
                    scaleAmp={scaleAmp}
                    clickable={false}
                    {...props}>
            <mesh geometry={nodes.Cube.geometry}
                  material={materials.Material}/>
        </BaseKeycap>
    );
};

useGLTF.preload('/wafer/wafer_m.gltf')
export default Wafer;