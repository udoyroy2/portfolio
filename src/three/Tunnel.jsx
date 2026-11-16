import {useMemo, useRef, useEffect} from "react";
import{Canvas, useFrame} from "@react-three/fiber";
import * as THREE from "three";



function TunnelRings(){
    const rings = useMemo(() => Array.from({length:70},(_,i)=>i,[])

)

   return (
        <group>
            {rings.map((i) => (
                <mesh 
                key={i}
                position={[0,0,-i*1.9]}
                rotation={[0,0,i*0.12]}
                >
                <torusGeometry args={[4.6+ Math.sin(i*0.35)*0.9,0.025,6,56]}/>
                <meshBasicMaterial
                color={i % 7 === 0? "#FFD9A8":"#FF8A1F"}
                transparent
                opacity={i % 7 === 0 ? 0.9 : 0.45}/>

                </mesh>
            ))}
            
        </group>
    );

};


function FloatingObject(){
    const object=useRef([]);

    const geomatries = useMemo(
        () => [
            new THREE.TorusKnotGeometry(0.9,0.3,120,16),
            new THREE.IcosahedronGeometry(1.1),
            new THREE.OctahedronGeometry(1.2),
            new THREE.BoxGeometry(1.4,1.4 ,1.4),
            new THREE.TorusGeometry(0.9,0.35,16,40),
        ],
        []
    );

useFrame(({clock}) =>{
    const t = clock.getElapsedTime();

    object.current.forEach((obj,i) =>{
        if(!obj) return;

        obj.rotation.x = t*0.4+i;
        obj.rotation.y=t*0.6;
        obj.position.y = Math.sin(t+i)*0.25;
    });
});

return (
    <group>
     {geomatries.map((geometry,i) =>(
        <group
         key={i}
         ref={(el) => (object.current[i] =el)}
         position={[2.6,0,6-(i/4)*115-10]}   
        >
            <mesh geometry={geometry}>
                <meshStandardMaterial
                color={i%2?"#FFD9A8":"#FF8A1F"}
                metalness={0.3}
                roughness={0.35}>

                </meshStandardMaterial>
            </mesh>

            <mesh geometry={geometry} scale={1.35}>
                <meshBasicMaterial color="#FFE9CC"
                wireframe
                transparent
                opacity={0.18}>


                </meshBasicMaterial>


            </mesh>

        </group>
     ))}


    </group>
)

}


function Particles (){
    const particles =useMemo(
        () => Array.from({length:60},(_,i)=>{
            const a =i*2.399;
            const radius =2+((i*17)%24)/10;

            return {
                position: [
                    Math.cos(a)* radius,
                    Math.sin(a) * radius,
                    ((i*37)%115)-5,
                ],
                size: 0.08 + (i%3)*0.04,
                color: i%2 ===0 ? "#FF8A1F" : "#FFD9A8",
            };
        }),
        []
    );


    return(
        <group>
            {particles.map((particle,i)=>(
                <mesh key={i} position={particle.position}>
                    <octahedronGeometry args={[particle.size]}/>
                    <meshBasicMaterial color={particle.color}/>
                    

                </mesh>
            ))}
        </group>
    )
}


function CameraController(){
    const poniter = useRef({x:0, y:0});



    useEffect(()=>{
        const handlePoniter =(e)=>{
            poniter.current.x =e.clientX/ window.innerWidth - 0.5;
            poniter.current.y = e.clientY/ window.innerHeight - 0.5;
        };

        window.addEventListener("pointermove",handlePoniter);

        return () => {
            window.removeEventListener("poitermove",handlePoniter);

        };
    },[])


    useFrame(({camera})=> {
        const maxScroll = 
        document.documentElement.scrollHeight -window.innerHeight;

        const progress = maxScroll > 0 ? window.scrollY /maxScroll:0;

        const z = 6 - progress * 115 ;

        camera.position.x = 
        Math.sin(progress * 9) *0.9 + poniter.current.x*1.2;

        camera.position.y =
        Math.cos(progress * 7) *0.5 + poniter.current.y*0.8;

        camera.position.z = z;
        


        camera.lookAt(
            Math.sin(progress*9)*0.3,
            0,
            z-10
        );

    });

    return null ;
}


function Scene(){
    return(
        <>
       
        <color attach="background" args={["#1A1A1D"]}/>

        <fog attach="fog" args={["#1A1A1D",6,48]}/>


        <ambientLight intensity={0.6} />
        <directionalLight 
        position ={[3,4,5]}
        intensity ={1} />



          <TunnelRings/>
          <FloatingObject/>
          <Particles/>
          <CameraController/>
         </>
    );
}


function Tunnel() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas camera={{
                position:[0,0,6],
                fov:60,
                near:0.1,
                far:100
            }}
            dpr={[1,1.5]}
            gl={{antialias: true}}>
                <Scene/>

            </Canvas>
        </div>
    )
}

export default Tunnel;