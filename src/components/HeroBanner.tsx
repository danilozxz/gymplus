import heroImageMobile from '@/assets/hero-banner/HeroImageMobile.png'
import heroImageDesktop from '@/assets/hero-banner/HeroImageDesktop.png'
import { ButtonGreen } from './ButtonGreen'

export const HeroBanner = () => {
    return (
        <section>
            <div className="px-6 xl:px-28">
                <header className='hidden xl:block'>
                    <nav className='flex justify-between items-center py-2'>
                        <p className='text-6xl'>GYM+</p>
                        <div className='flex gap-28 items-center'>
                            <ul className='flex gap-6'>
                                <a href="#"><li className='text-white font-medium'>Planos</li></a>
                                <a href="#"><li className='text-white font-medium'>Modalidades</li></a>
                                <a href="#"><li className='text-white font-medium'>Contato</li></a>
                            </ul>
                            <div className='flex gap-4'>
                                <button className='border px-6 rounded-lg font-semibold text-[18px] transition-all ease-linear hover:bg-[#ffffff17]'>Login</button>
                                <ButtonGreen children='Registrar'/>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="flex flex-col gap-12 items-center xl:flex-row xl:justify-between">
                    <div className='xl:max-w-[720px] xl:min-w-[480px]'>
                        <h1 className='text-4xl font-bold xl:text-6xl'>Helps for your ideal body fitness</h1>
                        <p className='text-xl text-[#808080] mt-6'>Lorem teste parágrafo de teste para a page Lorem teste parágrafo de teste para a pageLorem teste parágrafo de teste</p>
                    </div>
                    <div>
                        <img src={heroImageDesktop.src} alt="Homem e mulher levantando alteres" className='xl:min-w-[480px]' />
                    </div>
                </div>
            </div>
        </section>
    )
}