import React from 'react'
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion'
import { BsFillTrashFill } from "react-icons/bs";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase_config';

const ImgeGrid = ({setSelectedImage, setDocId, setDelUrl }) => {

    const [user] = useAuthState(auth);

    const { docs } = useFirestore('images');

    function deletePicture(id,url){
        if (window.confirm(`Are you sure you want to delete?`))
        {
         setDocId(id);
         setDelUrl(url)
        }
    }
    
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
                
                {user && <button className="zindex " >
                <BsFillTrashFill /*onClick={(e) => 
                { setDocId(doc.id);
                    setDelUrl(doc.url);
                  e.stopPropagation( );
                }} */
                onClick={(e)=>{e.stopPropagation();
                    deletePicture(doc.id,doc.url)}} />
                </button>}

                </motion.div>

            ))}

        </div>
    )
}

export default ImgeGrid;
