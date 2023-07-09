import React from 'react'
import { ColorPicker, useColor } from 'react-color-palette'
import "react-color-palette/lib/css/styles.css";
function Themes() {
    const [color, setColor] = useColor("hex", "#121212");
    const colour = color.hex;
  return (
    <>
    
    <div className=" h-screen w-screen" style={{
        backgroundColor: colour,
    }}>


        <ColorPicker width={450} height={228} 
               color={color} 
               onChange={setColor} hideHSV dark />;
    </div>
    </>
  )
}

export default Themes;