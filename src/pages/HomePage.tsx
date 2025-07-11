// Crime Noir Detective Game Homepage

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col text-gray-100 bg-black font-['Courier_New'] scroll-smooth relative overflow-hidden">
      {/* Blood splatter background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-8 h-8 bg-red-900 rounded-full opacity-30 blur-sm"></div>
        <div className="absolute top-32 right-32 w-4 h-4 bg-red-800 rounded-full opacity-40"></div>
        <div className="absolute bottom-40 left-16 w-6 h-6 bg-red-900 rounded-full opacity-25 blur-sm"></div>
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-red-800 rounded-full opacity-35"></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-red-900 rounded-full opacity-20 blur-sm"></div>
      </div>

      {/* Flickering overlay for lighting effect */}
      <div className="absolute inset-0 pointer-events-none animate-pulse opacity-10 bg-gradient-to-b from-slate-700 to-transparent"></div>

      {/* Navbar */}
      <nav
        aria-label="Primary Navigation"
        className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b-2 border-red-900 shadow-lg shadow-red-900/20"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => window.location.href = '/'}
              className="text-2xl font-bold tracking-wide select-none font-['Courier_New'] text-red-500 drop-shadow-lg cursor-pointer bg-transparent border-none"
            >
              ◼ CRIME SCENE ◼
            </button>
            <ul className="flex space-x-8 text-lg font-medium">
              <li>
                <a
                  href="#home"
                  className="relative group py-2 px-1 hover:text-red-400 transition-colors duration-300 text-slate-300"
                >
                  CASE FILE
                  <span
                    aria-hidden="true"
                    className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-red-600 transition-all duration-300"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#game"
                  className="relative group py-2 px-1 hover:text-red-400 transition-colors duration-300 text-slate-300"
                >
                  EVIDENCE
                  <span
                    aria-hidden="true"
                    className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-red-600 transition-all duration-300"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="relative group py-2 px-1 hover:text-red-400 transition-colors duration-300 text-slate-300"
                >
                  AUTOPSY
                  <span
                    aria-hidden="true"
                    className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-red-600 transition-all duration-300"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main
        id="home"
        className="flex-grow flex flex-col justify-center items-center px-6 text-center py-20 max-w-5xl mx-auto relative"
      >
        {/* Crime scene tape effect */}
        <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400 text-black text-xs font-bold flex items-center justify-center transform -rotate-1 shadow-lg">
          ⚠️ CRIME SCENE - DO NOT CROSS ⚠️ POLICE LINE - DO NOT CROSS ⚠️
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-red-600 drop-shadow-2xl font-['Courier_New'] mb-4">
          MURDER INVESTIGATION
        </h1>
        <div className="text-xl text-red-400 font-bold tracking-widest mb-8 opacity-80">
          ◼ CLASSIFIED CASE FILE ◼
        </div>
        
        <p className="mt-8 max-w-3xl text-lg sm:text-xl text-slate-300 leading-relaxed border-l-4 border-red-800 pl-6 bg-slate-900/50 p-6 rounded shadow-xl">
          Tubuh ditemukan dalam kondisi mengerikan. Darah berceceran di seluruh ruangan. 
          Tidak ada saksi mata. Tidak ada petunjuk yang jelas. Hanya Anda yang dapat 
          mengungkap kebenaran di balik pembunuhan sadis ini. Setiap detik yang berlalu, 
          pembunuh semakin jauh dari jangkauan keadilan.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md">
          <button
            onClick={() => window.location.href = '/start'}
            role="button"
            className="w-full sm:w-auto px-8 py-4 bg-red-700 text-white font-semibold rounded-lg shadow-lg shadow-red-900/50 hover:bg-red-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-600 border-2 border-red-600 uppercase tracking-wide cursor-pointer"
          >
            ⚠️ ENTER CRIME SCENE
          </button>
          <a
            href="#about"
            role="button"
            className="w-full sm:w-auto px-8 py-4 border-2 border-slate-600 text-slate-300 font-semibold rounded-lg shadow-lg hover:bg-slate-800 hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-600 uppercase tracking-wide"
          >
            📋 CASE DETAILS
          </a>
        </div>
      </main>

      {/* Game Section */}
      <section
        id="game"
        aria-labelledby="game-title"
        className="max-w-5xl mx-auto px-6 py-20 text-slate-300 relative"
      >
        <div className="absolute top-0 right-0 w-full h-1 bg-yellow-400 text-black text-xs font-bold flex items-center justify-center transform rotate-1 shadow-lg">
          ⚠️ AUTHORIZED PERSONNEL ONLY ⚠️ POLICE LINE ⚠️
        </div>
        
        <h2
          id="game-title"
          className="text-4xl font-extrabold text-red-500 mb-8 text-center font-['Courier_New'] drop-shadow-lg"
        >
          ◼ EVIDENCE COLLECTION ◼
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-8 bg-slate-900/70 p-8 rounded-lg border-2 border-red-900/50 shadow-xl">
          <img
            src="https://storage.googleapis.com/a1aa/image/b6ee21b7-6e74-4d8a-a942-5ff59de97386.jpg"
            alt="Ilustrasi detektif di lorong gelap"
            className="rounded-lg shadow-lg w-full sm:w-1/2 object-cover border-2 border-red-800 opacity-80 hover:opacity-100 transition-opacity duration-300"
            width="400"
            height="300"
          />
          <div className="sm:w-1/2">
            <p className="text-lg leading-relaxed text-slate-300 mb-4">
              Dalam penyelidikan ini, Anda akan berperan sebagai detektif forensik yang harus 
              menganalisis bukti-bukti mengerikan di TKP. Setiap jejak darah, setiap sidik jari, 
              dan setiap petunjuk dapat mengungkap identitas pembunuh.
            </p>
            <div className="text-red-400 font-bold">
              ⚠️ PERINGATAN: Konten mengandung unsur kekerasan dan darah
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        aria-labelledby="about-title"
        className="max-w-5xl mx-auto px-6 py-20 text-slate-300 bg-slate-900/50 border-2 border-red-900/30 rounded-lg shadow-2xl relative"
      >
        <h2
          id="about-title"
          className="text-4xl font-extrabold text-red-500 mb-8 text-center font-['Courier_New'] drop-shadow-lg"
        >
          ◼ FORENSIC ANALYSIS ◼
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <div className="sm:w-1/2">
            <p className="text-lg leading-relaxed text-slate-300 mb-4">
              Permainan ini dirancang untuk membawa Anda ke dalam dunia gelap investigasi pembunuhan. 
              Setiap keputusan yang Anda ambil akan menentukan apakah keadilan akan ditegakkan atau 
              pembunuh akan lolos dari hukuman.
            </p>
            <div className="bg-red-900/20 p-4 rounded border-l-4 border-red-600 text-red-300">
              <strong>DISCLAIMER:</strong> Game ini mengandung tema pembunuhan, darah, dan kekerasan 
              yang mungkin tidak cocok untuk semua usia.
            </div>
          </div>
          <img
            src="https://storage.googleapis.com/a1aa/image/496e139b-25d8-44fd-fd15-21d6ad314d47.jpg"
            alt="Ilustrasi tim pengembang game"
            className="rounded-lg shadow-lg w-full sm:w-1/2 object-cover border-2 border-red-800 opacity-80 hover:opacity-100 transition-opacity duration-300"
            width="400"
            height="300"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 backdrop-blur-md border-t-2 border-red-900 text-slate-400 text-center py-6 mt-auto select-none shadow-lg shadow-red-900/20">
        <div className="text-xs text-red-500 mb-2">
          ◼ CLASSIFIED DOCUMENT ◼
        </div>
        <p className="text-sm">© 2024 Crime Scene Investigation Unit. All evidence is protected.</p>
      </footer>
    </div>
  );
};

export default HomePage;