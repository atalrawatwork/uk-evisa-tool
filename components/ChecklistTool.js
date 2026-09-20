"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import { QUESTIONS, buildChecklist } from "@/lib/checklist";
import { SITE } from "@/lib/site";

const ALERT_STYLES = {
  warning: "border-amber-500 bg-amber-50 text-amber-950",
  info: "border-navy-600 bg-navy-50 text-navy-950",
};

export default function ChecklistTool() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [done, setDone] = useState({});
  const headingRef = useRef(null);

  const answeredCount = QUESTIONS.filter((q) => answers[q.id]).length;
  const ready = answeredCount === QUESTIONS.length;

  // Move keyboard/screen-reader focus to the result when it appears.
  useEffect(() => {
    if (result) headingRef.current?.focus();
  }, [result]);

  function choose(id, value) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setResult(null); // an old checklist would no longer match the answers
    setDone({});
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!ready) return;
    setResult({
      ...buildChecklist(answers),
      generatedOn: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
    });
    setDone({});
  }

  function reset() {
    setAnswers({});
    setResult(null);
    setDone({});
  }

  function toggle(id) {
    setDone((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const completed = result ? result.steps.filter((s) => done[s.id]).length : 0;

  return (
    <div id="tool" className="scroll-mt-6">
      {/* ---------- Questionnaire ---------- */}
      <form
        onSubmit={handleSubmit}
        aria-labelledby="tool-title"
        className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm print:hidden"
      >
        <div className="bg-navy-900 px-5 py-4 text-white sm:px-6">
          <h2 id="tool-title" className="font-serif text-xl font-semibold">
            BRP to eVisa checklist tool
          </h2>
          <p className="mt-1 text-sm text-navy-100">
            {answeredCount} of {QUESTIONS.length} questions answered
          </p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/20" aria-hidden="true">
            <div
              className="h-full bg-white transition-[width] duration-300"
              style={{ width: `${(answeredCount / QUESTIONS.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="space-y-8 px-5 py-6 sm:px-6">
          {QUESTIONS.map((q, index) => (
            <fieldset key={q.id} className="min-w-0">
              <legend className="font-serif text-lg font-semibold text-navy-900">
                {index + 1}. {q.legend}
              </legend>
              {q.hint && <p className="mt-1 text-sm text-slate-600">{q.hint}</p>}

              <div className={`mt-3 grid gap-2 ${q.options.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
                {q.options.map((option) => (
                  <label
                    key={option.value}
                    className="group relative flex cursor-pointer flex-col rounded-md border border-slate-300 bg-white p-3 pr-9 text-sm transition-colors hover:border-navy-500 has-[:checked]:border-navy-700 has-[:checked]:bg-navy-50 has-[:checked]:ring-1 has-[:checked]:ring-navy-700 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-navy-500"
                  >
                    <input
                      type="radio"
                      name={q.id}
                      value={option.value}
                      checked={answers[q.id] === option.value}
                      onChange={() => choose(q.id, option.value)}
                      className="sr-only"
                    />
                    <span className="font-semibold text-navy-900">{option.label}</span>
                    {option.help && <span className="mt-1 text-slate-600">{option.help}</span>}
                    <span
                      aria-hidden="true"
                      className="absolute right-2.5 top-2.5 hidden h-5 w-5 items-center justify-center rounded-full bg-navy-700 text-xs text-white group-has-[:checked]:flex"
                    >
                      ✓
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          ))}

          <div className="flex flex-wrap items-center gap-3 border-t border-slate-200 pt-5">
            <button
              type="submit"
              disabled={!ready}
              className="rounded-md bg-navy-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-900 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600"
            >
              Generate checklist
            </button>
            <button
              type="button"
              onClick={reset}
              className="rounded-md px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Clear answers
            </button>
            {!ready && <p className="text-sm text-slate-600">Answer all three questions to continue.</p>}
          </div>
        </div>
      </form>

      {/* ---------- Result ---------- */}
      {result && (
        <section aria-labelledby="result-title" className="print-links mt-6 rounded-lg border border-slate-200 bg-white shadow-sm print:mt-0 print:border-0 print:shadow-none">
          <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
            <p className="hidden text-sm text-slate-600 print:block">
              {SITE.name} · {SITE.url} · Generated on {result.generatedOn}
            </p>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h2
                id="result-title"
                ref={headingRef}
                tabIndex={-1}
                className="font-serif text-2xl font-semibold text-navy-900 outline-none"
              >
                Your personalised checklist
              </h2>
              <div className="flex gap-2 print:hidden">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="rounded-md border border-navy-700 px-4 py-2 text-sm font-semibold text-navy-800 hover:bg-navy-50"
                >
                  Print checklist
                </button>
              </div>
            </div>

            <dl className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-[auto_1fr]">
              {result.summary.map((row) => (
                <div key={row.question} className="contents">
                  <dt className="text-slate-600">{row.question}</dt>
                  <dd className="font-semibold text-navy-900">{row.answer}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-4 px-5 py-6 sm:px-6">
            {result.alerts.map((alert) => (
              <div key={alert.title} role="note" className={`rounded-md border-l-4 p-4 ${ALERT_STYLES[alert.tone]}`}>
                <p className="font-semibold">{alert.title}</p>
                <p className="mt-1 text-sm leading-6">{alert.text}</p>
              </div>
            ))}

            {/* <!-- ADSENSE BANNER PLACEMENT --> inside the result area */}
            <AdSlot slot={SITE.slots.result} position="Inside the result area" minHeight={250} className="py-2" />

            <p className="text-sm text-slate-600 print:hidden" aria-live="polite">
              {completed} of {result.steps.length} steps ticked off
            </p>

            <ol role="list" className="space-y-5">
              {result.steps.map((step, index) => {
                const checked = Boolean(done[step.id]);
                return (
                  <li key={step.id} className="flex gap-3 break-inside-avoid">
                    <input
                      id={`step-${step.id}`}
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggle(step.id)}
                      className="mt-1.5 h-5 w-5 shrink-0 accent-navy-700"
                    />
                    <div className="min-w-0">
                      <label
                        htmlFor={`step-${step.id}`}
                        className={`cursor-pointer font-serif text-lg font-semibold ${checked ? "text-slate-500" : "text-navy-900"}`}
                      >
                        Step {index + 1}: {step.title}
                      </label>
                      {step.description && <p className="mt-1 text-sm leading-6 text-slate-700">{step.description}</p>}
                      {step.items && (
                        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700 marker:text-navy-500">
                          {step.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {step.links && (
                        <ul className="mt-3 flex flex-col gap-1.5 text-sm">
                          {step.links.map((link) => (
                            <li key={link.href}>
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-navy-700 underline underline-offset-2 hover:text-navy-900"
                              >
                                {link.label}
                                <span className="sr-only"> (opens in a new tab)</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>

            <p className="border-t border-slate-200 pt-4 text-xs leading-5 text-slate-600">
              This checklist is general information, not legal or immigration advice, and is not an official government
              service. Rules can change, so confirm every step on GOV.UK. See our{" "}
              <Link href="/disclaimer" className="underline">
                legal disclaimer
              </Link>
              .
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
