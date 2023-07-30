import { useEffect, useState } from "react";
import getMood from "../utils/getMood";
import getFluctuations from "../utils/getFluctations";

const useData = () => {

    const [mood, setMood] = useState('Okay')
    const [loadingMood, setLoadingMood] = useState(false)

    const [fluctuations, setFluctuations] = useState(0)
    const [loadingFluctuations, setLoadingFluctuations] = useState(false)

    const fetchData = async () => {
        setLoadingMood(true)
        setLoadingFluctuations(true)
        
        try {
            const fluctuatedData = await getFluctuations()
            setFluctuations(fluctuatedData)
            setLoadingFluctuations(false)

            const moodData = await getMood()
            setMood(moodData)
            setLoadingMood(false)
        } catch (err) {
            console.log(err)
        } finally {
            setLoadingFluctuations(false)
            setLoadingMood(false)
        }
        
    }
    
    useEffect(() => {
        fetchData()
    }, [])
    
    const refetch = () => {
        setLoadingMood(true)
        setFluctuations(true)
        fetchData()
    }
    
    return { mood, loadingMood, fluctuations, loadingFluctuations, refetch }

}

export default useData