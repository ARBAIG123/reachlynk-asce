import { useConvexAuth, useQuery } from "convex/react";
import { ArrowUpRight, ExternalLink, Inbox, Loader2, LogOut, Mail } from "lucide-react";
import { Link } from "react-router";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@/hooks/use-auth";
import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function formatDate(ts: number) {
  return new Date(ts).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const { isAuthenticated } = useConvexAuth();
  const inquiries = useQuery(api.inquiries.list);
  const loading = !isAuthenticated || inquiries === undefined;

  const handleSignOut = async () => {
    await signOut();
  };

  const projects = (inquiries ?? []).filter((i) => i.kind === "project");
  const audits = (inquiries ?? []).filter((i) => i.kind === "audit");

  return (
    <div className="flex min-h-screen bg-muted/40">
      {/* side rail */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border bg-background px-5 py-6 lg:flex">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="" className="size-9 rounded-[10px]" />
          <div className="leading-tight">
            <p className="text-[0.95rem] font-extrabold tracking-tight">Reachlynk</p>
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Inbox
            </p>
          </div>
        </div>

        <nav className="mt-10 flex flex-col gap-1 text-sm font-bold">
          <span className="flex items-center gap-2.5 rounded-xl bg-secondary px-3.5 py-2.5 text-foreground">
            <Inbox className="size-4 text-brand" />
            Inquiries
            <span className="ml-auto rounded-full bg-foreground px-2 py-0.5 text-[0.65rem] text-background">
              {loading ? "–" : (inquiries?.length ?? 0)}
            </span>
          </span>
          <Link
            to="/"
            className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <ExternalLink className="size-4" />
            View live site
          </Link>
        </nav>

        <div className="mt-auto">
          {user?.name && (
            <p className="mb-3 truncate px-2 text-xs font-semibold text-muted-foreground">
              Signed in as {user.name}
            </p>
          )}
          <Button
            type="button"
            variant="outline"
            className="w-full gap-2 rounded-xl"
            onClick={handleSignOut}
          >
            <LogOut className="size-4" />
            Sign out
          </Button>
        </div>
      </aside>

      {/* main */}
      <main className="min-w-0 flex-1 px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-4xl flex-col gap-8">
          {/* mobile header */}
          <div className="flex items-center justify-between lg:hidden">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="" className="size-8 rounded-lg" />
              <p className="font-extrabold tracking-tight">Reachlynk Inbox</p>
            </div>
            <Button type="button" variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="size-4" />
              Sign out
            </Button>
          </div>

          <header>
            <p className="text-sm font-bold text-muted-foreground">
              {user?.name ? `Welcome, ${user.name}` : "Authenticated workspace"} ·{" "}
              {new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}
            </p>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight">Website inquiries</h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Leads submitted through the public “Start a project” and “Free audit” forms
              land here, newest first.
            </p>
          </header>

          {/* stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "All inquiries", value: loading ? "…" : (inquiries?.length ?? 0) },
              { label: "Project leads", value: loading ? "…" : projects.length },
              { label: "Audit requests", value: loading ? "…" : audits.length },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-card p-4">
                <p className="text-2xl font-extrabold tracking-tight">{stat.value}</p>
                <p className="mt-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* list */}
          {loading ? (
            <div className="flex flex-col items-center gap-3 rounded-3xl border border-border bg-card py-20 text-muted-foreground">
              <Loader2 className="size-6 animate-spin" />
              <p className="text-sm font-semibold">Loading inquiries…</p>
            </div>
          ) : (inquiries ?? []).length === 0 ? (
            <div className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-border bg-card px-6 py-20 text-center">
              <Mail className="size-8 text-muted-foreground/50" />
              <h2 className="text-lg font-extrabold tracking-tight">No inquiries yet</h2>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                When a visitor submits the project or audit form on the site, it will show
                up here in real time.
              </p>
              <Link
                to="/contact?mode=project"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-bold text-background"
              >
                Try the form <ArrowUpRight className="size-4" />
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {(inquiries ?? []).map((inquiry) => (
                <li
                  key={inquiry._id}
                  className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-foreground/30 sm:p-6"
                >
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span
                      className={cn(
                        "rounded-full px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.12em]",
                        inquiry.kind === "project"
                          ? "bg-brand-soft text-brand"
                          : "bg-secondary text-foreground",
                      )}
                    >
                      {inquiry.kind === "project" ? "Project" : "Free audit"}
                    </span>
                    <p className="font-extrabold tracking-tight">
                      {inquiry.name}
                      {inquiry.company ? ` · ${inquiry.company}` : ""}
                    </p>
                    <a
                      href={`mailto:${inquiry.email}`}
                      className="text-sm font-semibold text-brand hover:underline"
                    >
                      {inquiry.email}
                    </a>
                    <time className="ml-auto text-xs font-bold text-muted-foreground">
                      {formatDate(inquiry._creationTime)}
                    </time>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1.5 text-[0.82rem] font-semibold text-muted-foreground">
                    {inquiry.businessType && <span>Business: {inquiry.businessType}</span>}
                    {inquiry.budget && <span>Budget: {inquiry.budget}</span>}
                    {inquiry.timeline && <span>Timeline: {inquiry.timeline}</span>}
                    {inquiry.website && (
                      <a
                        href={inquiry.website.startsWith("http") ? inquiry.website : `https://${inquiry.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-border underline-offset-2 hover:text-foreground"
                      >
                        {inquiry.website.replace(/^https?:\/\//, "")}
                      </a>
                    )}
                  </div>

                  <p className="mt-3 rounded-xl bg-muted/70 p-4 text-sm leading-relaxed text-foreground/85">
                    {inquiry.message}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}
