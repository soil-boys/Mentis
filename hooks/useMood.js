import { useState, useEffect } from "react";
import useDegrees from "./useDegrees";
import axios from 'axios'

const useMood = (degreeData) => {
    const [data, setData] = useState('Okay')

    const options = {
        method: 'POST',
        url: `http://192.168.43.4:3000/ai/mood`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            moodData: degreeData
        }
    }
    
    const fetchData = async () => {
        try {
            const res = await axios.request(options)
            console.log('Coming from AI:', res.data)
            setData(res.data)
        } catch (err) {
            console.log(err)
            setData('Okay')
        }
    }
    
    useEffect(() => {
        fetchData()
    })
    // useEffect(() => {
    //     fetchData()
    // }, [])

    // console.log(data)
    return data

}

export default useMood