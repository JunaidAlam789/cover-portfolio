"use client"
import Image from 'next/image'
import {useState} from 'react'
import Cards from './card'



const data = [{ image_props: { src:"/Metaverse_Main.jpg", height:200 ,width:200, alt:"blog"},
                    cardtitle:"Panaverse",
                     cardDescription: "Project Developed in Next.js 13 React and TailwindCSS",
                     websiteURL:"https://panaverse-site-tailwind.vercel.app/",
                     githubURL:"https://github.com/JunaidAlam789/panaverse_site_tailwind",
                     
                    },
              { image_props: { src:"/Construction.jpg", height:200 ,width:200, alt:"blog"},
                    cardtitle:"USRBIN",
                     cardDescription: "Project Developed in Next.js 13 React and TailwindCSS",
                     websiteURL:"https://usrbin-6q7i.vercel.app/",
                     githubURL:"https://github.com/JunaidAlam789/usrbin",
                     
                },
                { image_props: { src:"/Blog.jpg", height:200 ,width:200, alt:"blog"},
                cardtitle:"Blog",
                 cardDescription: "Project Developed in Next.js 13 React and TailwindCSS",
                 websiteURL:"https://mywebportal.kvobje.com",
                 githubURL:"https://github.com/JunaidAlam789",
                 
            },
            { image_props: { src:"/Table2.jpg", height:200 ,width:200, alt:"mathtables"},
                    cardtitle:"MathTable",
                     cardDescription: "Project Developed in Next.js 13 React and TailwindCSS",
                     websiteURL:"https://mathtablenextapp.vercel.app/",
                     githubURL:"https://github.com/JunaidAlam789/mathtablenextapp",
                     
                },
                { image_props: { src:"/Construction.jpg", height:200 ,width:200, alt:"construction"},
                cardtitle:"Construction",
                 cardDescription: "Project Developed in Next.js 13 React and TailwindCSS",
                 websiteURL:"https://mywebportal.kvobje.com",
                 githubURL:"https://github.com/JunaidAlam789",
                 
            },
            { image_props: { src:"/Blog.jpg", height:200 ,width:200, alt:"blog"},
                    cardtitle:"Blog",
                     cardDescription: "Project Developed in Next.js 13 React and TailwindCSS",
                     websiteURL:"https://mywebportal.kvobje.com",
                     githubURL:"https://github.com/JunaidAlam789",
                     
                },
            
            ]

//
//   These Cards are not required now ; but how to use useState it hide and show projects
//

/* const Card1=<Cards CardImageProps={data[0].image_props}
cardtitle={data[0].cardtitle} cardDescription={data[0].cardDescription} websiteURL={data[0].websiteURL} githubURL={data[0].githubURL}/>

const Card2=<Cards CardImageProps={{src:"/Construction.jpg" ,height:200, width:200 ,alt:"blog"}}
cardtitle="Construction" cardDescription={data[1].cardDescription} websiteURL={data[1].websiteURL} githubURL={data[1].githubURL}/>

const Card3=<Cards  CardImageProps={{src:"/Blog.jpg", height:200, width:200, alt:"blog"}}
cardtitle="Blogs" cardDescription="Card6 Porject in Next React Tailwind" websiteURL="https://mywebportal.kvobje.com" githubURL="https://github.com/JunaidAlam789"/>

const Card4=<Cards CardImageProps={{src:"/Blog.jpg" ,height:200, width:200 ,alt:"blog"}}
cardtitle="Blogs" cardDescription="Card6 Porject in Next React Tailwind" websiteURL="https://mywebportal.kvobje.com" githubURL="https://github.com/JunaidAlam789"/>

const Card5=<Cards CardImageProps={{src:"/Construction.jpg" ,height:200, width:200 ,alt:"blog"}}
cardtitle="FabricCraft" cardDescription="Card6 Porject in Next React Tailwind" websiteURL="https://mywebportal.kvobje.com" githubURL="https://github.com/JunaidAlam789"/>

const Card6=<Cards CardImageProps={{src:"/Construction.jpg" ,height:200, width:200 ,alt:"blog"}}
cardtitle="Construction" cardDescription="Card6 Porject in Next React Tailwind" websiteURL="https://mywebportal.kvobje.com" githubURL="https://github.com/JunaidAlam789"/>
 */
export default function Projects(){
  //  let [cards, setCards]=useState([Card1, Card2, Card3, Card4, Card5, Card6])
      let [cards, setCards]=useState([{ image_props: { src:"/Blog.jpg", height:200 ,width:200, alt:"blog"},
      cardtitle:"Blog",
       cardDescription: "Project Developed in Next.js 13 React and TailwindCSS",
       websiteURL:"https://mywebportal.kvobje.com",
       githubURL:"https://github.com/JunaidAlam789",
       
  },])
    
    function projectCards(){
        
        //setCards([Card1, Card2, Card3, Card4, Card5, Card6])
        setCards(data)
        //alert(card)
        }
    
return(
<div className=" bg-gray-100">
<h1 className="text-2xl flex justify-center">Projects</h1>
    {/* <button onClick={()=>{projectCards()}}>Projects</button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 m-8">
    {cards.map((card,key)=>{return (<div key={key}>
        {
        <Cards CardImageProps={card.image_props}
        cardtitle={card.cardtitle} cardDescription={card.cardDescription} websiteURL={card.websiteURL} githubURL={card.githubURL}/>
           
        }
        </div>)})}
         </div>  */}

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 m-8">
    {data.map((card,key)=>{return (<div key={key}>
        {
         <Cards CardImageProps={card.image_props}
         cardtitle={card.cardtitle} cardDescription={card.cardDescription} websiteURL={card.websiteURL} githubURL={card.githubURL}/>
            
        }
        
        </div>)})}
    
    </div>
</div>

)

}