import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Fetch } from './Component/Fetch';
import Wrapper from './Component/Wrapper';
import Loader from './Component/Loader';
import Search from './Component/Search';

function App() {
   //
   // ─── STATE ──────────────────────────────────────────────────────────────────────   
  const [images, setImages] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = React.useState('');

//
// ─── USEEFFECT FETCH on search change ────────────────────────────────────────────────────────────

  React.useEffect(()=>{
    // FETCH IMAGES AND SET THE STATE
    Fetch(search, setImages, setLoading)
  }, [search]);

  //
  // ─── RETURN ─────────────────────────────────────────────────────────────────────
  return (
    <div className="">
      <div className='text-center mx-auto'><a href="/catalog" className='mx-auto'> <span role='img' aria-label='home'>🏠</span></a></div> 
     <h1 className="text-6xl white text-center text-purple-500 mx-auto"> Images</h1>
     <div className="text-center"><small className='text-purple-200'>from <a className='mt-1 mb-1' href="https://pixabay.com/" target='blank'>pixabay</a></small></div>
     <div className="flex justify-center mt-1 mb-3">
     <Search setSearch={setSearch} />
     </div>
     {/* not found */}
     {!loading && images.length === 0 && <h1 className='text-5xl text-center mx-auto mt-32 text-blue-500'>
      <span role='img' aria-label='sorry'>🥺</span>
       No images found...
       </h1>}
       {/* loader  */}
    {loading ? <Loader /> : <Wrapper images={images} loading={loading} />} 
    </div>
  );
}

// Export
export default App;
