import axios from "axios";
import '../Context/Context.css'
import { createContext, useState,useEffect  } from "react";

export const  MyContext = createContext() ;

export const  MyProvader =({children})=>{
       const [togle,setTogle]=useState(false) 
       const [data,setData]=useState([])
       const [search, setSearch]= useState('')
   
       
  const url = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50';
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '13ec37b636mshe72e0a2d9db4295p14434djsn77cf9763ba12',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
  };
  
  
   
   async function geta() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result.items);
    } catch (error) {
      console.error(error);
    }
      
    };
    useEffect(() => {
      geta();
    }, []);

    return(
        <MyContext.Provider value={{togle,setTogle,data,setSearch,search}}>
            {children}
        </MyContext.Provider>
    )
}
