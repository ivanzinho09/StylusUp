import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Upload, X, Plus } from 'lucide-react';
import { Footer } from './Footer';

const CATEGORIES = ['DeFi', 'Infrastructure', 'Dev Tools', 'Gaming & NFTs', 'Cryptography', 'Bridges & Oracles'];
const LANGUAGES = ['Rust', 'Move', 'C/C++'];
const FUNDING_SOURCES = ['Stylus Sprint', 'D.A.O Program', 'Community', 'None'];

interface FormData {
    // Step 1
    projectName: string;
    tagline: string;
    logo: File | null;
    logoPreview: string | null;
    status: 'live' | 'building';
    websiteUrl: string;
    docsUrl: string;
    githubUrl: string;
    // Step 2
    about: string;
    stylusUsage: string;
    highlights: string[];
    categories: string[];
    languages: string[];
    fundingSource: string;
    // Step 3
    submitterName: string;
    email: string;
    twitter: string;
    discord: string;
    telegram: string;
    additionalNotes: string;
}

const EMPTY_FORM: FormData = {
    projectName: '',
    tagline: '',
    logo: null,
    logoPreview: null,
    status: 'live',
    websiteUrl: '',
    docsUrl: '',
    githubUrl: '',
    about: '',
    stylusUsage: '',
    highlights: [''],
    categories: [],
    languages: [],
    fundingSource: '',
    submitterName: '',
    email: '',
    twitter: '',
    discord: '',
    telegram: '',
    additionalNotes: '',
};

const STEP_LABELS = ['Project Identity', 'Description & Stylus', 'Contact & Socials'];

function ProgressBar({ step }: { step: number }) {
    return (
        <div className="flex items-center gap-0 mb-10">
            {STEP_LABELS.map((label, i) => (
                <div key={i} className="flex items-center flex-1">
                    <div className="flex flex-col items-center">
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${i < step
                                    ? 'bg-[#5F4DED] border-[#5F4DED] text-white'
                                    : i === step
                                        ? 'border-[#5F4DED] text-[#5F4DED] bg-white'
                                        : 'border-gray-200 text-gray-300 bg-white'
                                }`}
                        >
                            {i < step ? <Check className="w-4 h-4" /> : i + 1}
                        </div>
                        <span
                            className={`mt-1.5 text-xs font-medium text-center whitespace-nowrap ${i <= step ? 'text-[#5F4DED]' : 'text-gray-300'
                                }`}
                        >
                            {label}
                        </span>
                    </div>
                    {i < STEP_LABELS.length - 1 && (
                        <div
                            className={`flex-1 h-0.5 mx-2 mb-5 ${i < step ? 'bg-[#5F4DED]' : 'bg-gray-200'
                                }`}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

function MultiSelectPills({
    options,
    selected,
    onChange,
}: {
    options: string[];
    selected: string[];
    onChange: (next: string[]) => void;
}) {
    function toggle(opt: string) {
        onChange(
            selected.includes(opt) ? selected.filter((s) => s !== opt) : [...selected, opt]
        );
    }
    return (
        <div className="flex flex-wrap gap-2">
            {options.map((opt) => (
                <button
                    key={opt}
                    type="button"
                    onClick={() => toggle(opt)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${selected.includes(opt)
                            ? 'bg-[#5F4DED] text-white border-[#5F4DED]'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-[#5F4DED] hover:text-[#5F4DED]'
                        }`}
                >
                    {opt}
                </button>
            ))}
        </div>
    );
}

function Field({
    label,
    required,
    children,
    hint,
}: {
    label: string;
    required?: boolean;
    children: React.ReactNode;
    hint?: string;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">
                {label}
                {required && <span className="text-[#5F4DED] ml-0.5">*</span>}
            </label>
            {children}
            {hint && <p className="text-xs text-gray-400">{hint}</p>}
        </div>
    );
}

const inputCls =
    'w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5F4DED]/30 focus:border-[#5F4DED] transition-all bg-white';

