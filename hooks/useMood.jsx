import { useEffect, useState } from "react";
import getMood from "../utils/getMood";

const useMood = () => {

    const [mood, setMood] = useState('Okay')
    const [loadingMood, setLoadingMood] = useState(false)

    const fetchData = async () => {
        setLoadingMood(true)

        try {
            const data = await getMood()
            setMood(data)
            setLoadingMood(false)
        } catch (err) {
            console.log(err)
        } finally {
            setLoadingMood(false)
        }

    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetchMood = () => {
        setLoadingMood(true)
        fetchData()
    }

    return { mood, loadingMood, refetchMood }

}

export default useMood