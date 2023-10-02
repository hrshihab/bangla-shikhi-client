import { useEffect } from "react"

const useTitle = title => {
  useEffect(()=> {
    document.title = ` BanglaShikho ${title}`
  },[title])
}

export default useTitle