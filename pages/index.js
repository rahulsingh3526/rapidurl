
import styles from '@/styles/Home.module.css'

import { useState } from 'react';
export default function Home() {

	const [url, setUrl] = useState("")
	const [result, setResult] = useState("")

  const encodedParams = new URLSearchParams();
  encodedParams.append("url", url);


	const display =()=>{
		const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
			'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
		},
		body: encodedParams
	};
	
		fetch('https://url-shortener-service.p.rapidapi.com/shorten', options)
		.then(response => response.json())
		.then(response => setResult(response.result_url))
		.catch(err => console.error(err));
	}
	

  return (
    <>
   <main className={styles.main}>
   <input  type          ="text" 
	       placeholder   ='INPUT YOUR URL' 
		   onChange      ={(e)=> setUrl(e.target.value)}
	/>
    <button onClick ={display}>display</button>
   <a href={result} 
   target="_blank"
   rel = "norefferer">{result}</a>
	
	</main>
   
    </>
  )
}


