interface Props {
  images: string[]
  type: 'desktop' | 'mobile' | 'both'
}

const ImageStack = (props: Props) => {
  return (
    <div className='image-stack'>
      <img
        src={props.images[0]}
        alt=''
      />
      <img
        src={props.images[1]}
        alt=''
      />
      <img
        src={props.images[2]}
        alt=''
      />
    </div>
  )
}

export default ImageStack
