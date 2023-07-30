import moment from "moment"
import { useEffect, useState } from "react"

const useGreeting = () => {

    const [greeting, setGreeting] = useState('')

    const greet = (hour) => {
        if (hour >= 3 && hour < 12) setGreeting('morning')
        else if (hour >= 12 && hour < 15) setGreeting('afternoon')
        else if (hour >= 15 && hour < 20) setGreeting('evening')
        else if (hour >= 20 || hour < 3) setGreeting('night')
    }

    useEffect(() => {
        greet(moment().format('HH'))
    }, [])

    return greeting

}

export default useGreeting