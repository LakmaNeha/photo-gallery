import React from 'react'
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion'
import { BsFillTrashFill } from "react-icons/bs";


const ImgeGrid = ({setSelectedImage, setDocId }) => {

   

    const { docs } = useFirestore('images');
    
    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <motion.div className= "img-wrap " key={doc.id}
                layout
                whileHover={{opacity: 1}}
                onClick={()=> setSelectedImage(doc.url)}>
                   
                    <motion.img src={doc.url} alt="uploaded pic" 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:0.5}}/>
                
                <button className="zindex " >
                <BsFillTrashFill onClick={(e) => 
                { setDocId(doc.id);
                  e.stopPropagation( );
                }} />
                </button>

                </motion.div>

            ))}

        </div>
    )
}

export default ImgeGrid;
