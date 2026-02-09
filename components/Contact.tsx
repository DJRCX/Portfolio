"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="contact" className="container mx-auto px-4 py-12">
      <h2 className="font-heading mb-8 text-3xl font-bold text-center text-nord-9">
        Get in Touch
      </h2>
      <div className="mx-auto max-w-2xl rounded-xl border border-nord-4 bg-nord-5 p-6 md:p-8">
        <h3 className="font-heading mb-6 text-xl font-bold text-nord-0">
          Send a Message
        </h3>
        {submitted ? (
          <p className="font-body text-nord-2 text-center py-10">
            Thank you for your message! I will get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="font-body mb-2 block text-nord-0"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-nord-4 bg-nord-6 p-3 font-body text-nord-0 outline-none transition-colors focus:border-nord-9"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-body mb-2 block text-nord-0"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-nord-4 bg-nord-6 p-3 font-body text-nord-0 outline-none transition-colors focus:border-nord-9"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="font-body mb-2 block text-nord-0"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-nord-4 bg-nord-6 p-3 font-body text-nord-0 outline-none transition-colors focus:border-nord-9"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-nord-9 px-6 py-3 font-body text-nord-6 transition-colors hover:bg-nord-10"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
