import React , {useState, Fragment} from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Delete from './comps/Delete';
import ImgeGrid from './comps/ImgeGrid';
import Modal from './comps/Modal';
import ScrollButton from './comps/ScrollButton';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import { lightTheme, darkTheme } from './comps/DarkMode/theme';
import { GlobalStyles } from './comps/DarkMode/GlobalStyles';
import  {useDarkMode} from "./hooks/useDarkMode"
import Toggle from './comps/DarkMode/Toggle';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase_config';

function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [docId , setDocId] =useState(null);
  const [delUrl, setDelUrl] = useState(null);
  const [user] = useAuthState(auth)

 
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;


  if(!mountedComponent) return <div/>
  return (
   
    <div className="App">

    <ThemeProvider theme={themeMode} >
    <GlobalStyles/>

    <Fragment>
        
        <Toggle  theme={theme} toggleTheme={themeToggler} /> 
       
        <Title/>
        
        {user && <UploadForm/>}
        <ImgeGrid setSelectedImage={setSelectedImage} setDocId={setDocId} setDelUrl={setDelUrl} />
        {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/> }
        {docId && delUrl && <Delete docId={docId} setDocId={setDocId} delUrl={delUrl} setDelUrl={setDelUrl} /> }
        <ScrollButton/>

    </Fragment>
    </ThemeProvider>
     
    </div>
    
  );
}

export default App;
