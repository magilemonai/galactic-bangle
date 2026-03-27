const EPISODE_LENGTH_SECONDS = 5 * 60;
const QUESTIONS_PER_SHOW = 10;

const questionSets = [
  [
    {
      prompt: "How do humans politely announce they are about to leave a party?",
      choices: [
        "They slap both knees and yell, 'Welp!'",
        "They hiss and vanish into fog",
        "They challenge the host to arm wrestling",
        "They fax their regrets from the bathroom"
      ]
    },
    {
      prompt: "Which Earth ritual is most confusing to an alien chef?",
      choices: [
        "Brunch that starts at noon and still has breakfast food",
        "Staring at an avocado until it's suddenly bad",
        "Apologizing to furniture after bumping into it",
        "Calling anything in a bowl a 'deconstructed salad'"
      ]
    },
    {
      prompt: "What do humans mean when they say 'I'm just gonna watch one episode' ?",
      choices: [
        "A legally binding oath to stay up all night",
        "A strategy for household energy conservation",
        "A sacred meditation with popcorn",
        "A polite way to cancel all social plans"
      ]
    },
    {
      prompt: "Why do Earthlings keep jars of mysterious cords?",
      choices: [
        "In case one cable from 2008 becomes destiny",
        "To build noodle sculptures",
        "As tribute for printer gods",
        "For annual cord migration season"
      ]
    },
    {
      prompt: "What is the true function of a hoodie pocket?",
      choices: [
        "Portable hand cave",
        "Emergency snack vault",
        "To hide from all responsibilities",
        "All of the above, probably"
      ]
    },
    {
      prompt: "When humans say 'five more minutes,' how long is that?",
      choices: [
        "Between 5 and 47 Earth minutes",
        "Exactly the time needed to panic",
        "One tiny nap plus a sequel",
        "Until someone sends a second text"
      ]
    },
    {
      prompt: "Which sound most summons every human in a house?",
      choices: [
        "The microwave beep",
        "A snack bag crinkling in secret",
        "The phrase 'who ordered pizza?'",
        "All of these at maximum volume"
      ]
    },
    {
      prompt: "What is humanity's preferred weather forecast?",
      choices: [
        "Comfy with a chance of snacks",
        "Dramatic storms viewed safely from indoors",
        "Exactly 72°F forever",
        "Anything except 'humid'"
      ]
    },
    {
      prompt: "How do humans choose a movie with friends?",
      choices: [
        "Debate for 45 minutes then rewatch a classic",
        "Use three apps and still fail",
        "Let the loudest person decide",
        "Start one, abandon it, repeat"
      ]
    },
    {
      prompt: "What does it mean when a human says 'I'll be there soon' ?",
      choices: [
        "They have not left yet",
        "They are spiritually en route",
        "They are looking for shoes",
        "Time has become theoretical"
      ]
    },
    {
      prompt: "How can you identify a human who just cleaned one room?",
      choices: [
        "They announce it to everyone nearby",
        "The rest of the house is now a storage zone",
        "They deserve a tiny reward snack",
        "All are correct in the sacred scrolls"
      ]
    },
    {
      prompt: "What is the relationship between humans and leftovers?",
      choices: [
        "Optimism now, uncertainty later",
        "A promise that becomes soup",
        "A time capsule in Tupperware",
        "An emotional support lunch"
      ]
    }
  ],
  [
    {
      prompt: "Why do humans own decorative pillows they cannot touch?",
      choices: [
        "To prove they have evolved beyond comfort",
        "To create tiny mountain ranges on beds",
        "Because guests might inspect pillow discipline",
        "It is an Earth puzzle with no winner"
      ]
    },
    {
      prompt: "What happens when two humans meet on a sidewalk?",
      choices: [
        "They perform the awkward mirror dance",
        "They exchange weather data",
        "They both whisper 'sorry' at once",
        "They briefly become traffic"
      ]
    },
    {
      prompt: "Why is a refrigerator opened repeatedly?",
      choices: [
        "To check if new snacks spawned",
        "For cold dramatic lighting",
        "To remember why they walked there",
        "All of these are scientifically likely"
      ]
    },
    {
      prompt: "How do humans react to receiving one (1) package?",
      choices: [
        "Instant detective mode",
        "They track the box for six days",
        "They yell 'it's here!' to no one",
        "They keep the box 'just in case'"
      ]
    },
    {
      prompt: "What is the purpose of saying 'wow, it's loud in here' ?",
      choices: [
        "To make the place louder somehow",
        "To begin a yelling conversation",
        "To unite everyone in confusion",
        "To defeat silence with facts"
      ]
    },
    {
      prompt: "Why do humans wave at cameras before ending a call?",
      choices: [
        "Ancient ritual courtesy",
        "To verify their hand still exists",
        "Because pressing 'leave' feels rude",
        "A final flourish for the algorithm"
      ]
    },
    {
      prompt: "What does 'I made coffee too strong' usually mean?",
      choices: [
        "Productivity is now inevitable",
        "The mug can see through time",
        "Hands are vibrating with purpose",
        "Tomorrow has been rescheduled"
      ]
    },
    {
      prompt: "How do humans prepare for a two-day trip?",
      choices: [
        "Pack as if weather can betray them",
        "Bring one mystery outfit for confidence",
        "Forget one critical charger",
        "All of the above, plus three snacks"
      ]
    },
    {
      prompt: "What is Earth's dominant small talk topic?",
      choices: [
        "Weather forecasts and potholes",
        "Traffic and mysterious construction",
        "How fast the week is moving",
        "Whether this line is moving"
      ]
    },
    {
      prompt: "What is the official human response to 'Are you free Friday?'",
      choices: [
        "'Let me check' (stares into distance)",
        "'Depends... socially or emotionally?'",
        "'Probably, unless naps happen'",
        "'Send details and I'll panic kindly'"
      ]
    },
    {
      prompt: "Why do humans keep 34 browser tabs open?",
      choices: [
        "Each tab represents a dream",
        "Closing one may collapse reality",
        "Research, recipes, and one random frog video",
        "To feel busy while choosing lunch"
      ]
    },
    {
      prompt: "What is a universal signal of household productivity?",
      choices: [
        "One machine humming somewhere",
        "Music playing while no one sits down",
        "A timer going off that nobody set",
        "A triumphant 'I did a thing!'"
      ]
    }
  ]
];

