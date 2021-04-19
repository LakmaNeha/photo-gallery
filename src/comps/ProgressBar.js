import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import {motion} from 'framer-motion';

const ProgressBar = ({ uploadedInput ,setUploadedInput }) => {

    const {url,progress} = useStorage(uploadedInput);

    useEffect(() => {

        if(url){
            setUploadedInput(null);
        }

    },[url,setUploadedInput])

    return (
         <motion.div className="progress-bar" 
         initial={{width: 0 }}
         animate={{width: progress + '%' }}
         > </motion.div>
    )
}


export default ProgressBar;