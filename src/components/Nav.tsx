import { ButtonGreen } from "./ButtonGreen"
import menuHamburguer from '@/assets/nav/menu.png'

export const Nav = () => {


    const handleClick = () => {
        const nav = document.getElementById('nav')
        if (nav?.classList.contains('hidden')) {
            nav?.classList.remove('hidden')
            setTimeout(() => {
                nav.classList.remove('opacity-0');
                nav.classList.add('opacity-100');
            }, 50)
        } else {
            nav?.classList.add('hidden')
            nav?.classList.remove('flex')
            nav?.classList.remove('opacity-100');
                nav?.classList.add('opacity-0');
                setTimeout(() => {
                    nav?.classList.add('hidden');
                }, 500)
        }
    }

    

    return (
        <header className='bg-[#181616] xl:px-28 xl:bg-[#110F0F]'>
            <div className="flex justify-between items-center px-6 py-2 xl:hidden">
                <p className='text-3xl font-bold text-white'>GYMPLUS</p>
                <div className="cursor-pointer botao" onClick={handleClick}>
                    <img src={menuHamburguer.src} alt="" className="w-8 h-8" />
                </div>
            </div>
            <nav id="nav" className='hidden transition-opacity opacity-0 duration-300 xl:opacity-100 xl:flex justify-between items-center xl:py-2 xl:bg-[#110F0F]'>
                <p className='hidden xl:inline-block text-6xl text-white font-bold'>GYMPLUS</p>
                <div className='bg-[#181616] rounded-b-lg flex flex-col w-1/2 h-1/2 absolute right-0 xl:rounded-none xl:w-auto xl:static xl:h-auto xl:flex-row xl:gap-28 xl:bg-transparent items-center'>
                    <ul className='flex flex-col justify-around h-1/2 gap-12 xl:h-auto xl:flex-row xl:gap-6'>
                        <a href="#planos"><li className='text-white font-medium transition-all ease-linear hover:text-[#1FAF54]'>Planos</li></a>
                        <a href="#modalidades"><li className='text-white font-medium transition-all ease-linear hover:text-[#1FAF54]'>Modalidades</li></a>
                        <a href="#contato"><li className='text-white font-medium transition-all ease-linear hover:text-[#1FAF54]'>Contato</li></a>
                    </ul>
                    <div className='flex flex-col justify-around items-center h-[40%] gap-4 mt-4 xl:mt-0 xl:flex-row'>
                        <button className='border px-6 py-2 rounded-lg font-semibold text-[18px] text-white transition-all ease-linear hover:bg-[#ffffff17]'>Login</button>
                        <ButtonGreen children='Registrar' />
                    </div>
                </div>
            </nav>
        </header>
    )
}