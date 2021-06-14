import React ,{ useState }from 'react'

export default function Education({school, degree, year}) {
    
    return (<>
        <div className = 'education-description px-5'>
            <h5 className = 'school-name'>{school}</h5>
            <h6 className = 'degree-name'>{degree}</h6>
            <h6 className = 'year mb-5'>{year}</h6>
        </div>
        
   </> )
}
