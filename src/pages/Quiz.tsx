import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // tambahkan di atas


const questions = [
  {
    image: '/images/murder_scene1.png',
    timeout: 12,
    question: 'What object is closest to the victim\'s body?',
    options: ['Knife', 'Coffee', 'Newspaper', 'Phone'],
    correctAnswer: 'Knife',
    clue: 'The knife appears bloodstained and lies on the floor near the victim\'s right hand.',
  },
  {
    image: '/images/murder_scene2.png',
    timeout: 12,
    question: 'What is unusual about the chair at the dining table?',
    options: [
      'One chair is overturned',
      'There are no chairs',
      'The chair faces the wall',
      'Two chairs are stacked',
    ],
    correctAnswer: 'One chair is overturned',
    clue: 'There seems to have been a struggle. One of the chairs is knocked over.',
  },
  {
    image: '/images/murder_scene3.png',
    timeout: 12,
    question: 'What color is the clothing of the person standing at the back?',
    options: ['Black', 'White', 'Red', 'Gray'],
    correctAnswer: 'Red',
    clue: 'The person in red stands near the exit and appears anxious.',
  },
  {
    image: '/images/murder_scene4.png',
    timeout: 12,
    question: 'There is a note on the table. What word is written in blood?',
    options: ['RUN', 'HELP', 'SORRY', 'TRUTH'],
    correctAnswer: 'RUN',
    clue: 'A single word smeared in blood is barely visible on the torn paper: R...U...N.',
  },
  {
    image: '/images/murder_scene5.png',
    timeout: 12,
    question: 'Who is missing from the room now?',
    options: ['The man in red', 'The woman with the coffee', 'The victim\'s brother', 'The cleaner'],
    correctAnswer: 'The man in red',
    clue: 'The man in red was seen in earlier scenes... but now he\'s gone. Just before the police arrived.',
  }
];

