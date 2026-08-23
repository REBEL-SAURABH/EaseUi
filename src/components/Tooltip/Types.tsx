export type TooltipPosition =
  | "top"
  | "bottom"
  | "left"
  | "right";

export type TooltipVariant =
  | "dark"
  | "light"
  | "primary";

export interface TooltipProps {
  children: React.ReactNode;

  content: React.ReactNode;

  position?: TooltipPosition;

  variant?: TooltipVariant;

  delay?: number;

  disabled?: boolean;

  showArrow?: boolean;
}