import { useEffect } from "react"

const useTitle = title => {
  useEffect(()=> {
    document.title = `${title} BanglaShikho`
  },[title])
}

export default useTitle