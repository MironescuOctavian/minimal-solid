import { createSignal, Show, For } from "solid-js";

interface FruitBasketProps {
    fruits?: string[]
}


export default function FruitBasket(props : FruitBasketProps){
    const [fruits] = createSignal(props.fruits ?? ["Magical Fruit", "Delicious Fruit"]);
    return(
        <ul>
            <Show when={fruits().length === 0}>
                <span>No fruit.</span>
            </Show>
            <For each ={fruits()}>
                {(fruitArray, index) => (
                    <li>
                        {fruitArray} - {index()}
                    </li>
                )}
            </For>
        </ul>

    )
}