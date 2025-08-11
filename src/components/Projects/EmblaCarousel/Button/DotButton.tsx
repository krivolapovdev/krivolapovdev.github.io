import type { ComponentPropsWithRef } from "react";

type PropType = ComponentPropsWithRef<"button">;

export function DotButton({ children, ...restProps }: PropType) {
  return (
    <button
      type="button"
      {...restProps}
    >
      {children}
    </button>
  );
}
