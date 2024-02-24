import "./index.css";
import ReactDom from "react-dom/client";
import App from "./App";
import { Canvas } from "@react-three/fiber";
import UI from "./UI";
import Footer from "./Footer";

const root = ReactDom.createRoot(document.getElementById("root"));

const cameraSettings = {
	fov: 35,
	near: 0.1,
	far: 1000,
};
root.render(
	<>
		<UI />

		<Canvas
			className='r3f'
			camera={cameraSettings}>
			<App />
		</Canvas>
	</>
);
