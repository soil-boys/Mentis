const getGreeting = (hour) => {
    let greet
    if (hour >= 3 && hour < 12) greet = 'morning'
    else if (hour >= 12 && hour < 15) greet = 'afternoon'
    else if (hour >= 15 && hour < 20) greet = 'evening'
    else if (hour >= 20 || hour < 3) greet = 'night'
    else ''

    return greet
}

export default getGreeting