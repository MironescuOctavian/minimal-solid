import { createSignal } from "solid-js";
import styles from "./Counter.module.css";
import { type CounterProps } from "./counter.types";

export default function Counter(props: CounterProps) {
  const [counterStep, setCounterStep] = createSignal(props.counterStep ?? 0);

  return (
    <div>
      <button
        type="button"
        class={styles.counter}
        onClick={() => setCounterStep(counterStep() + (props.step ?? 1))}
      >
        Counter
      </button>
      <span class="color-amber"> {counterStep()}</span>
    </div>
  );
}
