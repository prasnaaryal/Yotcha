
import Image from 'next/image'
import React from 'react'

const Landing = () => {
  return (
    <div>
       {/* Background image container */}
       <div className="">
        <Image
          src="/assets/Rectangle.png"
          height={695}
          width={1440}
          alt="Background"
        />
      </div>

    </div>
  )
}

export default Landing