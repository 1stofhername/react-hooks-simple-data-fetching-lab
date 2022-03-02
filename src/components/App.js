import React, { useEffect, useState } from "react";

function App (){
    const[isLoaded, setIsLoaded] = useState(false);
    const [randomImg, setRandomImg] = useState("");
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res=>res.json())
        .then(data=>{setRandomImg(data.message);setIsLoaded(!isLoaded);
        });
    }, []); if(!isLoaded) return <p>Loading...</p>
    return <img src={randomImg} alt="A Random Dog" />
}

export default App