import React ,{ useState }from 'react'

export default function JobDescription({activities}) {
    
    return (<>
        <div className = 'education-description px-5'>
            <h6 className = 'description'>{activities}</h6>
        </div>
        
   </> )
}
