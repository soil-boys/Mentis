import getDegrees from "../../utils/getDegrees"

const analyzeData = async (mood) => {

    const referrer = {
        Happy: [4, 5],
        Okay: [3],
        Sad: [1, 2]
    }

    const degreeData = await getDegrees()

    if (!degreeData || !degreeData?.length || degreeData?.length === 0) return 0

    const filtered = degreeData.filter(_ => referrer[mood].some(val => val === _))

    return filtered.length

}

export default analyzeData