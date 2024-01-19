import { useEffect, useState } from "react"



export const useScrollTop  = (thershold=10) => {
const [scrolled,setScrolled]=useState(false)

useEffect(() => {
    const handleScroll =()=>{
        if(window.scrollY>10){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    }
    window.addEventListener("scroll",handleScroll)
    return () =>window.removeEventListener("scroll",handleScroll)
    }, [thershold]);
    return scrolled
}
