import Image from "next/image";


export const Heroes = () =>{
    return(
        <div className="flex flex-col items-center jus-center
        max-w-5xl">
            <div className=" flex items-center">
                <div className="relative w-[300px] h-[300px] 
                sm:w-[350px] sm:h-[350px] md:h-[400px] md:[400px]">
                    <Image
                        src="/documents.png"
                        alt="Document"
                        fill
                        className="object-contain dark:hidden"  
                    />
                    <Image
                        src="/documents-dark.png"
                        alt="Document"
                        fill
                        className="object-contain hidden dark:block"  
                    />
                </div>
                <div className="relative h-[400px] w-[400px] hidden md:block ">
                    <Image
                        src="/reading.png"
                        fill
                        className="object-contain dark:hidden"
                        alt="Reading"
                        
                    />
                    <Image
                        src="/reading-dark.png"
                        fill
                        className="object-contain hidden dark:block"
                        alt="Reading"
                        
                    />

                </div>

            </div>
        </div>
    )
}