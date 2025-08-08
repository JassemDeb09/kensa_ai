// Global type declarations for React Three Fiber
declare namespace JSX {
  interface IntrinsicElements {
    // Core 3D objects
    group: any
    mesh: any
    
    // Materials
    meshStandardMaterial: any
    meshBasicMaterial: any
    lineBasicMaterial: any
    
    // Lights
    ambientLight: any
    directionalLight: any
    pointLight: any
    spotLight: any
    
    // Scene effects
    fog: any
    fogExp2: any
    
    // Geometries
    boxGeometry: any
    sphereGeometry: any
    torusGeometry: any
    planeGeometry: any
    cylinderGeometry: any
    
    // Lines
    line: any
    lineLoop: any
    lineSegments: any
  }
}
