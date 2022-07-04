import React from "react"

const Error = () => {
  return (
    <picture>
        <source srcSet="error.jpg"
                media="(min-width: 800px)" />
        <img src="error.jpg" alt="404 error" className="w-[70%] m-auto" />
    </picture>
  )
}
export default Error