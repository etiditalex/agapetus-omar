"use client";

import { useState } from "react";

interface Fields {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  acknowledge: boolean;
}

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  acknowledge: false,
};

const subjects = ["General enquiry", "Community engagement", "Media request", "Event invitation", "Other"];

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Enter a name of at least two characters.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Enter a valid email address.";
  if (values.phone.trim() && !/^\+?\d{10,15}$/.test(values.phone.replace(/[\s()-]/g, ""))) {
    errors.phone = "Use 10 to 15 digits, or leave the phone field empty.";
  }
  if (!values.subject) errors.subject = "Choose a subject.";
  if (values.message.trim().length < 20) errors.message = "Write at least 20 characters.";
  if (!values.acknowledge) errors.acknowledge = "Please confirm before sending.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [preview, setPreview] = useState<Fields | null>(null);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  if (preview) {
    return (
      <div className="border border-gold-soft bg-sand p-6 sm:p-8" role="status">
        <p className="text-[11px] uppercase tracking-[0.18em] text-gold">Kilifi North</p>
        <h2 className="mt-3 font-serif text-3xl text-ink">Thank you</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">Your message is noted below.</p>
        <dl className="mt-6 space-y-3 text-sm">
          <div>
            <dt className="text-muted">Name</dt>
            <dd>{preview.name}</dd>
          </div>
          <div>
            <dt className="text-muted">Email</dt>
            <dd>{preview.email}</dd>
          </div>
          {preview.phone ? (
            <div>
              <dt className="text-muted">Phone</dt>
              <dd>{preview.phone}</dd>
            </div>
          ) : null}
          <div>
            <dt className="text-muted">Subject</dt>
            <dd>{preview.subject}</dd>
          </div>
          <div>
            <dt className="text-muted">Message</dt>
            <dd className="whitespace-pre-wrap">{preview.message}</dd>
          </div>
        </dl>
        <button
          type="button"
          className="mt-6 border border-navy px-4 py-3 text-xs uppercase tracking-[0.16em]"
          onClick={() => {
            setPreview(null);
            setValues(empty);
          }}
        >
          Write another message
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      className="min-w-0 border border-line bg-white p-4 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        const nextErrors = validate(values);
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length === 0) setPreview(values);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name} required>
          <input
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            className={inputClass}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
          />
        </Field>
        <Field label="Email" error={errors.email} required>
          <input
            type="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            className={inputClass}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
          />
        </Field>
        <Field label="Phone" error={errors.phone} hint="Optional">
          <input
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={inputClass}
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
          />
        </Field>
        <Field label="Subject" error={errors.subject} required>
          <select
            value={values.subject}
            onChange={(event) => update("subject", event.target.value)}
            className={inputClass}
            aria-invalid={Boolean(errors.subject)}
          >
            <option value="">Select a subject</option>
            {subjects.map((subject) => (
              <option key={subject}>{subject}</option>
            ))}
          </select>
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Message" error={errors.message} required>
          <textarea
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            className={`${inputClass} min-h-36`}
            aria-invalid={Boolean(errors.message)}
          />
        </Field>
      </div>
      <label className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-ink">
        <input
          type="checkbox"
          className="mt-1"
          checked={values.acknowledge}
          onChange={(event) => update("acknowledge", event.target.checked)}
        />
        <span>You may contact me about this message.</span>
      </label>
      {errors.acknowledge ? <p className="mt-2 text-xs text-danger">{errors.acknowledge}</p> : null}
      <button type="submit" className="mt-6 bg-teal px-5 py-3 text-xs uppercase tracking-[0.16em] text-white transition hover:bg-navy">
        Send message
      </button>
    </form>
  );
}

const inputClass = "w-full border border-line bg-ivory px-4 py-3 text-sm outline-none focus:border-teal";

function Field({
  label,
  error,
  required,
  hint,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-muted">
        <span>
          {label}
          {required ? <span className="text-gold"> *</span> : null}
        </span>
        {hint ? <span>{hint}</span> : null}
      </span>
      {children}
      {error ? <span className="mt-2 block text-xs normal-case tracking-normal text-danger">{error}</span> : null}
    </label>
  );
}
