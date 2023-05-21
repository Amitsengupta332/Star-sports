import { useEffect } from "react";

 

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Star-Sports-${title}`
    },[title])
}

export default useTitle;