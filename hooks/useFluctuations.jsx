import { useEffect, useState } from "react";
import getFluctuations from "../utils/getFluctations";

const useFluctuations = () => {

    const [fluctuations, setFluctuations] = useState(0)
    const [loadingFluctuations, setLoadingFluctuations] = useState(false)

    const fetchData = async () => {
        setLoadingFluctuations(true)

        try {
            const data = await getFluctuations()
            setFluctuations(data)
            setLoadingFluctuations(false)
        } catch (err) {
            console.log(err)
        } finally {
            setLoadingFluctuations(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetchFluctuations = () => {
        setLoadingFluctuations(true)
        fetchData()
    }

    return { fluctuations, loadingFluctuations, refetchFluctuations }

}

export default useFluctuations