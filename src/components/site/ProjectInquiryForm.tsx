import { useMutation } from "convex/react";
import { ArrowRight, ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api";
import { BUDGETS, BUSINESS_TYPES } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type InquiryMode = "project" | "audit";

const inputClasses =
  "h-12 w-full rounded-xl border border-input bg-card px-4 text-[0.95rem] text-foreground shadow-none outline-none transition-[border-color,box-shadow] placeholder:text-muted-foreground/70 focus-visible:border-foreground/50 focus-visible:ring-[3px] focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-60";

function Field({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-[0.82rem] font-bold tracking-wide text-foreground">
        {label}
      </label>
      {children}
      {hint && <p className="text-xs font-medium text-muted-foreground">{hint}</p>}
    </div>
  );
}

export function ProjectInquiryForm({ mode }: { mode: InquiryMode }) {
  const submit = useMutation(api.inquiries.submit);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  // Reset success state when switching between project / audit
  useEffect(() => setStatus("idle"), [mode]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    const form = new FormData(event.currentTarget);
    try {
      await submit({
        kind: mode,
        name: String(form.get("name") ?? ""),
        email: String(form.get("email") ?? ""),
        company: String(form.get("company") ?? "") || undefined,
        businessType: String(form.get("businessType") ?? "") || undefined,
        budget: String(form.get("budget") ?? "") || undefined,
        timeline: String(form.get("timeline") ?? "") || undefined,
        website: String(form.get("website") ?? "") || undefined,
        message: String(form.get("message") ?? ""),
      });
      setStatus("done");
      toast.success(mode === "project" ? "Inquiry sent — talk soon!" : "Audit requested!", {
        description: "We usually reply within one business day.",
      });
    } catch (error) {
      console.error("Inquiry submit failed", error);
      setStatus("idle");
      toast.error("Something went wrong", {
        description: "Please try again, or email hello@reachlynk.studio directly.",
      });
    }
  };

  if (status === "done") {
    return (
      <div className="flex flex-col items-start gap-5 rounded-3xl border border-border bg-card p-8 sm:p-10">
        <span className="flex size-14 items-center justify-center rounded-full bg-brand-soft text-brand">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
          {mode === "project"
            ? "Nice — your project is on our desk."
            : "Your free audit is queued."}
        </h3>
        <p className="max-w-md leading-relaxed text-muted-foreground">
          {mode === "project"
            ? "A real human (not a bot) will reply within one business day with next steps and any questions we have. You should also receive a confirmation email shortly."
            : "Within two business days you'll receive a plain-language audit: what's slowing your site down, what's hurting conversions, and the three highest-impact fixes — free, no strings."}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-bold text-foreground underline decoration-brand/60 underline-offset-4 hover:decoration-brand"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "grid gap-5 rounded-3xl border border-border bg-card p-6 sm:grid-cols-2 sm:p-8",
        mode === "audit" && "sm:grid-cols-1 lg:grid-cols-2",
      )}
    >
      <Field label="Your name" htmlFor={`${mode}-name`}>
        <input id={`${mode}-name`} name="name" required placeholder="Alex Rivera" className={inputClasses} />
      </Field>
      <Field label="Work email" htmlFor={`${mode}-email`}>
        <input
          id={`${mode}-email`}
          name="email"
          type="email"
          required
          placeholder="alex@company.com"
          className={inputClasses}
        />
      </Field>
      <Field label="Company / brand" htmlFor={`${mode}-company`}>
        <input id={`${mode}-company`} name="company" placeholder="Rivera & Co." className={inputClasses} />
      </Field>

      {mode === "project" ? (
        <>
          <Field label="What type of business is it?" htmlFor={`${mode}-type`}>
            <select id={`${mode}-type`} name="businessType" className={inputClasses} defaultValue="">
              <option value="" disabled>
                Select one…
              </option>
              {BUSINESS_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Budget range" htmlFor={`${mode}-budget`}>
            <select id={`${mode}-budget`} name="budget" required className={inputClasses} defaultValue="">
              <option value="" disabled>
                Select one…
              </option>
              {BUDGETS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </Field>
          <Field label="When would you like to start?" htmlFor={`${mode}-timeline`}>
            <select id={`${mode}-timeline`} name="timeline" className={inputClasses} defaultValue="">
              <option value="" disabled>
                Select one…
              </option>
              <option>As soon as possible</option>
              <option>Within a month</option>
              <option>In 1–3 months</option>
              <option>Just researching</option>
            </select>
          </Field>
        </>
      ) : (
        <>
          <Field label="Your current website" htmlFor={`${mode}-website`} hint="Don't have one yet? That's fine — leave it blank.">
            <input
              id={`${mode}-website`}
              name="website"
              type="url"
              placeholder="https://yourcurrentsite.com"
              className={inputClasses}
            />
          </Field>
          <Field label="Business type" htmlFor={`${mode}-type`}>
            <select id={`${mode}-type`} name="businessType" className={inputClasses} defaultValue="">
              <option value="" disabled>
                Select one…
              </option>
              {BUSINESS_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>
        </>
      )}

      <div className="sm:col-span-2">
        <Field
          label={mode === "project" ? "What does your website need to do?" : "What's the biggest problem with your current site?"}
          htmlFor={`${mode}-message`}
          hint={
            mode === "project"
              ? "Goals, must-haves, examples you like — anything helps."
              : "Slow? Dated? Not bringing in leads? Tell us what's hurting."
          }
        >
          <textarea
            id={`${mode}-message`}
            name="message"
            required
            rows={5}
            placeholder={
              mode === "project"
                ? "We're a 12-person studio launching a new service line and need a site that turns visits into booked calls…"
                : "Our site was built in 2019, takes forever to load, and looks nothing like the quality of our work…"
            }
            className={cn(inputClasses, "h-auto resize-none py-3.5 leading-relaxed")}
          />
        </Field>
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2">
        <Button
          type="submit"
          disabled={status === "sending"}
          className="group h-[54px] w-full rounded-full text-base font-bold sm:w-auto sm:self-start sm:px-8"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="size-5 animate-spin" />
              Sending…
            </>
          ) : mode === "project" ? (
            <>
              Send project inquiry
              <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </>
          ) : (
            <>
              Request my free audit
              <ArrowRight className="size-5" />
            </>
          )}
        </Button>
        <p className="text-xs font-medium leading-relaxed text-muted-foreground">
          By submitting you agree to be contacted about your inquiry. We never share your
          details — and you can unsubscribe from anything, anytime.
        </p>
      </div>
    </form>
  );
}
