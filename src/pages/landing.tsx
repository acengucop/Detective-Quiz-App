import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const avatars = ['🐶', '🐱', '🐵', '🐸', '🐼', '🦊'];

const Landing = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (hasInteracted && audioRef.current) {
      audioRef.current.play().catch((e: unknown) => {
        console.warn('Autoplay error:', e);
      });
    }
  }, [hasInteracted]);

  const handleStart = () => {
    if (name.trim() && avatar) {
      localStorage.setItem('player_name', name.trim());
      localStorage.setItem('player_avatar', avatar);
      navigate('/quiz'); // Mengarahkan ke halaman Quiz.tsx
    }
  };

  const handleUserInteraction = () => {
    if (!hasInteracted) setHasInteracted(true);
  };

  return (
    <div
      className="min-h-screen w-full bg-black text-gray-200 font-mono flex items-center justify-center px-4 tracking-wide relative overflow-hidden"
      onClick={handleUserInteraction}
      onKeyDown={handleUserInteraction}
      onTouchStart={handleUserInteraction}
    >
      {/* Atmospheric background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-800 rounded-full opacity-40"></div>
        <div className="absolute bottom-32 right-16 w-1 h-1 bg-red-900 rounded-full opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-red-800 rounded-full opacity-30 blur-sm"></div>
      </div>

      {/* Police tape borders */}
      <div className="absolute top-0 left-0 w-full h-6 bg-yellow-400 text-black text-xs font-bold flex items-center justify-center transform -rotate-1 shadow-lg z-10">
        ⚠️ CRIME SCENE - DO NOT CROSS ⚠️ POLICE LINE - DO NOT CROSS ⚠️ CRIME SCENE - DO NOT CROSS ⚠️
      </div>
      <div className="absolute bottom-0 right-0 w-full h-6 bg-yellow-400 text-black text-xs font-bold flex items-center justify-center transform rotate-1 shadow-lg z-10">
        ⚠️ AUTHORIZED PERSONNEL ONLY ⚠️ POLICE LINE ⚠️ AUTHORIZED PERSONNEL ONLY ⚠️
      </div>

      {/* Flickering light effect */}
      <div className="absolute inset-0 pointer-events-none animate-pulse opacity-5 bg-gradient-to-t from-transparent via-white to-transparent"></div>

      <audio
        ref={audioRef}
        src="audio/creepy-caller.mp3"
        loop
        hidden
        preload="auto"
      />

      <div className="w-full max-w-md bg-gray-900/95 shadow-[0_0_80px_rgba(0,0,0,0.9)] border-2 border-gray-700 backdrop-blur-sm relative z-20">
        {/* Evidence marker */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white shadow-lg">
          1
        </div>

        {/* Case file header */}
        <div className="bg-gray-800 p-4 border-b-2 border-red-800">
          <div className="text-red-500 text-xs font-bold tracking-widest mb-1">
            ◼ CLASSIFIED CASE FILE ◼
          </div>
          <h1 className="text-3xl font-bold text-white tracking-wider drop-shadow-[0_0_10px_rgba(255,0,0,0.6)] font-mono">
            HOMICIDE INVESTIGATION
          </h1>
          <div className="text-gray-400 text-xs mt-1">
            Case No: 1995-SE7EN-001 | Classification: CONFIDENTIAL
          </div>
        </div>

        <div className="p-6">
          {/* Detective identification */}
          <div className="mb-6 border-l-4 border-red-600 pl-4">
            <label className="block text-gray-300 text-sm font-bold mb-2 uppercase tracking-wide">
              Detective Name:
            </label>
            <input
              type="text"
              placeholder="Enter your name..."
              className="w-full px-4 py-3 bg-black border-2 border-gray-600 text-green-400 placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-800/50 font-mono shadow-inner"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                handleUserInteraction();
              }}
            />
          </div>

          {/* Badge selection */}
          <div className="mb-6 border-l-4 border-red-600 pl-4">
            <p className="text-gray-300 text-sm font-bold mb-3 uppercase tracking-wide">
              Detective Badge:
            </p>
            <div className="grid grid-cols-3 gap-3">
              {avatars.map((a) => (
                <button
                  key={a}
                  className={`text-2xl p-3 border-2 transition-all duration-300 relative ${
                    avatar === a
                      ? 'bg-red-800 border-red-500 shadow-[0_0_20px_rgba(255,0,0,0.8)] scale-105'
                      : 'bg-gray-800 border-gray-600 hover:bg-gray-700 hover:border-red-700'
                  }`}
                  onClick={() => {
                    setAvatar(a);
                    handleUserInteraction();
                  }}
                >
                  {a}
                  {avatar === a && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-600 rounded-full border-2 border-white"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Forensic analysis button */}
          <button
            className="w-full bg-red-700 hover:bg-red-800 text-white py-4 px-6 font-bold transition duration-300 shadow-[0_0_20px_rgba(255,0,0,0.4)] disabled:opacity-30 disabled:cursor-not-allowed border-2 border-red-600 uppercase tracking-widest relative overflow-hidden"
            onClick={handleStart}
            disabled={!name.trim() || !avatar}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/20 to-transparent animate-pulse"></div>
            <span className="relative z-10">
              🔍 BEGIN FORENSIC ANALYSIS
            </span>
          </button>

          {/* Warning footer */}
          <div className="mt-4 p-3 bg-gray-800/50 border-l-4 border-yellow-400 text-yellow-300 text-xs">
            <strong>WARNING:</strong> This investigation contains disturbing content. 
            Viewer discretion is advised.
          </div>
        </div>

        {/* Evidence tags */}
        <div className="absolute -bottom-2 -left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 transform -rotate-12 shadow-lg">
          EVIDENCE
        </div>
        <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 transform rotate-12 shadow-lg">
          CONFIDENTIAL
        </div>
      </div>

      {/* Atmospheric text overlay */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-600 text-xs text-center font-mono">
        <div className="opacity-60">
          "What's in the box?"
        </div>
      </div>
    </div>
  );
};

export default Landing;