import Image, { ImageProps } from "next/image"
import Link from "next/link"

export default function Cards({
  cardtitle,
  cardDescription,
  CardImageProps,
  websiteURL,
  githubURL
}: {
  cardtitle: string,
  cardDescription: string,
  CardImageProps: ImageProps,
  websiteURL: string,
  githubURL: string
}) {  
  return (
    <div className="flex flex-col h-full overflow-hidden bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
      <h1 className="text-2xl font-bold text-center p-4 text-gray-800">{cardtitle}</h1>
      
      <div className="relative w-full aspect-square">
        <Image 
          src={CardImageProps.src} 
          alt={CardImageProps.alt || "Project image"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <p className="text-base p-4 flex-grow text-center text-gray-600">{cardDescription}</p>
      
      <div className="flex justify-center gap-4 p-4">
        <Link 
          href={websiteURL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          View
        </Link>
        <Link 
          href={githubURL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
        >
          GitHub
        </Link>
      </div>
    </div>
  )
}