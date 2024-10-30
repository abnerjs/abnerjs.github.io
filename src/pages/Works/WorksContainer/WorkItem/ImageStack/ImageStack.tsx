import { useEffect, useState } from 'react'

interface Props {
  images: string[]
  type: 'desktop' | 'mobile' | 'both'
}

const ImageStack = (props: Props) => {
  const [transformArgs, setTransformArgs] = useState('')

  useEffect(() => {
    if (props.images.length === 2) setTransformArgs('transform scale-[0.85]')
    if (props.images.length === 3) setTransformArgs('transform scale-[0.7]')
  }, [])

  return (
    <div className='img relative'>
      {props.images.map((img, index) => {
        let transformOrigin = ''
        let zIndex = ''

        if (props.type === 'desktop') {
          if (props.images.length === 2) {
            if (index === 0) {
              transformOrigin = 'origin-top-left'
              zIndex = 'z-10'
            } else {
              transformOrigin = 'origin-bottom-right'
              zIndex = 'z-1'
            }
          }
        }

        return (
          <div
            className={`absolute ${transformArgs} ${transformOrigin} ${zIndex} flex w-full h-full bg-contain bg-no-repeat bg-center drop-shadow-lg`}
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>
        )
      })}
    </div>
  )
}

export default ImageStack
