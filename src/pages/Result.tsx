import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem('final_score');
    if (saved) {
      setScore(parseInt(saved));
    } else {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900 text-white flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Crime Scene Tape */}
      <div className="absolute top-0 left-0 w-full h-16 bg-yellow-400 transform -rotate-3 flex items-center justify-center">
        <div className="text-black font-bold text-sm tracking-widest repeat-infinite">
          ⚠️ CRIME SCENE - DO NOT CROSS ⚠️ CRIME SCENE - DO NOT CROSS ⚠️ CRIME SCENE - DO NOT CROSS ⚠️
        </div>
      </div>

      {/* Blood Splatter Effects */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-red-800 rounded-full opacity-80"></div>
      <div className="absolute top-32 right-16 w-6 h-6 bg-red-900 rounded-full opacity-70"></div>
      <div className="absolute bottom-40 left-20 w-4 h-12 bg-red-800 opacity-60 transform rotate-45"></div>
      <div className="absolute top-40 right-32 w-12 h-4 bg-red-900 opacity-50 transform -rotate-12"></div>
      <div className="absolute bottom-60 right-12 w-10 h-10 bg-red-800 rounded-full opacity-40"></div>

      {/* Flickering Light Effect */}
      <div className="absolute inset-0 bg-white opacity-5 animate-pulse"></div>

      {/* Main Content */}
      <div className="relative z-10 bg-black bg-opacity-80 p-12 rounded-lg border-2 border-red-800 shadow-2xl shadow-red-900/50">
        <h1 className="text-4xl mb-6 font-bold text-red-400 drop-shadow-lg animate-pulse">
          🔍 INVESTIGASI SELESAI
        </h1>

        <div className="mb-8">
          <p className="text-xl mb-2 text-gray-300 font-semibold">TINGKAT DETEKTIF ANDA:</p>
          <div className="relative">
            <p className="text-5xl font-bold mb-6 text-yellow-300 drop-shadow-glow animate-pulse">
              {score} POIN
            </p>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-700 rounded-full opacity-70"></div>
          </div>
        </div>

        {/* Investigation Status */}
        <div className="mb-8 p-4 bg-red-900 bg-opacity-30 border border-red-700 rounded">
          <p className="text-red-200 text-lg font-semibold">
            {score >= 80
              ? "🕵️ DETEKTIF MASTER - KASUS TERPECAHKAN"
              : score >= 60
              ? "🔍 INVESTIGATOR HANDAL - JEJAK DITEMUKAN"
              : score >= 40
              ? "🚨 DETEKTIF PEMULA - MASIH ADA PETUNJUK"
              : "💀 KORBAN BERIKUTNYA - PEMBUNUH MASIH BEBAS"}
          </p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="bg-red-800 hover:bg-red-900 px-8 py-4 rounded-lg font-bold text-lg border-2 border-red-600 shadow-lg hover:shadow-red-900/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          🔄 MULAI INVESTIGASI BARU
        </button>
      </div>

      {/* Bottom Crime Scene Tape */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-yellow-400 transform rotate-2 flex items-center justify-center">
        <div className="text-black font-bold text-sm tracking-widest">
          ⚠️ POLICE LINE - DO NOT CROSS ⚠️ POLICE LINE - DO NOT CROSS ⚠️ POLICE LINE - DO NOT CROSS ⚠️
        </div>
      </div>

      {/* Additional Atmospheric Elements */}
      <div className="absolute top-1/4 left-1/4 text-red-900 text-6xl opacity-10 transform -rotate-12">💀</div>
      <div className="absolute bottom-1/4 right-1/4 text-red-800 text-4xl opacity-20 transform rotate-45">🔪</div>
      <div className="absolute top-1/3 right-1/3 text-yellow-600 text-3xl opacity-15">🕯️</div>

      {/* Vintage Photo Frame Effect */}
      <div className="absolute top-16 left-8 w-20 h-16 border-4 border-yellow-800 bg-yellow-100 opacity-20 transform -rotate-12"></div>
      <div className="absolute bottom-32 right-8 w-16 h-20 border-4 border-yellow-800 bg-yellow-100 opacity-15 transform rotate-6"></div>
    </div>
  );
};

export default Result;
