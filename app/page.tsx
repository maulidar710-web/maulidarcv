export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 font-sans">
      {/* Container / Card Utama CV */}
      <div className="w-full max-w-md bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-sm text-center flex flex-col items-center">
        {/* Avatar / Foto Profil dengan Ring Gradasi */}
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 p-[3px]">
            {/* Menggunakan tag <img> untuk memanggil fotomu */}
            <img
              src="/fotoaing1.jpeg"
              alt="Foto Profil Maulidar"
              className="w-full h-full rounded-full object-cover bg-slate-900"
            />
          </div>
        </div>

        <span className="text-[11px] font-semibold tracking-wider uppercase bg-purple-500/10 text-purple-300 border border-purple-500/20 px-3 py-1 rounded-full mb-3">
          Software Engineering Student 🚀
        </span>

        <h1 className="text-3xl font-extrabold tracking-tight mb-1 text-white">
          Maulidar
        </h1>
        <p className="text-xs text-indigo-400 font-medium mb-4">
          @maulidar • Tech Enthusiast
        </p>

        <p className="text-slate-300 text-sm mb-6 leading-relaxed">
          Eksplorasi pembuatan web, ngoding frontend, dan ngebikin tampilan
          interface jadi lebih estetik. Kadang error, tapi tetep dijalanin.
          Welcome to my digital space! ☕💻
        </p>

        <div className="grid grid-cols-2 gap-3 w-full mb-6 text-left">
          <div className="bg-slate-800/60 border border-slate-700/50 p-3 rounded-2xl">
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
              Major
            </p>
            <p className="text-xs font-semibold text-slate-200 mt-0.5">
              Pendidikan Teknologi Informasi
            </p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/50 p-3 rounded-2xl">
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
              Focus
            </p>
            <p className="text-xs font-semibold text-slate-200 mt-0.5">
              Web Dev / RPL
            </p>
          </div>
        </div>

        <div className="flex gap-3 w-full mb-6">
          <button className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-3 px-4 rounded-xl shadow-lg shadow-emerald-900/30 transition active:scale-95">
            Mulai Jelajah
          </button>
          <button className="flex-1 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold py-3 px-4 rounded-xl shadow-lg shadow-rose-900/30 transition active:scale-95">
            Malas euy 😴
          </button>
        </div>
      </div>
    </main>
  );
}
