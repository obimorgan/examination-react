import { Image } from "react-bootstrap"
import "./Cards.css"
export const Cards = ({ id, url, author }) => {
    return (
        <>
            <Image className="img mx-2" key={id} src={url} rounded fluid />
        </>
    )
}