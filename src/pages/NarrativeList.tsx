import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Narrative {
  id: string;
  title: string;
  content: string;
}

const NarrativeCard = ({ narrative, onSelect }: { narrative: Narrative; onSelect: (id: string) => void }) => (
  <div
    className="bg-zinc-900/60 backdrop-blur-md border border-zinc-700 rounded-xl p-5 shadow-[0_0_25px_rgba(0,0,0,0.6)] transition hover:shadow-[0_0_40px_rgba(255,0,0,0.2)]"
  >
    <h3 className="text-xl font-semibold mb-2 text-red-200 tracking-wide">
      {narrative.title}
    </h3>
    <p className="text-sm text-zinc-300 mb-4 whitespace-pre-line line-clamp-3">
      {narrative.content}
    </p>
    <button
      onClick={() => onSelect(narrative.id)}
      className="bg-red-700 hover:bg-red-800 text-zinc-100 px-4 py-2 rounded-md font-medium transition shadow-md hover:shadow-red-500/40"
    >
      🔍 Mulai Kuis
    </button>
  </div>
);

const NarrativeList = () => {
  const [narratives, setNarratives] = useState<Narrative[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchNarratives = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/narratives/?_=${Date.now()}`);
      setNarratives(res.data);
    } catch (err) {
      console.error('❌ Gagal ambil narasi:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNarratives();
  }, []);

  const startQuiz = (id: string) => {
    navigate(`/quiz?narrative=${id}`);
  };

  if (loading) {
    return <p className="text-center text-zinc-300 mt-10">Memuat narasi...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-zinc-100 font-serif p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-red-100 tracking-wide drop-shadow-[0_0_8px_rgba(255,0,0,0.4)]">
        📖 Pilih Narasi Kuis
      </h2>

      <div className="max-w-3xl mx-auto grid gap-6">
        {narratives.map((item) => (
          <NarrativeCard key={item.id} narrative={item} onSelect={startQuiz} />
        ))}
      </div>
    </div>
  );
};

export default NarrativeList;
