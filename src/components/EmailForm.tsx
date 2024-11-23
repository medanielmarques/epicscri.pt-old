"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitEmail } from "@/app/actions/email";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-all duration-200 font-geist-sans font-medium shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 disabled:opacity-50"
    >
      {pending ? "Joining..." : "Join the waitlist"}
    </button>
  );
}

export function EmailForm() {
  const [state, formAction] = useActionState(
    (state: any, formData: FormData) => submitEmail(formData),
    null
  );

  return (
    <form
      action={formAction}
      className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
    >
      <input
        name="email"
        type="email"
        placeholder="Your best e-mail"
        className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-black/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-geist-sans shadow-sm"
        required
      />
      <SubmitButton />
      {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
    </form>
  );
}
