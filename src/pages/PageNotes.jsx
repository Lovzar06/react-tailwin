import { useState, useEffect } from 'react'

const PageNotes = () => {
    const [photos, setPhotos] = useState([])

    const fetchPhotos = async () => {
        const url = 'https://jsonplaceholder.typicode.com/photos'
        const response = await fetch(url)
        const result = await response.json()
        setPhotos(result)
    }

    useEffect(() => {
        fetchPhotos()
    }, [])

    return (
        <>
            <h1 className="mb-10 text-center text-5xl font-medium text-purple-300">
                Photos
            </h1>
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-8 xl:grid-cols-10">
                {photos.map((photo) => {
                    return (
                        <img
                            key={photo.id}
                            alt={photo.title}
                            src={photo.thumbnailUrl}
                            className='rounded-lg'
                        />
                    )
                })}
            </div>
        </>
    )
}

export default PageNotes
