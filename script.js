// PRODUCTIVITY
let productivityEntries=[
    'Listening to ambient noises while working helps some people get things done faster.',
    'While multitasking may seem like a good idea, it can hurt effectiveness of the tasks you are doing.',
    'Move locations around your home if you need a change of location while working.',
    'If you tend to forget, write things down.',
    'Starting a task can sometimes be the hardest part.',
    'Try to minimize environmental distractions while working.',
    'Set intervals to take breaks, overworking can affect productivity.',
    'Some people work better if they have a set routine, or if they have time dedicated to work.',
    'Break down a larger task into multiple smaller tasks -- divide and conquer.',
    'Add important dates and deadlines to your calendar in advance.',
    '“Measure twice, cut once”',
    'Learn keyboard shortcuts to help become a power user.',
    'The Pomodoro Technique is a time management method, focused on working on a task for 25 minutes and then having a 5 minute break.',
    'If a task takes less than 5 minutes, try to get it out of the way.',
    'Tackle the hardest task first.',
    'Limit phone notifications.',
    'Recording yourself instead of initially typing something can be helpful.',
    'Work durings times of the day where you are productive, but keep it consistent.',
    'Unsubscribe from newsletters that you don’t read.',
    'Don’t overextend yourself.',
];

function displayProductivity() {
    let index=Math.floor(Math.random()*productivityEntries.length);
    let div=document.querySelector('#productivity');
    let productivity=`<div class="card">
    <p>${productivityEntries[index]}</p>
    </div>`;
    div.innerHTML=productivity;
}

// PHYSICAL HEALTH
let physicalEntries=[
    'Exercise with family.',
    'Stand up or walk around while you read and answer emails and other messages on your laptop or phone.',
    'Listen to music and dance.',
    'Try to do some exercise each day for at least 10 minutes.',
    'Do exercise while watching tv.',
    'Eat nutritious foods like fruits or vegetables.',
    'Stay hydrated, keep a refillable water bottle and drink it throughout the day.',
    'Take short active breaks during the day.',
    'Try to follow a video exercise routine or an online exercise class.',
    'Stand up as much as possible.',
    'Limit foods high in sodium, added sugar and saturated fat.',
    'Wash your hands thoroughly for at least 20 seconds.',
    'Maintain a low-carb, high-fat diet to sustain your energy throughout the day.',
];

function displayPhysical() {
    let index=Math.floor(Math.random()*physicalEntries.length);
    let div=document.querySelector('#physical');
    let physical=`<div class="card">
    <p>${physicalEntries[index]}</p>
    </div>`;
    div.innerHTML=physical;
}

//MENTAL Health

let mentalEntries = {
  "Write down your schedule for your day."
  "Reach out to a friend you haven’t spoken to in a while (conversation starters: what you’ve been doing in quarantine, how you’ve (re)designed your workspace, what you’re looking forward to once quarantine is over, have you picked up any new hobbies, etc.)"
  "Take a nap."
  "Log off of social media for the rest of the day (if your work permits)."
  "Schedule a movie night with friends or family."
  "Write down your thoughts in a journal."
  "Get dressed."
  "Block news channels on your devices and ask your friends to give you a quick debriefing."
  "Clean your work area."
  "Leave the house (while staying socially distant)."
  "Write down what you want to achieve today."
  "Give your friend a compliment."
  "Say no. Set boundaries."
  "Check in on friends and family."
  "Take some time for yourself."
  "Take in the present."
  "Stand up."
  "Close your eyes for 20 seconds."
  "Keep in touch with your friends and family."
  "Develop a work buddy system to keep yourselves accountable."
}

function displayMental() {
    let index=Math.floor(Math.random()*mentalEntries.length);
    let div=document.querySelector('#mental');
    let mental=`<div class="card">
    <p>${mentalEntries[index]}</p>
    </div>`;
    div.innerHTML=mental;
}