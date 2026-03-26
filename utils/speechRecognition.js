import { useState } from "react";

export default function SpeechRecognitionComponent({ onText }) {

  const [listening, setListening] = useState(false);

  const startListening = () => {

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "sw-KE"; // Swahili Kenya
    recognition.interimResults = false;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event) => {

      const transcript = event.results[0][0].transcript;

      console.log("Voice Text:", transcript);

      if (onText) {
        onText(transcript);
      }
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  return (
    <button onClick={startListening}>
      {listening ? "Listening..." : "🎤 Speak Symptoms"}
    </button>
  );
}