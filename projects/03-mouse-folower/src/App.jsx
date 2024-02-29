import { useEffect,useState } from "react"

const FollowMouse = () => {
  const[enabled,setEnabled] = useState(false)
  const[coords,setCoords] = useState({x:0,y:0})

  useEffect(() => {
   console.log('efecto', [enabled])
    
    const handleEvent = (e) => {
      const {clientX, clientY} = e    
      console.log(clientX, clientY)
      setCoords({x: clientX, y: clientY})
    }

    if(enabled){
      window.addEventListener('mousemove', handleEvent)
    }  

    return () => {
      console.log('clean')
      window.removeEventListener('mousemove', handleEvent)
    }
  },[enabled] )
  return(
    <>       
      <div style={
           {
             width: 40, 
             height: 40, 
             background: 'red', 
             display: enabled ? 'block' : 'none',
             position: 'absolute',
             borderRadius: '50%',
             opacity: 0.8,
             pointerEvents: 'none',
             left: -20,
             top: -20,
             transform: `translate(${coords.x}px, ${coords.y}px)`

           }
      }>

      </div>
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactivar':'Activar'}</button>
      </>
  )
}

function App() {
 

  return (
    <>   
     <main>
        <FollowMouse/>      
     </main>
    </>
  )
}

export default App