const alienReplies = [
  "Q'Razz: Intriguing! That answer has at least seven Earth vibes.",
  "Q'Razz: Correct-ish! Incorrectness is also correct on your planet.",
  "Q'Razz: Spectacular! I would grade that as 'emotionally accurate.'",
  "Q'Razz: My antennae agree with your confidence, not the facts.",
  "Q'Razz: Incredible! I cannot verify it, so you win by default.",
  "Q'Razz: Bold response. My research intern is just a houseplant, so... accepted!"
];

const introScene = document.querySelector("#intro-scene");
const questionScene = document.querySelector("#question-scene");
const finalScene = document.querySelector("#final-scene");
const startBtn = document.querySelector("#start-btn");
const nextBtn = document.querySelector("#next-btn");
const replayBtn = document.querySelector("#replay-btn");
const questionCounter = document.querySelector("#question-counter");
const zorpScore = document.querySelector("#zorp-score");
const showClock = document.querySelector("#show-clock");
const questionTitle = document.querySelector("#question-title");
const questionText = document.querySelector("#question-text");
const answers = document.querySelector("#answers");
const alienResponse = document.querySelector("#alien-response");
const finalScore = document.querySelector("#final-score");

let showState = {
  activeQuestions: [],
  currentIndex: 0,
  score: 0,
  timerId: null,
  secondsLeft: EPISODE_LENGTH_SECONDS,
  usedSets: []
};

