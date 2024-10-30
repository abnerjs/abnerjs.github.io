import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import './base.css'
import me from 'src/assets/images/eu.png'
import MagneticButton from 'src/components/MagneticButton/MagneticButton'
import { Icon } from '@iconify/react'

const Base = () => {
  const onDownload = () => {
    const link = document.createElement('a')
    link.download = `AbnerCurriculum.pdf`
    link.href = './AbnerCurriculumVitae.pdf'
    link.click()
  }
  return (
    <div className='base'>
      <ParallaxBanner className='banner-container'>
        <ParallaxBannerLayer className='background'></ParallaxBannerLayer>
        <ParallaxBannerLayer className='title'>
          <div className='text'>
            ABNER J SILVA ABNER J SILVA ABNER J SILVA ABNER J SILVA&nbsp;
          </div>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer
          translateY={[0, 30]}
          image={me}
          className='me'
        ></ParallaxBannerLayer>
        <ParallaxBannerLayer>
          <div className='text-banner'>
            <div className='left'>
              ABNER JOSÉ
              <br />
              DA SILVA
            </div>
          </div>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer>
          <div className='btn-controller'>
            <MagneticButton
              onClick={onDownload}
              endIcon={
                <Icon
                  width={30}
                  icon='bi:download'
                />
              }
              className='btn-curriculum'
            >
              baixar currículo
            </MagneticButton>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  )
}

export default Base
