import React from 'react';
import Keycap from "./Keycap_m";
import {useDispatch} from "react-redux";
import {addSign, evaluate, removeLastSign} from "../store/actions";
import DoubleKeycap from "./Double_keycap_m";
import Wafer from "./Wafer";

const KeycapPanel = () => {
    const startX = -1.5;
    const stepX = 1;
    const startY = -2;
    const stepYZ = 0.7;
    const startZ = 0.5;

    const dispatch = useDispatch()

    const signleKeycaps = [
        '1', '2', '3', '/',
        '4', '5', '6', '*',
        '7', '8', '9', '+']

    return (
        <>
            <group
                position={[-0.3,0, -1]}>
            {
                signleKeycaps.map((value, index) => {
                    return (
                        <Keycap
                            key={index}
                            text={value}
                            func={(value: string) => dispatch(addSign(value))}
                            scaleAmp={0.5}
                            basePosition={[startX + stepX * index % 4, startY + stepYZ * Math.floor(index / 4), startZ + stepYZ * Math.floor(index / 4)]}/>)
                })
            }
            <DoubleKeycap
                text="0"
                func={(value: string) => dispatch(addSign(value))}
                scaleAmp={0.5}
                basePosition={[startX + 0.5*stepX,startY+3*stepYZ,startZ+3*stepYZ]}/>
                <Keycap
                    text={"."}
                    func={(value: string) => dispatch(addSign(value))}
                    scaleAmp={0.5}
                    basePosition={[startX + 2*stepX,startY+3*stepYZ,startZ+3*stepYZ]}/>
                <Keycap
                    text={"-"}
                    func={(value: string) => dispatch(addSign(value))}
                    scaleAmp={0.5}
                    basePosition={[startX + 3*stepX,startY+3*stepYZ,startZ+3*stepYZ]}/>
                <DoubleKeycap
                    text="C"
                    func={() => dispatch(removeLastSign())}
                    scaleAmp={0.5}
                    basePosition={[startX + 4*stepX,startY+0.48*stepYZ,startZ+0.5*stepYZ]}
                    rotation={[0, Math.PI/2, 0]}/>
                <DoubleKeycap
                    text="="
                    func={() => dispatch(evaluate())}
                    scaleAmp={0.5}
                    basePosition={[startX + 4*stepX,startY+2.48*stepYZ,startZ+2.5*stepYZ]}
                    rotation={[0, Math.PI/2, 0]}/>
                <Wafer
                    scaleAmp={0.4}
                        scale={[1, 1, 0.7]}
                    basePosition={[startX+2*stepX,startY+1.4*stepYZ,startZ+1.4*stepYZ]}
                    rotation={[0, 0, 0]}/>
            </group>
        </>
    );
};

export default KeycapPanel;