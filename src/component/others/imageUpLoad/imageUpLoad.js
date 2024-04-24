import { useState } from 'react'
import './ImageUpload.css'


const ImageUpload=props=>{
  const[file,setFile]=useState([])
  const [isValid, setIsValid] = useState(false);

  
  const handleChange=(event)=>{
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files) {
      pickedFile = event.target.files;
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    props.onInput(props.id, pickedFile, fileIsValid);
  };
  
  return(
      <div className="forms-control">{
        Array.from(file).map(item=>{
         return(
          <span>
             <img 
           width={150}
           height={100}
           alt={file.name}
           style={{padding:"10px"}}
          src={item ? URL.createObjectURL(item) :null}/>
          </span>
         )
        })
      }
      <input
      multiple
      type='file'
      accept=".jpg,.png,.jpeg"
      onChange={handleChange}
      />
    </div>
  )
}


export default ImageUpload
