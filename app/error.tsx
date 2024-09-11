'use client'

import React from 'react'

interface Props {
    error: Error
    reset: () => void
}

const Error = ({ error, reset }: Props) => {
    console.log('Error', error)

  return (
    <div>
        <p>An unexpected error occurred</p>
        <button className='btn btn-primary' onClick={() => reset()}>Retry</button>
    </div>
  )
}

export default Error