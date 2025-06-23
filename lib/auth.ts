import { db } from "@/drizzle/db";
import { schema } from "@/drizzle/schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schema,
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  plugins: [nextCookies()],
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

// export const auth = betterAuth({
//   database: drizzleAdapter(db, {
//     provider: "pg",
//     schema: schema,
//   }),
//   socialProviders: {
//     google: {
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     },
//   },
//   xata: {
//     apiKey: process.env.XATA_API_KEY!,
//     dbURL: process.env.DATABASE_URL_POSTGRES, // optional, but good to include
//   },
//   plugins: [nextCookies()],
//   baseURL: process.env.NEXT_PUBLIC_BASE_URL,
// });

// console.log("🚨 XATA_API_KEY loaded:", process.env.XATA_API_KEY?.slice(0, 8));

