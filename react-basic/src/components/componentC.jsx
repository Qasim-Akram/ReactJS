import { userConsumer } from "../context/contex"
export function ComponentC() {
    return (
        <>
    <div>Component C</div>
    <userConsumer>
        {(value) => <p>{value}</p>}
    </userConsumer>
    </>)
}
