import type { ParentProps } from "solid-js";
import { HydrationScript } from "@solidjs/web";
import "virtual:uno.css";

export default function Document(props: ParentProps) {
  return (
    <html lang="en">
      <head>
        <HydrationScript />
      </head>
      <body>{props.children}</body>
    </html>
  );
}
