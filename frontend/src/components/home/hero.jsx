import { Button } from '../common'
import ButtonLink from '../common/buttonLink'

const Hero = () => {
  return (
    <div className="relative bg-white  pb-[110px] lg:pt-[100px] px-20">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content pt-11">
              <h1 className="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">WllnessRoots</h1>
              <p className="mb-8 max-w-[480px] text-base text-body-color">Discover the power of nature with WellnessRoots: Your trusted source for Ayurvedic remedies and natural wellness products.</p>
              <ul className="flex flex-wrap items-center">
                <li>
                  <ButtonLink className="font-bold text-lg ">SHOP NOW!</ButtonLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12" />
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block  lg:pt-0">
                <img src="/assets/images/image_1.png" alt="hero" className="w-[31rem] lg:ml-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
;<></>
