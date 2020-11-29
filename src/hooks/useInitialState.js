import {useState, useEffect} from 'react'

const useInitialState = API => {
    const [videos, setVideos] = useState({mylist: [], trends: [], originals: []});
    useEffect(() => {
        fetch(API)
            // .then(response => console.log(response.json()))
            .then(response => response.json())
            .then(data => setVideos(data))
        // .then(data => console.log(data))
    }, []
    );

    return videos;
}


export default useInitialState;