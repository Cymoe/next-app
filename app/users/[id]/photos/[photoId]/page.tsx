import React from 'react'

interface PhotoDetailPageProps {
    params: {
        id: number
        photoId: number
    }
}

const PhotoDetailPage = ({ params: { id, photoId } }: PhotoDetailPageProps) => {
  return (
    <div>Photo Detail Page {id} {photoId}</div>
  )
}

export default PhotoDetailPage