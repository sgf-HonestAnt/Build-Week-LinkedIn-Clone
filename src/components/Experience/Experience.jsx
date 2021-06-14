import React ,{ useState }from 'react'

export default function Experience({jobTitle, jobPlace, years, location}) {
    
    return (<>
        <div className = 'experience-description px-5'>
            <h5 className = 'job-title'>{jobTitle}</h5>
            <h6 className = 'job-place'>{jobPlace}</h6>
            <h5 className = 'job-years'>{years}</h5>
            <h6 className = 'job-location  mb-5'>{location}</h6>
        </div>
        
   </> )
}
