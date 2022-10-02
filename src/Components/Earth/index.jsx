// import style from "./style.module.scss";
// import React, { Suspense, useRef, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";

// function Earth() {
//   const [mesh, setMesh] = useState("#ffffff");
//   const [stripes, setStripes] = useState("#ffffff");
//   const [soul, setSoul] = useState("#ffffff");
//   useGLTF(globe);

//   const { wrapper, card, productcanvas } = style;

//   return (
//     <div>
//       <div className={wrapper}>
//         <div className={card}>
//           <div className={productcanvas}>
//             <Canvas>
//               <Suspense fallback={null}>
//                 <ambientLight />
//                 <spotLight
//                   intensity={0.9}
//                   angle={0.1}
//                   penumbra={1}
//                   position={[10, 15, 10]}
//                   castShadow
//                 />
//                 <Model
//                   customColors={{ mesh: mesh, stripes: stripes, soul: soul }}
//                 />
//                 <OrbitControls
//                   enablePan={true}
//                   enableZoom={true}
//                   enableRotate={true}
//                 />
//               </Suspense>
//             </Canvas>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Earth;
