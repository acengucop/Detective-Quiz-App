import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import HomePage from '../pages/HomePage';
import About from '../pages/About';     

import Landing from '../pages/landing';
import NarrativeList from '../pages/NarrativeList';
import Quiz from '../pages/Quiz';
import Result from '../pages/Result';
import SelectMode from '../pages/SelectMode';

const Router = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const tryPlay = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.5;
        audioRef.current.play().catch((e) => {
          console.warn('🔇 Gagal autoplay musik:', e);
        });
      }
    };

    window.addEventListener('click', tryPlay, { once: true });
    return () => window.removeEventListener('click', tryPlay);
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/creepy-caller.mp3"
        loop
        hidden
        preload="auto"
      />

      <Routes>
        <Route path="/" element={<HomePage />} /> {/* ⬅️ Halaman Awal Baru */}
        <Route path="/start" element={<Landing />} /> {/* ⬅️ Sebelumnya "/" */}
        <Route path="/select-mode" element={<SelectMode />} />
        <Route path="/narratives" element={<NarrativeList />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/about" element={<About />} /> {/* ⬅️ About */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default Router;
