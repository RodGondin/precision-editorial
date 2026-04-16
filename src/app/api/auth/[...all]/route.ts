import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// Isso cria os endpoints de auth automaticamente em /api/auth/*.
export const { GET, POST } = toNextJsHandler(auth);
