interface Props {
  images: string[]
  type: 'desktop' | 'mobile' | 'both'
}

const ImageStack = (props: Props) => {
  return (
    <div className='img relative !h-5/6'>
      {props.images.map((img, index) => {
        let transformArgs = ''
        let transformOrigin = 'origin-center'
        let zIndex = ''
        let bgPosition = 'bg-center'

        if (props.type === 'desktop') {
          if (props.images.length === 2) {
            transformArgs = 'transform scale-[0.85]'
            if (index === 0) {
              transformOrigin = 'origin-top-left'
              zIndex = 'z-10'
            } else {
              transformOrigin = 'origin-bottom-right'
              zIndex = 'z-1'
            }
          } else if (props.images.length === 3) {
            transformArgs = 'transform scale-[0.7]'
            if (index === 0) {
              zIndex = 'z-20'
            } else if (index === 1) {
              transformOrigin = 'origin-top-left'
              zIndex = 'z-10'
            } else {
              transformOrigin = 'origin-bottom-right'
              zIndex = 'z-1'
            }
          }
        } else if (props.type === 'mobile') {
          if (props.images.length === 2) {
            transformArgs = 'transform scale-[0.85]'
            if (index === 0) {
              transformOrigin = 'origin-top-left'
              zIndex = 'z-10'
            } else {
              transformOrigin = 'origin-bottom-right'
              zIndex = 'z-1'
            }
          } else if (props.images.length === 3) {
            if (index === 0) {
              zIndex = 'z-20'
            } else if (index === 1) {
              transformOrigin = 'origin-left'
              zIndex = 'z-10'
              transformArgs = 'transform scale-[0.7]'
              bgPosition = 'bg-[center_left_4rem]'
            } else {
              transformOrigin = 'origin-right'
              zIndex = 'z-1'
              transformArgs = 'transform scale-[0.7]'
              bgPosition = 'bg-[center_right_4rem]'
            }
          }
        } else if (props.type === 'both') {
          if (props.images.length === 2) {
            if (index === 0) {
              transformArgs = 'transform scale-[0.85]'
              transformOrigin = 'origin-bottom-right'
              zIndex = 'z-10'
              bgPosition = 'bg-[center_right_6rem]'
            } else {
              bgPosition = 'bg-top'
              transformOrigin = 'origin-top'
              zIndex = 'z-1'
            }
          }
        }

        return (
          <div
            className={`absolute ${bgPosition} ${transformArgs} ${transformOrigin} ${zIndex} flex w-full h-full bg-contain bg-no-repeat drop-shadow-lg`}
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