function switchScene(target) {
  [introScene, questionScene, finalScene].forEach((scene) => {
    scene.classList.remove("active");
  });
  target.classList.add("active");
}

function getQuestionBlock() {
  const eligibleSetIndexes = questionSets
    .map((_, index) => index)
    .filter((index) => !showState.usedSets.includes(index));

  if (eligibleSetIndexes.length === 0) {
    showState.usedSets = [];
    return [...questionSets[Math.floor(Math.random() * questionSets.length)]];
  }

  const chosenSetIndex = eligibleSetIndexes[Math.floor(Math.random() * eligibleSetIndexes.length)];
  showState.usedSets.push(chosenSetIndex);
  return [...questionSets[chosenSetIndex]];
}

function randomize(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function setupShow() {
  const sourceQuestions = getQuestionBlock();

  showState.activeQuestions = randomize(sourceQuestions).slice(0, QUESTIONS_PER_SHOW);
  showState.currentIndex = 0;
  showState.score = 0;
  showState.secondsLeft = EPISODE_LENGTH_SECONDS;

  questionCounter.textContent = `Question 0 / ${QUESTIONS_PER_SHOW}`;
  zorpScore.textContent = "Zorp Credits: 0";
  alienResponse.textContent = "";
  nextBtn.classList.add("hidden");
  runClock();
}

function formatClock(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function runClock() {
  if (showState.timerId) {
    clearInterval(showState.timerId);
  }

  showClock.textContent = `Show Time: ${formatClock(showState.secondsLeft)}`;

  showState.timerId = setInterval(() => {
    showState.secondsLeft = Math.max(0, showState.secondsLeft - 1);
    showClock.textContent = `Show Time: ${formatClock(showState.secondsLeft)}`;

    if (showState.secondsLeft === 0) {
      clearInterval(showState.timerId);
      showState.timerId = null;
      finishShow();
    }
  }, 1000);
}

function buildAnswers(question) {
  answers.innerHTML = "";

  question.choices.forEach((choiceText) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.type = "button";
    button.textContent = choiceText;

    button.addEventListener("click", () => {
      const reply = alienReplies[Math.floor(Math.random() * alienReplies.length)];
      const gained = 42 + Math.floor(Math.random() * 90);

      showState.score += gained;
      zorpScore.textContent = `Zorp Credits: ${showState.score}`;
      alienResponse.textContent = `${reply} (+${gained} credits)`;

      Array.from(answers.children).forEach((child) => {
        child.disabled = true;
        child.classList.add("locked");
      });

      nextBtn.classList.remove("hidden");
    });

    answers.append(button);
  });
}

function showQuestion(index) {
  const question = showState.activeQuestions[index];

  questionCounter.textContent = `Question ${index + 1} / ${QUESTIONS_PER_SHOW}`;
  questionTitle.textContent = `Question ${index + 1}: Humanity Explained?`;
  questionText.textContent = question.prompt;
  nextBtn.classList.add("hidden");
  alienResponse.textContent = "Choose an answer. Q'Razz will definitely pretend it's correct.";

  buildAnswers(question);
}

function finishShow() {
  if (showState.timerId) {
    clearInterval(showState.timerId);
    showState.timerId = null;
  }

  finalScore.textContent = `Final tally: ${showState.score} Zorp Credits. You are now a Certified Blorginaire.`;
  questionCounter.textContent = `Question ${QUESTIONS_PER_SHOW} / ${QUESTIONS_PER_SHOW}`;
  switchScene(finalScene);
}

function startShow() {
  setupShow();
  switchScene(questionScene);
  showQuestion(showState.currentIndex);
}

startBtn.addEventListener("click", startShow);

nextBtn.addEventListener("click", () => {
  showState.currentIndex += 1;

  if (showState.currentIndex >= QUESTIONS_PER_SHOW) {
    finishShow();
    return;
  }

  showQuestion(showState.currentIndex);
});

replayBtn.addEventListener("click", startShow);
