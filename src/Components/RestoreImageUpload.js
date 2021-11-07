import React ,{ useState }from 'react'

const RestoreImageUpload = () => {
    const [selectedFile, setSelectedFile]=useState(null)
    const submitEvent=(event)=>{
        console.log(selectedFile)
    }
    return (
        <div>
            <div className='inputHolder'>
                <input type='file' onChange={(e)=>setSelectedFile(e.target.value)} className='fileInput' />
            </div>
            <button onClick={submitEvent}>Submit</button>
        </div>
    )
}

export default RestoreImageUpload
