function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-4xl md:text-6xl font-extrabold text-platinum drop-shadow-[2px_2px_8px_rgba(255,255,255,0.25)] mb-6">
        Unlock Your Potential. Lead Beyond Limits.
      </h2>
      <p className="text-gray-300 text-lg max-w-xl mb-8">
        The ultimate player leadership & development program for athletes of all levels — from rising amateurs to elite pros.
      </p>
      <a
        href="/products"
        className="bg-platinum text-black font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Explore Programs
      </a>
    </div>
  );
}

export default Home;
