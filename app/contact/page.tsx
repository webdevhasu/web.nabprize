"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-peach-100 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            Questions, feedback, or issues? We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="bg-white py-section">
        <div className="section-container max-w-xl">
          {submitted ? (
            <div className="card text-center py-12">
              <div className="w-16 h-16 mx-auto bg-success/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-success"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-navy mb-3">
                Message Sent!
              </h2>
              <p className="text-warm-gray">
                Thanks for reaching out. We&apos;ll get back to you within 24–48
                hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-navy mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-card focus:outline-none focus:ring-2 focus:ring-purple/40 focus:border-purple transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-navy mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-card focus:outline-none focus:ring-2 focus:ring-purple/40 focus:border-purple transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-navy mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-card focus:outline-none focus:ring-2 focus:ring-purple/40 focus:border-purple transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-navy mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-card focus:outline-none focus:ring-2 focus:ring-purple/40 focus:border-purple transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          )}

          <div className="mt-12 text-center">
            <p className="text-warm-gray text-sm">
              Or email us directly at{" "}
              <a
                href="mailto:support@nabprize.com"
                className="text-purple font-medium hover:text-purple-dark transition-colors"
              >
                support@nabprize.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
