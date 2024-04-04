import { useState, useEffect } from "react";

export default function useFetch(url){
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);




    useEffect(() => {
const abourtCont =  new AbortController();

        setTimeout(() => {
          fetch(url, {signal: abourtCont.signal})
            .then((res) => {
              if (!res.ok) {
                throw Error("Could not fecth the data");
              }
              return res.json();
            })
            // console.log('hello')

            .then((data) => {
              setIsPending(false);
              setData(data);
            })
            .catch((err) => {

              if(err.name === "AbortError"){
                console.log(' fetch aborted')
              }else{
                setError(err.message);
                setIsPending(false);
              }
              
    
            });
        }, 1000);


        return ()=> abourtCont.abort()
      }, [url]);
      return { data, isPending, error};
}

