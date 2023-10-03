import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, restart } = useCounter();

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>

            <hr />

            <button className="btn btn-primary" onClick={() => decrement(2)}>{ /* el callback es debido al object Object */}
                -1
            </button>
            <button className="btn btn-primary" onClick={restart}>
                Reset
            </button>
            <button className="btn btn-primary" onClick={() => increment(2)}> { /* el callback es debido al object Object */}
                +1
            </button>
        </>
    )
}
