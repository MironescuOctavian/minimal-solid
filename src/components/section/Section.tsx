import type { JSX } from "@solidjs/web";

interface SectionProps {
  namedSlot: JSX.Element;
  children?: JSX.Element;
}

export default function Section(props: SectionProps) {
  return (
    <section>
      <div>{props.namedSlot}</div>
      <div>{props.children ?? "Random"}</div>
    </section>
  );
}
