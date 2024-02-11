
import heroImageMobile from '@/assets/hero-banner/HeroImageMobile.png'
import heroImageDesktop from '@/assets/hero-banner/HeroImageDesktop.png'


export const HeroBanner = () => {
    return (
        <section>
            <div className="px-6 my-24 xl:px-28">
                <div className="flex flex-col gap-12 items-center xl:flex-row xl:justify-between ">
                    <div className='xl:max-w-[720px] xl:min-w-[480px]'>
                        <h1 className='text-white text-4xl font-bold xl:text-6xl '>A academia ideial para você iniciar no mundo fitnes</h1>
                        <p className='text-xl text-[#808080] mt-6'>Aqui você tem acesso aos melhores equipamentos da indústria da musculação. Além disso, você pode contar com o empenho dos nossos profissionais, que se dedicam todos os dias para melhorar tanto a saúde física quanto a saúde mental dos nossos alunos. </p>
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