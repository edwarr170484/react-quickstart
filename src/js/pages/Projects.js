
import { loremIpsum } from "lorem-ipsum";
import { Outlet } from "react-router-dom";

export default function Projects(){
    return (
        <>
            <h1>Проекты</h1>
            <p>{loremIpsum({count: 5})}</p>
            <Outlet />
        </>
    )
}