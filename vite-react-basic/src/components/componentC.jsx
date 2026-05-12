import { UserConsumer } from "../context/contex"
export default function ComponentC() {
    return (
        <>
    <div>Component C</div>
    <UserConsumer>
        {(value) => <p>{value}</p>}
    </UserConsumer>
    </>)
}
