import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectMode = () => {
  const [playerName, setPlayerName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem('player_name');
    if (!name) {
      navigate('/');
    } else {
      setPlayerName(name);
    }
  }, [navigate]);

  const handleSelect = () => {
    localStorage.setItem('game_mode', 'quick');
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-zinc-900 to-black text-zinc-100 font-serif flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900/70 shadow-[0_0_60px_rgba(0,0,0,0.7)] rounded-2xl p-6 border border-zinc-700 backdrop-blur-md text-center">
        <h1 className="text-3xl font-bold text-red-100 mb-4 tracking-wider drop-shadow-[0_0_8px_rgba(255,0,0,0.4)]">
          Selamat datang, {playerName}! 🕵️
        </h1>
        <p className="text-zinc-300 mb-8">Klik untuk memulai analisa gambar:</p>

        <button
          onClick={handleSelect}
          className="w-full py-3 px-6 rounded-md bg-zinc-700 hover:bg-zinc-600 text-white font-semibold transition duration-300 border border-zinc-600"
        >
          Analisa Gambar
        </button>
      </div>
    </div>
  );
};

export default SelectMode;
