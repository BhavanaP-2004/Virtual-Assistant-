let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");
let recognizedTextDiv = document.getElementById('recognized-text');

function speak(text,langCode = "en-US") 

{
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = langCode;
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
        recognizedTextDiv.textContent = "Good Morning Sir";
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon sir");
        recognizedTextDiv.textContent = "Good Afternoon sir";
    } else {
        speak("Good Evening sir");
        recognizedTextDiv.textContent = "Good Evening sir";
    }
}

window.addEventListener('load', () => {
    wishMe();
});

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;

    // Display the transcript in the 'recognized-text' div
    recognizedTextDiv.textContent = transcript;

    takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
});

function takeCommand(message) {
    btn.style.display = "block";
    voice.style.display = "none";
  
    if (message.includes("hello") || message.includes("hey")) {
      speak("Hello sir, what can I help you?");
      recognizedTextDiv.textContent = "Hello sir, what can I help you?";
    } else if (message.includes("who are you")) {
      speak("I am Shaba, created by the Shaba team.");
      recognizedTextDiv.textContent = "I am Shaba, created by the Shaba team.";
    } else if (message.includes("open youtube")) {
      speak("Opening YouTube...");
      window.open("https://www.youtube.com/", "_blank");
      recognizedTextDiv.textContent = "Opening YouTube...";
    } else if (message.includes("open google")) {
      speak("Opening Google...");
      window.open("https://www.google.com/", "_blank");
      recognizedTextDiv.textContent = "Opening Google...";
    } else if (message.includes("open facebook")) {
      speak("Opening Facebook...");
      window.open("https://www.facebook.com/", "_blank");
      recognizedTextDiv.textContent = "Opening Facebook...";
    } else if (message.includes("open instagram")) {
      speak("Opening Instagram...");
      window.open("https://www.instagram.com/", "_blank");
      recognizedTextDiv.textContent = "Opening Instagram...";
    } else if (message.includes("open calculator")) {
      speak("Opening calculator...");
      window.open("https://www.online-calculator.com/");
      recognizedTextDiv.textContent = "Opening calculator...";
    } else if (message.includes("open whatsapp")) {
      speak("Opening whatsapp...");
      window.open("https://www.whatsapp.com/","blank");
      recognizedTextDiv.textContent = "Opening whatsapp...";
    } else if (message.includes("time")) {
      let time=Date().toLocalstring(undefined,{hours:"numeric", minute:"numeric"});
      speak("time");
    } else if (message.includes("Date")) {
      let time=Date().toLocalstring(undefined,{hours:"numeric", minute:"numeric"});
      speak("time");
    }
    else {
      // Consider using a search engine API or library to improve search results
      speak("this is what i found on internet regarding" + message);
      window.open("https://www.google.com/search?q=" + message, "_blank");
      recognizedTextDiv.textContent = "Searching for: " + message;
    }
  }
