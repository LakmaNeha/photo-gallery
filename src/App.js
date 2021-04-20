import React , {useState, Fragment} from 'react';
import './App.css';
import Delete from './comps/Delete';
import ImgeGrid from './comps/ImgeGrid';
import Modal from './comps/Modal';
import ScrollButton from './comps/ScrollButton';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';


function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [docId , setDocId] =useState(null)

  return (
   
    <div className="App">

   <Fragment>

     <Title/>
     <UploadForm/>
     <ImgeGrid setSelectedImage={setSelectedImage} setDocId={setDocId}  />
    {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/> }
    {docId && <Delete docId={docId} setDocId={setDocId}/> }
    <ScrollButton/>

   </Fragment>
     
    </div>
    
  );
}

export default App;
