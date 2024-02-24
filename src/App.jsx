import { Stars, Float, PresentationControls, Scroll } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { Center, Text, Stage, Html } from "@react-three/drei";
import {
	Selection,
	EffectComposer,
	Select,
	Outline,
} from "@react-three/postprocessing";
import { Bot } from "./CodedexBot";

function App() {
	const controlsRef = useRef();

	const [hovered, setHovered] = useState(false);
	const Hover = (e) => {
		e.stopPropagation();
		document.querySelector(".r3f").style.cursor = "pointer";
		setHovered(true);
	};

	const unhover = (e) => {
		e.stopPropagation();
		document.querySelector(".r3f").style.cursor = "grab";
		setHovered(false);
	};

	const click = () => {
		window.location.replace("https://www.codedex.io/home");
	};

	return (
		<>
			<color
				attach='background'
				args={["#0F1624"]}
			/>
			<ambientLight intensity={8} />

			<fog
				attach='fog'
				args={["black", 5, 10]}
			/>
			<Stars />

			<Text
				font='/press-start-2p-v15-latin-regular.woff'
				fontSize={0.1}
				position={[0, 0.8, 0]}>
				Oops! Page not found!
			</Text>

			<PresentationControls
				global
				enabled={true}
				snap={{ mass: 1, tension: 400 }}
				polar={[-Math.PI, Math.PI / 2]}
				azimuth={[-Math.PI / 2, Math.PI / 2]}
				config={{ mass: 2, tension: 170 }}>
				<Center>
					<Float distance={1}>
						<Selection>
							<EffectComposer
								multisampling={20}
								autoClear={false}>
								<Outline
									blur
									visibleEdgeColor='blue'
									edgeStrength={200}
									width={1000}
								/>
							</EffectComposer>

							<Select enabled={hovered}>
								<Bot
									onPointerOver={Hover}
									onPointerOut={unhover}
									onClick={click}
									scale={3}
								/>
							</Select>
						</Selection>
					</Float>
				</Center>
			</PresentationControls>
		</>
	);
}

export default App;
