/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/yes.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Sphere001.geometry} material={materials['Material.003']} />
    </group>
  )
}

useGLTF.preload('/yes.glb')