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
    ]
};

const getResponse = (mood) => {
    const moodResponses = responses[mood];
    const randomIndex = Math.floor(Math.random() * moodResponses.length);
    return moodResponses[randomIndex];
};

export default getResponse