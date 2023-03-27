import Image from "next/image"
import Link from "next/link"

const links= [
{name: "Home", path: "/"},
{name: "Projects", path: "/projects"},
/* {name: "Blogs", path: "/blogs"}, */
{name: "Contact", path: "/contact"},
]

export default function Navigation(){
return(
    <div className="flex flex-col flex-wrap sm:flex-row justify-around items-center  bg-gray-900 text-white">
    <div className=" order-0">
    KvobjeSoft
    </div>
    {/* <Image src="/vercel.svg" width={80} height={100}/>   */}
    
    {links.map(link=>
     <Link key={link.name} href={link.path}>{link.name}{`  `}</Link>
    )}
    
    <div className=" order-1">
    <Image src="/KS2.png" width={80} height={80}/>
    </div>
    </div>
    
)

}