import { MaskLine, Reveal } from "@/components/site/motion";

export default function Terms() {
  return (
    <section className="pb-16 pt-24 md:pt-32">
      <div className="shell">
        <p className="eyebrow flex items-center gap-3 text-brand">
          <span className="h-px w-8 bg-brand/60" />
          Legal
        </p>
        <h1 className="mt-5 max-w-3xl text-[clamp(2.4rem,5.5vw,4rem)] font-extrabold leading-[0.99] tracking-[-0.04em]">
          <MaskLine>Terms of</MaskLine>
          <MaskLine delay={0.1}>
            <span className="serif-accent font-normal text-brand">Service</span>
          </MaskLine>
        </h1>

        <Reveal delay={0.2}>
          <div className="mt-10 max-w-3xl space-y-8 text-[0.95rem] leading-relaxed text-muted-foreground">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-foreground/60">
                Last updated: September 2026
              </p>
              <p>
                Welcome to Reachlynk. By accessing or using our website and services, you agree
                to the following terms. Please read them carefully.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-extrabold text-foreground">1. Services</h2>
              <p>
                Reachlynk provides web design, development, and related digital services for
                restaurants, cafés, hotels, and local businesses. All services are delivered
                under a fixed-price agreement outlined in a written proposal before work begins.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-extrabold text-foreground">2. Pricing &amp; Payments</h2>
              <p>
                All prices quoted are fixed and agreed upon in writing before the project starts.
                Payment terms are specified in each individual proposal. We do not charge hourly
                rates or hidden fees. If additional work is required beyond the agreed scope,
                we will provide a separate quote for your approval before proceeding.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-extrabold text-foreground">3. Project Timeline</h2>
              <p>
                We provide estimated timelines in our proposals and treat launch dates as
                commitments. Delays caused by late client feedback or content delivery may
                adjust the timeline, and we will communicate any changes promptly.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-extrabold text-foreground">4. Revisions</h2>
              <p>
                Each plan includes a defined number of revision rounds. Additional revisions
                beyond the included rounds may be subject to a separate fee, communicated
                in advance. The Business plan includes unlimited revisions during the
                build phase.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-extrabold text-foreground">5. Ownership &amp; IP</h2>
              <p>
                Upon full payment, you own all deliverables — including code, design files,
                content, and assets created for your project. We retain the right to display
                completed work in our portfolio unless you request otherwise in writing.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-extrabold text-foreground">6. Warranties &amp; Support</h2>
              <p>
                We warrant that our work will be free from material defects at the time of
                delivery. Post-launch support periods are specified in each proposal. Issues
                arising from client modifications after handover are not covered under warranty.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-extrabold text-foreground">7. Limitation of Liability</h2>
              <p>
                Reachlynk&apos;s total liability for any project shall not exceed the total fee
                paid for that project. We are not liable for indirect, incidental, or
                consequential damages, including loss of revenue or business opportunity.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-extrabold text-foreground">8. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential any proprietary information shared
                during the course of a project. We will not share your business data, strategy,
                or content with third parties without your consent.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-extrabold text-foreground">9. Termination</h2>
              <p>
                Either party may terminate a project with written notice. In such cases,
                payment is due for all work completed up to the date of termination. Any
                deposit paid is non-refundable if work has already commenced.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-extrabold text-foreground">10. Contact</h2>
              <p>
                For questions about these terms, reach us at{" "}
                <a
                  href="mailto:hello.reachlynk@gmail.com"
                  className="font-bold text-brand underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
                >
                  hello.reachlynk@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
