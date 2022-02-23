import { AppError } from "@shared/errors/AppError";

function example(alternative: true | false): string {
  if (alternative) {
    // Example exception error
    throw new AppError("custom error message", 400);
  }
  return "OK";
}

console.log(example(true));