const Quiz = () => {
  const [step, setStep] = useState<'observe' | 'question' | 'result'>('observe');
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [countdown, setCountdown] = useState(questions[0].timeout);
  const [score, setScore] = useState(0);

const navigate = useNavigate();

  const correctSoundRef = useRef<HTMLAudioElement | null>(null);
  const wrongSoundRef = useRef<HTMLAudioElement | null>(null);

  const current = questions[index];

  useEffect(() => {
    if (step === 'observe') {
      setCountdown(current.timeout);
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setStep('question');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [step, current]);

  const handleAnswer = (option: string) => {
    setSelected(option);
    const correct = option === current.correctAnswer;
    setIsCorrect(correct);
    if (correct) {
      setScore((prev) => prev + 10);
      correctSoundRef.current?.play();
    } else {
      wrongSoundRef.current?.play();
    }
    setStep('result');
  };

  const next = () => {
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setStep('observe');
      setSelected('');
      setIsCorrect(null);
    } else {
      localStorage.setItem('final_score', score.toString());
      navigate('/result');
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col items-center justify-center px-4 text-center relative overflow-hidden font-mono">
      {/* Horror atmosphere background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90"></div>
      
      {/* Blood splatter effects */}
      <div className="absolute top-10 left-10 w-6 h-6 bg-red-800 rounded-full opacity-30 blur-sm"></div>
      <div className="absolute top-32 right-20 w-3 h-3 bg-red-900 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-red-800 rounded-full opacity-25 blur-sm"></div>
      <div className="absolute bottom-40 right-16 w-2 h-2 bg-red-900 rounded-full opacity-35"></div>

      {/* Flickering light effect */}
      <div className="absolute inset-0 pointer-events-none animate-pulse opacity-5 bg-gradient-to-t from-transparent via-white to-transparent"></div>

      {/* Police tape header */}
      <div className="absolute top-0 left-0 w-full h-8 bg-yellow-400 text-black text-sm font-bold flex items-center justify-center transform -rotate-1 shadow-lg z-10">
        ⚠️ ACTIVE CRIME SCENE - FORENSIC INVESTIGATION IN PROGRESS ⚠️
      </div>

      <audio ref={correctSoundRef} src="/audio/correct.mp3" preload="auto" />
      <audio ref={wrongSoundRef} src="/audio/wrong.mp3" preload="auto" />

      <div className="relative z-20 max-w-4xl w-full">
        {step === 'observe' && (
          <div className="bg-gray-900/95 border-2 border-red-800 shadow-[0_0_60px_rgba(255,0,0,0.3)] backdrop-blur-sm p-6">
            {/* Evidence marker */}
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold border-2 border-white shadow-lg">
              {index + 1}
            </div>

            <div className="text-red-400 text-sm font-bold tracking-widest mb-2">
              ◼ EVIDENCE COLLECTION PHASE ◼
            </div>
            
            <p className="mb-6 text-xl text-gray-200 font-bold border-l-4 border-red-600 pl-4">
              CRIME SCENE {index + 1}/{questions.length}: MEMORIZE EVERY DETAIL
            </p>
            
            <div className="relative mb-6">
              <img 
                src={current.image} 
                alt="Crime scene evidence" 
                className="max-w-full max-h-[400px] rounded border-4 border-red-900 shadow-[0_0_30px_rgba(255,0,0,0.5)] mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300" 
              />
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 transform rotate-12">
                EVIDENCE
              </div>
            </div>

            <div className="bg-black/70 border-l-4 border-yellow-400 p-4 text-left">
              <div className="text-yellow-300 text-sm font-bold mb-2">
                ⚠️ CRITICAL WARNING ⚠️
              </div>
              <p className="text-yellow-200 text-sm">
                Evidence will be removed in <span className="text-red-400 font-bold text-lg animate-pulse">{countdown}</span> seconds. 
                <br />Study every detail. Lives depend on your observation.
              </p>
            </div>
          </div>
        )}

        {step === 'question' && (
          <div className="bg-gray-900/95 border-2 border-red-800 shadow-[0_0_60px_rgba(255,0,0,0.3)] backdrop-blur-sm p-6">
            <div className="text-red-400 text-sm font-bold tracking-widest mb-2">
              ◼ FORENSIC ANALYSIS ◼
            </div>
            
            <h2 className="text-2xl mb-6 text-white font-bold border-b-2 border-red-600 pb-2">
              {current.question}
            </h2>
            
            <div className="space-y-4">
              {current.options.map((opt, i) => (
                <button
                  key={opt}
                  className="block w-full py-4 px-6 bg-gray-800 border-2 border-gray-600 rounded text-left hover:bg-red-900 hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] font-bold text-gray-200 hover:text-white"
                  onClick={() => handleAnswer(opt)}
                >
                  <span className="text-red-400 font-bold mr-3">{String.fromCharCode(65 + i)}.</span>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'result' && (
          <div className="bg-gray-900/95 border-2 border-red-800 shadow-[0_0_60px_rgba(255,0,0,0.3)] backdrop-blur-sm p-6">
            <div className="text-red-400 text-sm font-bold tracking-widest mb-2">
              ◼ FORENSIC REPORT ◼
            </div>
            
            <div className={`text-3xl mb-6 font-bold ${isCorrect ? 'text-green-400' : 'text-red-500'}`}>
              {isCorrect ? '✅ EVIDENCE CONFIRMED' : '❌ ANALYSIS FAILED'}
            </div>
            
            <div className="bg-black/70 border-l-4 border-yellow-400 p-4 text-left mb-4">
              <p className="mb-2 text-gray-300">
                <span className="text-yellow-300 font-bold">Your Analysis:</span> 
                <span className="text-white font-bold ml-2">{selected}</span>
              </p>
              <p className="mb-2 text-gray-300">
                <span className="text-yellow-300 font-bold">Correct Evidence:</span> 
                <span className="text-green-400 font-bold ml-2">{current.correctAnswer}</span>
              </p>
            </div>

            <div className="bg-red-900/20 border-2 border-red-700 p-4 rounded mb-4">
              <div className="text-red-300 text-sm font-bold mb-2">
                🕵️ DETECTIVE'S NOTES:
              </div>
              <p className="text-red-200 italic">{current.clue}</p>
            </div>

            <div className="bg-green-900/20 border-2 border-green-700 p-3 rounded mb-6">
              <p className="text-green-300 font-bold text-lg">
                CASE PROGRESS: {score} POINTS
              </p>
            </div>

            <button
              className="w-full px-8 py-4 bg-red-700 hover:bg-red-800 border-2 border-red-600 rounded font-bold text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] uppercase tracking-wider"
              onClick={next}
            >
              {index + 1 === questions.length ? '🔍 FINAL INVESTIGATION REPORT' : '➤ NEXT CRIME SCENE'}
            </button>
          </div>
        )}
      </div>

      {/* Footer warning */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-yellow-400 text-black text-xs font-bold flex items-center justify-center transform rotate-1 shadow-lg z-10">
        ⚠️ CLASSIFIED INVESTIGATION - AUTHORIZED PERSONNEL ONLY ⚠️
      </div>
    </div>
  );
};

export default Quiz;