import React from 'react'
import Card from './Card'

export default function Wrapper(props) {
  
   const {images, loading} = props;
    //
    // ─── RENDER ──────────────────────────────────────────────────────────────────────────
    let obj = {}
       if(!loading){
       // console.log(images)
        obj = images.map((i,indx)=> <Card key={i.id} image={i}/>)
       }

    //
    // ─── RETURN ─────────────────────────────────────────────────────────────────────
    
    return (
        <div className="mx-auto container">
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-1 items-center justify-center mx-auto'>
            {obj}
        </div>
     </div>
        
    )
}
