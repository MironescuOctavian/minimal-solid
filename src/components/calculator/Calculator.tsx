import { createSignal } from "solid-js";

import { type CalculatorValues } from "#components/calculator/calculator.types";
import { type CalculatorLabels } from "#components/calculator/calculator.types";

export default function Calculator(props: { values: CalculatorValues; labels: CalculatorLabels }) {
  const [value1, setValue1] = createSignal(props.values.value1 ?? 0);
  const [value2, setValue2] = createSignal(props.values.value2 ?? 0);
  const [result, setResult] = createSignal(props.values.result ?? 0);

  return (
    <div>
      <label>
        {props.labels.label1 ?? "Value 1"}
        <input
          type="number"
          value={value1()}
          onInput={(e) => setValue1(e.currentTarget.valueAsNumber)}
        ></input>
      </label>
      <label>
        {props.labels.label2 ?? "Value 2"}
        <input
          type="number"
          value={value2()}
          onInput={(e) => setValue2(e.currentTarget.valueAsNumber)}
        ></input>
      </label>
      <button type="button" onClick={() => setResult(value1() + value2())}>
        +
      </button>
      <button type="button" onClick={() => setResult(value1() - value2())}>
        -
      </button>
      <button type="button" onClick={() => setResult(value1() * value2())}>
        *
      </button>
      <button type="button" onClick={() => setResult(value1() / value2())}>
        /
      </button>
      <span> = </span>
      <span> {result()}</span>
    </div>
  );
}
