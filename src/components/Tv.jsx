/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 tv.gltf 
Author: Virtual Museums of Małopolska (https://sketchfab.com/WirtualneMuzeaMalopolski)
License: CC0-1.0 (http://creativecommons.org/publicdomain/zero/1.0/)
Source: https://sketchfab.com/3d-models/black-and-white-belweder-ot-1782-tv-set-5c2be264f3ce4e11ac9387505e0bcea0
Title: Black and white “Belweder” — OT 1782 TV set
*/

import {Text, useGLTF} from '@react-three/drei'
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";


const Tv = (({basePosition}) => {

    // TODO: вынести логику из телевизера, потому что three.js ререндерит объект при анимации, либо я просто тупой
    const expression = useSelector((state) => state.expression);
    const result = useSelector((state) => state.result);
    console.log(expression)
    console.log(result)

    const [specialSymbol, setSpecialSymbol] = useState('_');
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (specialSymbol === '_')
                setSpecialSymbol('')
            else
                setSpecialSymbol('_')
        }, 1000)
        return function cleanUp() {
            clearInterval(intervalId)
        }
    }, [specialSymbol])

    const {nodes, materials} = useGLTF('/tv/tv.gltf')

    return (
        <group
            dispose={null}
            rotation={[Math.PI / 2, 0, 0]}>
            <group position={basePosition}
                   rotation={[0, 0, 0]}>
                <group rotation={[-Math.PI + Math.PI / 8, 0, 0]}>
                    <group rotation={[ Math.PI/2, 0,0]}
                           position={[0, -200, 300]}>
                        <Text
                            fontSize={35}
                            maxWidth={300}
                            color={"rgba(135,144,60,0.47)"}>
                            {expression + specialSymbol + (result === "" ? ("") : (`= ${result}`))}
                        </Text>
                    </group>

                    <mesh geometry={nodes.tv_matt_tv_belweder_0.geometry} material={materials.tv_belweder} position={[0.733, -206.119, 1.599]}/>
                    <mesh geometry={nodes.tv_drewno_obudowa_tv_drewno_obudowa_0.geometry} material={materials.tv_drewno_obudowa}
                          position={[0.733, -206.119, 1.599]}/>
                    <mesh geometry={nodes.tv_glass_ekran_tv_glass_ekran_0.geometry} material={materials.tv_glass_ekran}
                          position={[0.733, -206.119, 1.599]}/>
                    <mesh geometry={nodes.tv_plastic_detale_tv_plastic_detale_0.geometry} material={materials.tv_plastic_detale}
                          position={[0.733, -206.119, 1.599]}/>
                    <mesh geometry={nodes.tv_detale_polysk_tv_detale_polysk_0.geometry} material={materials.tv_detale_polysk}
                          position={[0.733, -206.119, 1.599]}/>
                    <mesh geometry={nodes.tv_front_tv_front_0.geometry} material={materials.tv_front} position={[0.733, -206.119, 1.599]}/>
                </group>
            </group>
        </group>
    )
});

useGLTF.preload('/tv/tv.gltf')

export default Tv;