import { EmailForm } from "@/components/EmailForm";

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

        <EmailForm />
      </div>
    </main>
  );
}
