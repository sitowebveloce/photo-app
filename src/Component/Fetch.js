import axios from 'axios'

export async function Fetch(search, setImages, setLoading) {

    // DOCs https://pixabay.com/api/docs/

  let url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${search}&image_type=photo&pretty=true&orientation=horizontal&per_page=200`;
  
  try{
        let fetch = await axios(url);
        let res = await fetch.data;
        // console.log(res);
        // SET STATE
        setImages(res.hits);
        // Set loading false
        setLoading(false)
    }
    catch(error){
        axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      //console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
    }

}
