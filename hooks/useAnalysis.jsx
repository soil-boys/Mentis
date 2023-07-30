import { useEffect, useState } from "react";
import { analyzeData } from "../functions/Analytics";

const useAnalysis = () => {

    const [analysis, setAnalysis] = useState({
        week: { Happy: 0, Sad: 0, Okay: 0 },
        month: { Happy: 0, Sad: 0, Okay: 0 }
    })
    const [loadingAnalysis, setLoadingAnalysis] = useState(false)

    const fetchData = async () => {
        setLoadingAnalysis(true)

        try {
            const data = {
                week: {
                    Happy: await analyzeData('Happy'),
                    Sad: await analyzeData('Sad'),
                    Okay: await analyzeData('Okay')
                },
                month: {
                    Happy: await analyzeData('Happy', 'month'),
                    Sad: await analyzeData('Sad', 'month'),
                    Okay: await analyzeData('Okay', 'month')
                }
            }
            setAnalysis(analysis => ({
                ...analysis,
                ...data
            }))
            setLoadingAnalysis(false)
        } catch (err) {
            console.log(err)
        } finally {
            setLoadingAnalysis(false)
        }
    }


    useEffect(() => {
        fetchData()
    }, [])

    const refetchAnalysis = () => {
        setLoadingAnalysis(true)
        fetchData()
    }

    return { analysis, loadingAnalysis, refetchAnalysis }

}

export default useAnalysis