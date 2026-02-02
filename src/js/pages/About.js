
import { loremIpsum } from "lorem-ipsum";

export default function About(){
    return (
        <>
            <h1>О нас</h1>
            <p>{loremIpsum({count: 5})}</p>
        </>
    )
}