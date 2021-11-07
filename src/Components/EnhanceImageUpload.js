import React,{useState} from 'react'

const EnhanceImageUpload = () => {
    const [selectedFile, setSelectedFile]=useState(null)
    const submitEvent=(event)=>{
        console.log(selectedFile)
    }
    // const fileSelectHandler=(event)=>{
    //     setSelectedFile(event.target.files[0])
    //     console.log(selectedFile)
    // }
    return (
        <div>
            <div className='inputHolder'>
                <input type='file' onChange={(e)=>setSelectedFile(e.target.value)} className='fileInput' />
            </div>
            <button onClick={submitEvent}>Submit</button>
            
        </div>
    )
}

export default EnhanceImageUpload