export function SubmitProjectPage() {
    const [step, setStep] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState<FormData>(EMPTY_FORM);
    const fileInputRef = useRef<HTMLInputElement>(null);

    function set<K extends keyof FormData>(key: K, value: FormData[K]) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    function handleLogoChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;
        set('logo', file);
        const reader = new FileReader();
        reader.onload = (ev) => set('logoPreview', ev.target?.result as string);
        reader.readAsDataURL(file);
    }

    function setHighlight(idx: number, val: string) {
        const next = [...form.highlights];
        next[idx] = val;
        set('highlights', next);
    }

    function addHighlight() {
        if (form.highlights.length < 5) set('highlights', [...form.highlights, '']);
    }

    function removeHighlight(idx: number) {
        set('highlights', form.highlights.filter((_, i) => i !== idx));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <div className="min-h-screen bg-[#F8F7FF] flex flex-col">
                <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                        <Check className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h1 className="text-3xl font-bold text-[#0F172A] mb-3">
                        Thanks for your submission! 🎉
                    </h1>
                    <p className="text-gray-500 text-lg max-w-md mb-8 leading-relaxed">
                        <strong>{form.projectName}</strong> has been submitted for review. We'll reach out to{' '}
                        <span className="text-[#5F4DED] font-medium">{form.email}</span> once it's live.
                    </p>
                    <p className="text-sm text-gray-400 mb-8">Typically reviewed within 2–5 business days.</p>
                    <div className="flex gap-3">
                        <Link
                            to="/ecosystem"
                            className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-medium hover:border-[#5F4DED] hover:text-[#5F4DED] transition-colors"
                        >
                            ← Back to Ecosystem
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8F7FF]">
            {/* Mini header */}
            <div className="bg-white border-b border-gray-100 px-6 lg:px-8 py-4 flex items-center gap-4">
                <Link to="/ecosystem" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#5F4DED] transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Ecosystem
                </Link>
                <div className="w-px h-4 bg-gray-200" />
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo.svg" alt="StylusUp" className="h-7 w-7" />
                    <span style={{ fontFamily: "'Unica77 LL', sans-serif" }} className="text-lg font-normal">
                        <span className="text-[#5F4DED]">Stylus</span>
                        <span className="text-[#0F172A] italic">Up</span>
                    </span>
                </Link>
            </div>

            <div className="max-w-2xl mx-auto px-6 py-12">
                {/* Page title */}
                <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-semibold uppercase tracking-widest text-[#5F4DED] mb-3">
                        Submit a Project
                    </div>
                    <h1 className="text-3xl font-bold text-[#0F172A]">
                        List your project on the Stylus Ecosystem
                    </h1>
                    <p className="text-gray-500 mt-2 leading-relaxed">
                        Fill in the details below and we'll review your submission within 2–5 business days.
                    </p>
                </div>

                <ProgressBar step={step} />

                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-6">

                    {/* ── STEP 1 — Project Identity ── */}
                    {step === 0 && (
                        <>
                            <Field label="Project Name" required>
                                <input
                                    className={inputCls}
                                    placeholder="e.g. Scaffold Stylus"
                                    value={form.projectName}
                                    onChange={(e) => set('projectName', e.target.value)}
                                    required
                                />
                            </Field>

                            <Field label="Tagline" required hint="Short one-liner shown on the project card (max 80 characters)">
                                <input
                                    className={inputCls}
                                    placeholder="e.g. Blazing-fast tooling to build, test & deploy Stylus contracts"
                                    maxLength={80}
                                    value={form.tagline}
                                    onChange={(e) => set('tagline', e.target.value)}
                                    required
                                />
                                <span className="text-right text-xs text-gray-300">{form.tagline.length}/80</span>
                            </Field>

                            <Field label="Project Logo" hint="PNG or SVG, max 2 MB. Will be displayed on your project card and detail page.">
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className="flex flex-col items-center justify-center gap-3 cursor-pointer border-2 border-dashed border-gray-200 rounded-xl p-8 hover:border-[#5F4DED] hover:bg-purple-50/30 transition-all"
                                >
                                    {form.logoPreview ? (
                                        <img src={form.logoPreview} alt="Preview" className="w-20 h-20 rounded-full object-cover" />
                                    ) : (
                                        <Upload className="w-8 h-8 text-gray-300" />
                                    )}
                                    <span className="text-sm text-gray-400">
                                        {form.logo ? form.logo.name : 'Click to upload logo'}
                                    </span>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/png,image/svg+xml"
                                        onChange={handleLogoChange}
                                        className="hidden"
                                    />
                                </div>
                            </Field>

                            <Field label="Project Status" required>
                                <div className="flex gap-3">
                                    {(['live', 'building'] as const).map((s) => (
                                        <button
                                            key={s}
                                            type="button"
                                            onClick={() => set('status', s)}
                                            className={`flex-1 py-2.5 rounded-xl border text-sm font-medium transition-all ${form.status === s
                                                    ? s === 'live'
                                                        ? 'bg-emerald-500 text-white border-emerald-500'
                                                        : 'bg-amber-400 text-white border-amber-400'
                                                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                                                }`}
                                        >
                                            {s === 'live' ? '● Live' : '◐ Building'}
                                        </button>
                                    ))}
                                </div>
                            </Field>

                            <Field label="Website URL" required>
                                <input
                                    className={inputCls}
                                    type="url"
                                    placeholder="https://yourproject.xyz"
                                    value={form.websiteUrl}
                                    onChange={(e) => set('websiteUrl', e.target.value)}
                                    required
                                />
                            </Field>

                            <Field label="Docs URL">
                                <input
                                    className={inputCls}
                                    type="url"
                                    placeholder="https://docs.yourproject.xyz"
                                    value={form.docsUrl}
                                    onChange={(e) => set('docsUrl', e.target.value)}
                                />
                            </Field>

                            <Field label="GitHub URL">
                                <input
                                    className={inputCls}
                                    type="url"
                                    placeholder="https://github.com/org/repo"
                                    value={form.githubUrl}
                                    onChange={(e) => set('githubUrl', e.target.value)}
                                />
                            </Field>
                        </>
                    )}

                    {/* ── STEP 2 — Description & Stylus ── */}
                    {step === 1 && (
                        <>
                            <Field label="About the Project" required hint="Describe your project for the detail page (shown to developers, investors, and community).">
                                <textarea
                                    className={`${inputCls} min-h-[120px] resize-y`}
                                    placeholder="Tell us what your project does, who it's for, and what problem it solves..."
                                    value={form.about}
                                    onChange={(e) => set('about', e.target.value)}
                                    required
                                />
                            </Field>

                            <Field
                                label="How does this project use Stylus?"
                                required
                                hint="Explain the specific Stylus integration — what contracts are written in Rust/C++, and why."
                            >
                                <textarea
                                    className={`${inputCls} min-h-[120px] resize-y`}
                                    placeholder="e.g. Our core AMM swap math is implemented in a Rust Stylus contract, replacing Solidity for a 30% gas saving..."
                                    value={form.stylusUsage}
                                    onChange={(e) => set('stylusUsage', e.target.value)}
                                    required
                                />
                            </Field>

                            <Field label="Key Highlights" hint="Up to 5 bullet points shown on the detail page (optional).">
                                <div className="flex flex-col gap-2">
                                    {form.highlights.map((h, i) => (
                                        <div key={i} className="flex gap-2">
                                            <input
                                                className={`${inputCls} flex-1`}
                                                placeholder={`Highlight ${i + 1}`}
                                                value={h}
                                                onChange={(e) => setHighlight(i, e.target.value)}
                                            />
                                            {form.highlights.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeHighlight(i)}
                                                    className="p-2 text-gray-300 hover:text-red-400 transition-colors"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    {form.highlights.length < 5 && (
                                        <button
                                            type="button"
                                            onClick={addHighlight}
                                            className="flex items-center gap-1.5 text-sm text-[#5F4DED] hover:text-purple-700 font-medium transition-colors mt-1"
                                        >
                                            <Plus className="w-4 h-4" />
                                            Add highlight
                                        </button>
                                    )}
                                </div>
                            </Field>

                            <Field label="Category" required hint="Select all that apply.">
                                <MultiSelectPills
                                    options={CATEGORIES}
                                    selected={form.categories}
                                    onChange={(v) => set('categories', v)}
                                />
                            </Field>

                            <Field label="Language">
                                <MultiSelectPills
                                    options={LANGUAGES}
                                    selected={form.languages}
                                    onChange={(v) => set('languages', v)}
                                />
                            </Field>

                            <Field label="Funding Source">
                                <div className="flex flex-wrap gap-2">
                                    {FUNDING_SOURCES.map((src) => (
                                        <button
                                            key={src}
                                            type="button"
                                            onClick={() => set('fundingSource', form.fundingSource === src ? '' : src)}
                                            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${form.fundingSource === src
                                                    ? 'bg-[#5F4DED] text-white border-[#5F4DED]'
                                                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#5F4DED] hover:text-[#5F4DED]'
                                                }`}
                                        >
                                            {src}
                                        </button>
                                    ))}
                                </div>
                            </Field>
                        </>
                    )}

                    {/* ── STEP 3 — Contact & Socials ── */}
                    {step === 2 && (
                        <>
                            <Field label="Your Name" required>
                                <input
                                    className={inputCls}
                                    placeholder="Alex Smith"
                                    value={form.submitterName}
                                    onChange={(e) => set('submitterName', e.target.value)}
                                    required
                                />
                            </Field>

                            <Field label="Email" required hint="We'll reach out here once your project is reviewed.">
                                <input
                                    className={inputCls}
                                    type="email"
                                    placeholder="you@project.xyz"
                                    value={form.email}
                                    onChange={(e) => set('email', e.target.value)}
                                    required
                                />
                            </Field>

                            <div className="border-t border-gray-100 pt-2">
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Social Links (optional)</p>
                                <div className="flex flex-col gap-4">
                                    <Field label="Twitter / X">
                                        <input
                                            className={inputCls}
                                            type="url"
                                            placeholder="https://x.com/yourproject"
                                            value={form.twitter}
                                            onChange={(e) => set('twitter', e.target.value)}
                                        />
                                    </Field>
                                    <Field label="Discord">
                                        <input
                                            className={inputCls}
                                            type="url"
                                            placeholder="https://discord.gg/yourserver"
                                            value={form.discord}
                                            onChange={(e) => set('discord', e.target.value)}
                                        />
                                    </Field>
                                    <Field label="Telegram">
                                        <input
                                            className={inputCls}
                                            type="url"
                                            placeholder="https://t.me/yourgroup"
                                            value={form.telegram}
                                            onChange={(e) => set('telegram', e.target.value)}
                                        />
                                    </Field>
                                </div>
                            </div>

                            <Field label="Anything else?" hint="Notes for our reviewers — context, links, or anything you want us to know.">
                                <textarea
                                    className={`${inputCls} min-h-[80px] resize-y`}
                                    placeholder="Optional free-form notes..."
                                    value={form.additionalNotes}
                                    onChange={(e) => set('additionalNotes', e.target.value)}
                                />
                            </Field>
                        </>
                    )}

                    {/* Navigation buttons */}
                    <div className={`flex gap-3 pt-2 border-t border-gray-100 ${step === 0 ? 'justify-end' : 'justify-between'}`}>
                        {step > 0 && (
                            <button
                                type="button"
                                onClick={() => setStep(step - 1)}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-medium hover:border-gray-300 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back
                            </button>
                        )}

                        {step < 2 ? (
                            <button
                                type="button"
                                onClick={() => setStep(step + 1)}
                                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#5F4DED] to-[#7B68EE] text-white font-semibold hover:opacity-90 transition-opacity shadow-sm"
                            >
                                Next
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#5F4DED] to-[#7B68EE] text-white font-semibold hover:opacity-90 transition-opacity shadow-sm"
                            >
                                <Check className="w-4 h-4" />
                                Submit Project
                            </button>
                        )}
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    );
}
