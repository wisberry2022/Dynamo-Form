export type ButtonVariant =
  | "primary"
  | "secondary"
  | "brighten"
  | "pink"
  | "hazy";

export type ToastVariant = Omit<ButtonVariant, "secondary" | "hazy">;
