import { useState, useEffect } from "react";
import { graphing } from "../functions/Analytics";

const useGraphing = () => {

    const [graph, setGraph] = useState({ week: [], month: [] })
    const [loadingGraph, setLoadingGraph] = useState(false)

    const fetchData = async () => {
        setLoadingGraph(true)

        try {
            const data = {
                week: await graphing(),
                month: await graphing('month')
            }
            setGraph(graph => ({
                ...graph,
                ...data
            }))
            setLoadingGraph(false)
        } catch (err) {
            console.log(err)
        } finally {
            setLoadingGraph(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetchGraph = () => {
        setLoadingGraph(true)
        fetchData()
    }

    return { graph, loadingGraph, refetchGraph }

}

export default useGraphing