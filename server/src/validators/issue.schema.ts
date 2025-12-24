import { z } from "zod";

export const IssueBookSchema = z.object({
  userId: z.number().int().positive("Invalid user ID"),
  bookId: z.number().int().positive("Invalid book ID"),
});
