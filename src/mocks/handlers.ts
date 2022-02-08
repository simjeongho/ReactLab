import { rest } from "msw";

export const handlers = [rest.get("/test", async (req, res, ctx) => {})];
