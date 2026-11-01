import type { ParentProps } from "solid-js";

export default function AppLayout(props: ParentProps) {
  return (
    <>
      <main>{props.children}</main>
    </>
  );
}
