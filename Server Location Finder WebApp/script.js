const input=document.querySelector("#input")
	const output=document.querySelector("#output")
	const btn=document.querySelector("#btn")

	btn.addEventListener("click",async()=>{

     try{

     	let api=`https://ipinfo.io/${input.value}/json`
     	let response=await fetch(api)
     	let data=await response.json()
     	console.log(data)
     	output.innerText=`Paste This Value To GoogleMap To Get Location\n${data.loc}\nCity:${data.city}\nRegion:${data.region}`
     }catch(error){
     	output.innerText="Error Occured"
     }

    })