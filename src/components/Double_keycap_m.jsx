/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 double_keycap_m.gltf 
*/

import React from 'react'
import {useGLTF} from '@react-three/drei'
import BaseKeycap from "./BaseKeycap";


export default function DoubleKeycap({basePosition, scaleAmp, text, ...props}) {
    const {nodes, materials} = useGLTF('/double_keycap/double_keycap_m.gltf')

    return (
        <BaseKeycap basePosition={basePosition}
                    scaleAmp={scaleAmp}
                    text={text}
                    {...props}>
            <mesh geometry={nodes.Cube.geometry}
                  material={materials.Material}/>
        </BaseKeycap>
    )
}

useGLTF.preload('/double_keycap/double_keycap_m.gltf')
