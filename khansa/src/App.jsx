import  { useState } from 'react';

function App() {
const[color, setColor] = useState("black");

  return (
    <div
    className="w-full h-screen duration-200" 
    style={{
      background: color,
      minHeight: "100vh", // added min-height to ensure full screen height
      minWidth: "100vw",  // added min-weight to ensure full screen weight
     }}>
       
         <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"
          style={{
        width: "100%", // added width to ensure full screen width
        minWidth: "100vw",  // added max-width to ensure full screen width
       }}>
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"
             style={{
        width: "50%", // added width to ensure button are not too wide
        minWidth: "50vw",  //  added max-width to ensure button are not too wide
       }}>
              <button onClick={()=> setColor("orange")}
        style={{
          background: "orange",
          padding: "10px 20px" , // added padding to increase button size
          fontSize: "18px" , // added font-size to increase button text size
        }}>
          Orange
      </button>
      {/* for red */}
      <button
      onClick={() => setColor("red")}
      className='outline-none px-4 py-1 rounded-full text-black shoadow-lg'
      style={{
        backgroundColor: "red",
        padding: "10px 20px" , // added padding to increase button size
        fontSize: "18px" , // added font-size to increase button text size
      }}
      >
        RED
      </button>
        {/* for white */}
      <button onClick={()=> setColor("white")}
        style={{
          background: "white",
          padding: "10px 20px" , // added padding to increase button size
          fontSize: "18px" , // added font-size to increase button text size
        }}>
          White
      </button>
        {/* for yellow */}
      <button onClick={()=> setColor("yellow")}
        style={{
          background: "yellow",
          padding: "10px 20px" , // added padding to increase button size
          fontSize: "18px" , // added font-size to increase button text size
        }}>
          Yellow
      </button>
      {/* for green */}
      <button
      onClick={()=> setColor("green")}
      style={{
        background: "green",
        padding: "10px 20px ", // added padding to increase button size
        fontSize: "18px" , // added font-size to increase button text size
      }}
      >
      Green
      </button>
          {/* for pink */}
      <button
      onClick={()=> setColor("pink")}
      style={{
        background: "pink",
        padding: "10px 20px ",  
        fontSize: "18px"  
      }}
      >
      Pink
      </button>
      {/* for blue */}
      <button onClick={()=> setColor("blue")}
        style={{
          backgroundColor: "blue",
          padding1: "0px 20px",
          fontSize: "18px"
        }}
        >
          Blue
      </button>
       </div>
       </div>
 
    </div>
  )
}

export default App;