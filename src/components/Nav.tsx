import { ButtonGreen } from "./ButtonGreen"
import menuHamburguer from '@/assets/nav/menu.png'

export const Nav = () => {


    const handleClick = () => {
        const nav = document.getElementById('nav')
        if (nav?.classList.contains('hidden')) {
            nav?.classList.remove('hidden')
        } else {
            nav?.classList.add('hidden')
            nav?.classList.remove('flex')
        }
    }

    

    return (
        <header className='bg-[#181616] xl:px-28 xl:bg-[#110F0F] '>
            <div className="flex justify-between items-center px-6 py-2 xl:hidden">
                <p className='text-3xl font-bold text-white'>GYMPLUS</p>
                <div className="cursor-pointer botao" onClick={handleClick}>
                    <img src={menuHamburguer.src} alt="" className="w-8 h-8" />
                </div>
            </div>
            <nav id="nav" className='hidden xl:flex justify-between items-center py-2 xl:bg-[#110F0F]'>
                <p className='hidden xl:inline-block text-6xl text-white font-bold'>GYMPLUS</p>
                <div className='flex flex-col xl:flex-row xl:gap-28 items-center'>
                    <ul className='flex flex-col gap-4 xl:flex-row xl:gap-6'>
                        <a href="#planos"><li className='text-white font-medium transition-all ease-linear hover:text-[#1FAF54]'>Planos</li></a>
                        <a href="#modalidades"><li className='text-white font-medium transition-all ease-linear hover:text-[#1FAF54]'>Modalidades</li></a>
                        <a href="#contato"><li className='text-white font-medium transition-all ease-linear hover:text-[#1FAF54]'>Contato</li></a>
                    </ul>
                    <div className='flex flex-col mt-4 gap-4 xl:mt-0 xl:flex-row'>
                        <button className='border px-6 py-2 rounded-lg font-semibold text-[18px] text-white transition-all ease-linear hover:bg-[#ffffff17]'>Login</button>
                        <ButtonGreen children='Registrar' />
                    </div>
                </div>
            </nav>
        </header>
    )
}