import Image, { ImageProps } from "next/image"
import { JsxElement } from "typescript"

 export function CardImage(){
   return(
    <Image src="/Fabric.jpg" height={200} width={200} alt="blog"/>
    
   ) 
} 
 
 //export default function Card(cardtitle: string, cardDesc: string, cardImage: ImageProps  ){
    export default function Cards({cardtitle ,cardDescription , CardImageProps, websiteURL, githubURL}: {cardtitle: string, cardDescription: string, CardImageProps: ImageProps, websiteURL: string, githubURL: string}){  
    return (
        <div className="flex flex-col justify-around  items-center bg-white rounded-lg">
<h1 className=" text-2xl bold m-4">{cardtitle}</h1>
{/* <Image src="/Construction.jpg" height={200} width={200} alt="blog"/> */}
 <Image src={CardImageProps.src} height={CardImageProps.height} width={CardImageProps.width} alt={CardImageProps.alt}/> 
<p className=" text-base  m-4  w-56 text-center">{cardDescription}</p>
<div className="flex flex-between">
<button className=" w-20 px-2 m-4 border-2 bg-gray-400 rounded-lg"><a href={websiteURL}>View</a></button>
<button className=" w-20 px-2 m-4 border-2 bg-gray-400 rounded-lg"><a href={githubURL}>GitHub</a></button>
</div>
</div>
        
    )
}

/* export default function Card(){
    return(
        <div className="flex flex-col items-center border-2">
<h1 className="">Card6</h1>
<Image src="/Construction.jpg" height={200} width={200} alt="blog"/>
<p>Card6 Project Description</p>
<button className=" w-20 px-2 mx-2 border-2 bg-gray-400 rounded-lg">View</button>
<button className=" w-20 px-2 mx-2 border-2 bg-gray-400 rounded-lg">GitHub</button>
</div>
    )
} */