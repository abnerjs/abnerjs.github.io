interface Props {
  images: string[]
  type: 'desktop' | 'mobile' | 'both'
}

const ImageStack = (props: Props) => {
  return (
    <div className='img relative justify-center items-center flex flex-col'>
      {props.images.map((img, index) => (
        <div
          className={`absolute left-[${index * 100}px] z-[${
            10 * index
          }] flex w-full h-full bg-contain bg-no-repeat bg-center`}
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
      ))}
    </div>
  )
}

export default ImageStack
