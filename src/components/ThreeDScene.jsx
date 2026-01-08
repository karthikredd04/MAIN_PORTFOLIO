import React, { useRef, useState, Suspense, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Float, Text, Center, Environment, Stars, Sparkles, Html } from '@react-three/drei'
import * as THREE from 'three'

// Futuristic Grid Floor
function GridFloor() {
  const gridRef = useRef()
  
  useFrame((state) => {
    if (gridRef.current) {
      // Animate grid lines
      gridRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
      <planeGeometry args={[30, 30, 30, 30]} />
      <meshBasicMaterial
        color="#0a0e17"
        wireframe
        transparent
        opacity={0.3}
        wireframeLinewidth={1}
      />
    </mesh>
  )
}

// Data Stream Particles
function DataStream() {
  const particlesRef = useRef()
  const count = 500
  
  const positions = new Float32Array(count * 3)
  const velocities = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  
  // Initialize particles in streams
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2
    const radius = 3 + Math.random() * 8
    
    positions[i * 3] = Math.cos(angle) * radius
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10
    positions[i * 3 + 2] = Math.sin(angle) * radius
    
    velocities[i * 3] = 0
    velocities[i * 3 + 1] = -0.05 - Math.random() * 0.1
    velocities[i * 3 + 2] = 0
    
    // Blue to cyan gradient
    colors[i * 3] = 0.2 + Math.random() * 0.3
    colors[i * 3 + 1] = 0.6 + Math.random() * 0.4
    colors[i * 3 + 2] = 0.9 + Math.random() * 0.1
  }

  useFrame(() => {
    if (!particlesRef.current) return
    
    const positionsArray = particlesRef.current.geometry.attributes.position.array
    
    for (let i = 0; i < count; i++) {
      // Update position
      positionsArray[i * 3 + 1] += velocities[i * 3 + 1]
      
      // Reset particle when it goes below threshold
      if (positionsArray[i * 3 + 1] < -5) {
        positionsArray[i * 3 + 1] = 5 + Math.random() * 5
        positionsArray[i * 3] = (Math.random() - 0.5) * 10
        positionsArray[i * 3 + 2] = (Math.random() - 0.5) * 10
      }
    }
    
    particlesRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Neural Network Visualization
function NeuralNetworkVisualizer() {
  const nodesRef = useRef([])
  const linesRef = useRef([])
  
  const layers = 5
  const nodesPerLayer = [4, 8, 12, 8, 4]
  const layerSpacing = 3
  const nodeSpacing = 1.2
  
  const nodes = []
  const connections = []
  
  // Create nodes
  for (let layer = 0; layer < layers; layer++) {
    for (let i = 0; i < nodesPerLayer[layer]; i++) {
      const x = (layer - (layers - 1) / 2) * layerSpacing
      const y = (i - (nodesPerLayer[layer] - 1) / 2) * nodeSpacing
      
      nodes.push({
        position: [x, y, 0],
        color: layer === 0 ? '#3b82f6' : 
               layer === 1 ? '#8b5cf6' : 
               layer === 2 ? '#ec4899' : 
               layer === 3 ? '#10b981' : '#f59e0b',
        size: 0.2 + layer * 0.05,
        layer
      })
    }
  }
  
  // Create connections
  let nodeIndex = 0
  for (let layer = 0; layer < layers - 1; layer++) {
    const currentLayerNodes = nodesPerLayer[layer]
    const nextLayerNodes = nodesPerLayer[layer + 1]
    
    for (let i = 0; i < currentLayerNodes; i++) {
      for (let j = 0; j < nextLayerNodes; j++) {
        const from = nodeIndex + i
        const to = nodeIndex + currentLayerNodes + j
        
        connections.push({
          from: nodes[from].position,
          to: nodes[to].position,
          color: nodes[from].color,
          opacity: 0.15 + Math.random() * 0.1
        })
      }
    }
    nodeIndex += currentLayerNodes
  }

  useFrame((state) => {
    nodesRef.current.forEach((mesh, i) => {
      if (mesh) {
        // Pulsing animation
        const pulse = Math.sin(state.clock.elapsedTime * 3 + i) * 0.1 + 1
        mesh.scale.setScalar(pulse)
        
        // Subtle floating
        mesh.position.y = nodes[i].position[1] + Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.1
      }
    })
    
    // Animate connections
    linesRef.current.forEach((line, i) => {
      if (line) {
        line.material.opacity = 0.1 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.1
      }
    })
  })

  return (
    <group>
      {/* Connections */}
      {connections.map((conn, i) => (
        <line key={i} ref={el => linesRef.current[i] = el}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                conn.from[0], conn.from[1], conn.from[2],
                conn.to[0], conn.to[1], conn.to[2]
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color={conn.color}
            transparent
            opacity={conn.opacity}
            linewidth={1}
            blending={THREE.AdditiveBlending}
          />
        </line>
      ))}
      
      {/* Nodes */}
      {nodes.map((node, i) => (
        <mesh
          key={i}
          ref={el => nodesRef.current[i] = el}
          position={node.position}
        >
          <sphereGeometry args={[node.size, 16, 16]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={0.8}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  )
}

// Floating Holographic Displays
function HolographicDisplays() {
  const displays = [
    {
      position: [5, 2, -3],
      content: "Neural\nNetwork",
      color: "#3b82f6",
      size: 1.2
    },
    {
      position: [-5, 3, 2],
      content: "Deep\nLearning",
      color: "#8b5cf6",
      size: 1.2
    },
    {
      position: [4, -2, -4],
      content: "Computer\nVision",
      color: "#10b981",
      size: 1
    },
    {
      position: [-4, -1, 3],
      content: "Natural\nLanguage",
      color: "#ec4899",
      size: 1
    }
  ]

  return (
    <>
      {displays.map((display, i) => (
        <Float
          key={i}
          speed={0.5 + i * 0.2}
          rotationIntensity={0.3}
          floatIntensity={1}
        >
          <group position={display.position}>
            {/* Holographic effect plane */}
            <mesh>
              <planeGeometry args={[display.size * 3, display.size * 2]} />
              <meshBasicMaterial
                color={display.color}
                transparent
                opacity={0.1}
                side={THREE.DoubleSide}
              />
            </mesh>
            
            {/* Text */}
            <Text
              position={[0, 0, 0.1]}
              fontSize={display.size * 0.15}
              color={display.color}
              anchorX="center"
              anchorY="middle"
              textAlign="center"
              outlineWidth={0.02}
              outlineColor="#000000"
            >
              {display.content}
              <meshStandardMaterial
                color={display.color}
                emissive={display.color}
                emissiveIntensity={2}
                transparent
                opacity={0.9}
              />
            </Text>
          </group>
        </Float>
      ))}
    </>
  )
}

// Animated Code Matrix (like The Matrix)
function CodeMatrix() {
  const columns = 20
  const rows = 30
  const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
  const groupRef = useRef()
  
  const texts = []
  
  // Initialize matrix
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      texts.push({
        char: chars[Math.floor(Math.random() * chars.length)],
        position: [x - columns/2, y - rows/2, -10],
        speed: 0.1 + Math.random() * 0.3,
        opacity: Math.random() * 0.8 + 0.2
      })
    }
  }

  useFrame((state) => {
    if (!groupRef.current) return
    
    groupRef.current.children.forEach((text, i) => {
      const data = texts[i]
      
      // Move downward
      text.position.y -= data.speed * 0.1
      
      // Reset when off screen
      if (text.position.y < -rows/2 - 5) {
        text.position.y = rows/2 + 5
        text.opacity = Math.random() * 0.8 + 0.2
        text.children[0].material.opacity = text.opacity
      }
      
      // Fade in/out
      text.children[0].material.opacity = 
        0.3 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.2
    })
  })

  return (
    <group ref={groupRef}>
      {texts.map((data, i) => (
        <Text
          key={i}
          position={data.position}
          fontSize={0.3}
          color="#10b981"
          anchorX="center"
          anchorY="middle"
        >
          {data.char}
          <meshBasicMaterial
            color="#10b981"
            transparent
            opacity={data.opacity}
          />
        </Text>
      ))}
    </group>
  )
}

// Main 3D Scene Component
export default function ThreeDScene() {
  return (
    <div className="w-full h-screen relative">
      <Canvas
        camera={{ position: [0, 2, 12], fov: 60 }}
        className="absolute inset-0"
      >
        <Suspense fallback={null}>
          {/* Background Color */}
          <color attach="background" args={['#0a0e17']} />
          
          {/* Lighting */}
          <ambientLight intensity={0.2} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={0.8}
            color="#3b82f6"
            castShadow
          />
          <pointLight position={[-5, 5, -5]} intensity={0.5} color="#8b5cf6" />
          <pointLight position={[0, -3, 5]} intensity={0.3} color="#10b981" />
          
          {/* Stars */}
          <Stars
            radius={50}
            depth={30}
            count={2000}
            factor={3}
            saturation={0}
            fade
            speed={0.2}
          />
          
          {/* Grid Floor */}
          <GridFloor />
          
          {/* Data Stream */}
          <DataStream />
          
          {/* Neural Network */}
          <NeuralNetworkVisualizer />
          
          {/* Holographic Displays */}
          <HolographicDisplays />
          
          {/* Code Matrix in background */}
          <CodeMatrix />
          
          {/* Main Title */}
          <Center position={[0, 3, 0]}>
            <Text
              fontSize={2}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
              font="https://fonts.gstatic.com/s/rajdhani/v15/LDIxapCSOBg7S-QT7p4GM-aUWA.woff"
              outlineWidth={0.1}
              outlineColor="#000000"
            >
              AI PORTFOLIO
              <meshStandardMaterial
                color="#ffffff"
                emissive="#3b82f6"
                emissiveIntensity={0.5}
                metalness={0.8}
                roughness={0.2}
              />
            </Text>
          </Center>
          
          {/* Subtitle */}
          <Center position={[0, 1, 0]}>
            <Text
              fontSize={0.8}
              color="#3b82f6"
              anchorX="center"
              anchorY="middle"
              font="https://fonts.gstatic.com/s/rajdhani/v15/LDIxapCSOBg7S-QT7p4GM-aUWA.woff"
            >
              Neural Networks • Machine Learning • AI Systems
              <meshStandardMaterial
                color="#3b82f6"
                emissive="#3b82f6"
                emissiveIntensity={0.3}
              />
            </Text>
          </Center>

          {/* Sparkles */}
          <Sparkles
            count={100}
            size={0.5}
            speed={0.1}
            opacity={0.3}
            color="#3b82f6"
            scale={20}
          />

          {/* Environment */}
          <Environment preset="night" />
          
          {/* Camera Controls */}
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            maxDistance={20}
            minDistance={5}
            autoRotate
            autoRotateSpeed={0.15}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 6}
          />
        </Suspense>
      </Canvas>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/40 via-transparent to-dark-950/60 pointer-events-none" />
    </div>
  )
}