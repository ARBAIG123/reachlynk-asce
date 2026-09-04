import { getAuthUserId } from "@convex-dev/auth/server";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/**
 * Public submission used by the "Start a project" and "Get a free audit"
 * forms on the marketing site. Anyone can submit — no auth required.
 */
export const submit = mutation({
  args: {
    kind: v.union(v.literal("project"), v.literal("audit")),
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    businessType: v.optional(v.string()),
    budget: v.optional(v.string()),
    timeline: v.optional(v.string()),
    website: v.optional(v.string()),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("inquiries", {
      kind: args.kind,
      name: args.name.trim(),
      email: args.email.trim().toLowerCase(),
      company: args.company?.trim() || undefined,
      businessType: args.businessType?.trim() || undefined,
      budget: args.budget?.trim() || undefined,
      timeline: args.timeline?.trim() || undefined,
      website: args.website?.trim() || undefined,
      message: args.message.trim(),
    });
    return id;
  },
});

/**
 * Signed-in inbox for the agency. Returns newest submissions first.
 */
export const list = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error("You must be signed in to view the inbox.");
    }
    return ctx.db.query("inquiries").order("desc").collect();
  },
});
