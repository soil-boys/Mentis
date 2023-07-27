import { useEffect, useState } from "react";
import { getData } from "../functions/Storage";

const useDegrees = () => {

    const [data, setData] = useState([])

    const getDegrees = async () => {

        try {
            const moodData = await getData()
            if (!moodData || Object.keys(moodData)?.length < 1) setData([3])
    
            const degreeArray = Object.keys(moodData).map(key => moodData[key]).sort((a, b) => { a.timestamp < b.timestamp }).map(_ => _.degree)
            setData(degreeArray)
        } catch (err) {
            setData([3])
        }

    }

    useEffect(() => {
        getDegrees()
    }, [])

    return data

}

export default useDegrees