const responses = {
    Bad: [
        "Sorry to hear that.",
        "Hope things get better soon.",
        "Keep your head up!",
        "Tomorrow is a new day.",
        "Sending positive vibes your way.",
        "You're not alone in this.",
        "Stay strong and keep going.",
        "We're here for you.",
        "Remember, this too shall pass.",
        "Sending you strength and love.",
        "You are stronger than you realize.",
        "Believe in your resilience.",
        "Take small steps to recovery.",
        "Lean on friends and family.",
        "You've overcome challenges before.",
        "The sun will shine again.",
        "Your journey is worth it.",
        "You're not defined by bad days.",
        "There's growth in difficult times.",
    ],
    Sad: [
        "I'm here for you.",
        "Take your time to heal.",
        "It's okay to feel down.",
        "You're not alone in this.",
        "Sending you a virtual hug.",
        "I wish I could do more.",
        "Remember, you're stronger than you know.",
        "Sending healing thoughts your way.",
        "Better days are ahead.",
        "You have a support system here.",
        "Your emotions are valid.",
        "Take time for self-care.",
        "Talking helps in healing.",
        "You're not alone in this battle.",
        "Strength comes from vulnerability.",
        "Each day is a step forward.",
        "The world needs your light.",
        "You're worthy of love and care.",
        "Your feelings will guide you.",
    ],
    Okay: [
        "Hang in there.",
        "You got this!",
        "Things will improve.",
        "Take care of yourself.",
        "Keep pushing forward.",
        "Believe in yourself.",
        "One step at a time.",
        "Stay positive and keep moving.",
        "This too shall pass.",
        "You're on the right track.",
        "Celebrate your small victories.",
        "Your journey matters.",
        "You're making progress.",
        "Every day is a fresh start.",
        "You have the strength within.",
        "Your resilience is admirable.",
        "Perseverance leads to growth.",
        "Your potential is limitless.",
        "Embrace the process of change.",
    ],
    Good: [
        "Glad you're happy today.",
        "Keep spreading positivity!",
        "You deserve all the happiness.",
        "Wishing you more joy ahead.",
        "May your day be filled with smiles.",
        "Happiness looks great on you.",
        "You make the world brighter.",
        "Enjoy every moment to the fullest.",
        "You're radiating positivity.",
        "Your happiness is contagious.",
        "Share your positive energy.",
        "The world needs more smiles.",
        "Kindness multiplies happiness.",
        "You're a beacon of light.",
        "Your positivity inspires others.",
        "The world is better with you.",
        "Spread joy wherever you go.",
        "Your happiness is empowering.",
        "Keep shining and uplifting others.",
    ],
};


const getResponse = (mood) => {
    if (!mood || mood === '' || typeof mood !== 'string') return rull
    const randomIndex = Math.floor(Math.random() * 20);
    const moodResponses = responses[mood];
    return moodResponses[randomIndex];
};

export default getResponse