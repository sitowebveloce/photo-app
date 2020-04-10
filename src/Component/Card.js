import React from 'react'

export default function Card(props) {
    // Single image props
    const {image} = props;

    // TAGS STRING TO ARRAY BY USING SLIT
    const tags = image.tags.split(',');
    let tagsObj = tags.map((t,indx)=>
        
        <span key={indx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-1 mb-1">
                    #{t}
        </span>
    )

    //
    // ─── RETURN ─────────────────────────────────────────────────────────────────────
    // TAILWIND CSS CARD LINK https://tailwindcss.com/components/cards/
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 mb-2">
            {/* <img src="https://source.unsplash.com/random" alt="" className="w-full"/> */}
            <img src={image.webformatURL} alt={`img${image.id}`}/>
            <div className="px-6 py-4">
            <div className="flex items-center justify-end">
                <img src={image.userImageURL === '' ? 'https://cdn.pixabay.com/user/2019/07/15/18-51-07-612_250x250.jpg' : image.userImageURL} className='w-10 h-10 rounded-full mr-4' alt={`userImg${image.user_id}`}/> 
                 <div className="text-sm">
                    <p className="text-gray-900 leading-none">{image.user}</p>
                    <p className="text-gray-600"></p>
                </div>
                </div>

                <div className="px-2 py-2">
                <ul>
                    <li>
                        <strong className='text-purple-500'>Favorites:</strong> <span className="text-purple-700"> {image.favorites} </span>
                    </li>
                    <li>
                        <strong className='text-purple-500'>Comment:</strong> <span className="text-purple-700"> {image.comments} </span>
                    </li>
                    <li>
                        <strong className='text-purple-500'>Views:</strong> <span className="text-purple-700"> {image.views} </span>
                    </li>
                    <li>
                        <strong className='text-purple-500'>Downloads:</strong> <span className="text-purple-700"> {image.downloads} </span>
                    </li>
                    <li>
                        <strong className='text-purple-500'>Likes:</strong> <span className="text-purple-700"> {image.likes} </span>
                    </li>
                    <li>
                        <strong className='text-purple-500'>Link:</strong> <a href={image.pageURL} target='blank'><span role='img' aria-label='arrow-right'>➡️</span></a>
                    </li>
                </ul>
                </div>
                
            </div>
            <div className="px-6 py-4">
                {tagsObj}
            </div>
        </div>
    )
}
