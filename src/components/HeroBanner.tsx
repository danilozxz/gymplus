
import heroImageMobile from '@/assets/hero-banner/HeroImageMobile.png'
import heroImageDesktop from '@/assets/hero-banner/HeroImageDesktop.png'


export const HeroBanner = () => {
    return (
        <section>
            <div className="px-6 my-24 xl:px-28">
                <div className="flex flex-col gap-12 items-center xl:flex-row xl:justify-between ">
                    <div className='xl:max-w-[720px] xl:min-w-[480px]'>
                        <h1 className='text-white text-4xl font-bold xl:text-6xl'>Helps for your ideal body fitness</h1>
                        <p className='text-xl text-[#808080] mt-6'>Lorem teste parágrafo de teste para a page Lorem teste parágrafo de teste para a pageLorem teste parágrafo de teste</p>
                    </div>
                    <div>
                        <img src={heroImageMobile.src} alt="Homem e mulher levantando alteres" className='xl:hidden' />
                        <img src={heroImageDesktop.src} alt="Homem e mulher levantando alteres" className='hidden xl:block xl:min-w-[480px]' />
                    </div>
                </div>
            </div>
        </section>
    )
}