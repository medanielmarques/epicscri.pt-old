export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800">
      <div className="max-w-2xl w-full space-y-12 text-center">
        <h1 className="font-geist-sans text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
          epicscript
          <span className="block mt-4 text-2xl md:text-3xl font-normal text-neutral-700 dark:text-neutral-300">
            A new way of writing scripts for your videos
          </span>
        </h1>

        <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your best e-mail"
            className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-black/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-geist-sans shadow-sm"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-all duration-200 font-geist-sans font-medium shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </main>
  );
}
