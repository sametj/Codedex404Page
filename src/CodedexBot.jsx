import React, { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";

export function Bot(props) {
	const { nodes, materials } = useGLTF("/Codedex.glb");
	return (
		<group
			{...props}
			dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.PBase_Baked.geometry}
				material={materials.MergedBake_Baked}
				position={[0, 0.124, 0.119]}
				scale={[0.142, 0.025, 0.142]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.PcScreen_Baked.geometry}
				material={materials.MergedBake_Baked}
				position={[0, 0.292, 0.181]}
				rotation={[0, 0, -Math.PI]}
				scale={[-0.112, -0.112, -0.053]}>
				<Html
					wrapperClass='testDiv'
					position={[1.4, 1.5, 0]}>
					<div className='bubble grow left '>
						Hey there! This page doesn't exist yet, but you can
						still check out the Codedex website by clicking the
						robot!
					</div>
				</Html>
			</mesh>
		</group>
	);
}

useGLTF.preload("/Codedex.glb");
