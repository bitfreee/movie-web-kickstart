import { publicProcedure } from "@/server/trpc";

export const helloRouter = publicProcedure.query(() => {
  console.count("helloRouter called");
  return new Date().toISOString();
});
