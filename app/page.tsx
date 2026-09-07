import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <header className="mx-auto flex max-w-7xl items-center justify-between">
        
        <h1 className="text-4xl font-sans font-bold text-black">Pokédex</h1>

        <button className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700">Buscar</button>

      </header>

      <section className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Pokémon */}
        <h1 className="text-black">Pokémon 1</h1>
      </section>

      <footer className="mx-auto max-w-7xl flex justify-between mt-3">
        <button className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700">Anterior</button>
        <button className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700">Próximo</button>
      </footer>

    </main>
  );
}
