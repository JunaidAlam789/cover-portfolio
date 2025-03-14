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
              { image_props: { src:"/usrbin.png", height:200 ,width:200, alt:"blog"},
                    cardtitle:"USRBIN",
                     cardDescription: "Project Developed in Next.js 13 React and TailwindCSS",
                     websiteURL:"https://usrbin-6q7i.vercel.app/",
                     githubURL:"https://github.com/JunaidAlam789/usrbin",
                     
                },
                { image_props: { src:"/Blog.jpg", height:200 ,width:200, alt:"blog"},
                cardtitle:"Blog",
                 cardDescription: "Project Developed in Next.js 13 React TypeScript TailwindCSS & Contentful",
                 websiteURL:"https://contentful-blogs-next.vercel.app/",
                 githubURL:"https://github.com/JunaidAlam789/contentful_blogs_next",
                 
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
                 websiteURL:"https://allweatherconstructionco.netlify.app/",
                 githubURL:"https://github.com/JunaidAlam789/allweather",
                 
            },
            { image_props: { src:"/Blog.jpg", height:200 ,width:200, alt:"blog"},
                    cardtitle:"Blog",
                     cardDescription: "Project Developed in Next.js 13 React TypeScript TailwindCSS & Contentful",
                     websiteURL:"https://contentful-blogs-next.vercel.app/",
                     githubURL:"https://github.com/JunaidAlam789/contentful_blogs_next",
                     
                },
            
            ]


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
<div className=" bg-gray-900 text-gray-900">
<h1 className="text-2xl flex justify-center font-bold p-4">Projects</h1>
 
// Replace the existing grid div in projects.tsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-8 md:px-12 lg:px-16">
    {data.map((card, key) => (
        <div key={key}>
            <Cards 
                CardImageProps={card.image_props}
                cardtitle={card.cardtitle} 
                cardDescription={card.cardDescription} 
                websiteURL={card.websiteURL} 
                githubURL={card.githubURL}
            />
        </div>
    ))}
</div>
</div>

)

}