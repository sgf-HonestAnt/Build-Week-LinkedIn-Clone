import React ,{ useState }from 'react'

export default function Description({courses}) {
    
    return (<>
        <div className = 'education-description px-5'>
            <h6 className = 'description'>{courses}</h6>
        </div>
        
   </> )
}
