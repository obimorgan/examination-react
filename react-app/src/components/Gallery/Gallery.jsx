import { useEffect, useState } from "react";
import { Cards } from "../Cards/Cards"
import "./Gallery.css"

const Gallery = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch("https://picsum.photos/v2/list")
            if (response.ok) {
                const galleryInfo = await response.json()
                setData(galleryInfo)
                console.log("this is the data:", data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="heading_wrapper">
                <h1>Gallery</h1>
            </div>
            <div className="container">
                <div>
                    {data?.map(d => <Cards
                        key={d.id} url={d.download_url} author={d.author} />)}
                </div>
            </div>
        </>
    )
}

export default Gallery