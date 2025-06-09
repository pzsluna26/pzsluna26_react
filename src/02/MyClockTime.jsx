import React from 'react'

export default function MyTime() {
  return (
    <div>
      현재 시각 : {new Date().toLocaleDateString()}
    </div>
  )
}
