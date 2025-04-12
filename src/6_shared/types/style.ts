export type ButtonVariant =
  | "primary"
  | "secondary"
  | "brighten"
  | "pink"
  | "hazy";

export type ToastVariant = Omit<ButtonVariant, "secondary" | "hazy">;

export type Scale = "large" | "medium" | "small";
export type DialogScale = Scale;

export type Align = "left" | "center" | "right";

export type ChipVariant = Omit<ButtonVariant, "hazy">;

export type SimpleListType = {
  label: string;
  content: string;
};
