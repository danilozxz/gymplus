import heroImg from '@/assets/new-life/hero.png';
import heroDesktop from '@/assets/new-life/heroDesktop.png';
import verificado from '@/assets/new-life/verificado.png';
import { ButtonGreen } from './ButtonGreen';

export const NewLife = () => {

    const data = [
        { id: 1, label: 'Personais especializados' },
        { id: 2, label: 'Acompanhamento individual  (plano gold)' },
        { id: 3, label: 'Espaço organizado' }
    ]

    return (
        <section>
            <div className='xl:px-28'>
                <div className='bg-[#181616] px-6 mt-16 xl:flex xl:flex-row-reverse xl:justify-between xl:px-0'>
                    <div className='flex flex-col items-center xl:items-start'>
                        <h2 className='text-white text-2xl text-center font-bold pt-8 xl:text-4xl'>Inicie uma mudança física e mental</h2>
                        <ul className='my-10'>
                            {data.map(item => (
                                <div className='flex gap-3 mt-6 items-center'>
                                    <img src={verificado.src} alt="Ícone de verificado" />
                                    <li key={item.id}>{item.label}</li>
                                </div>
                            ))}
                        </ul>
                        <div className='flex justify-center mb-10'>
                            <ButtonGreen children='Iniciar' />
                        </div>
                    </div>
                    <div className='flex justify-center pb-10 xl:pb-0 '>
                        <img src={heroImg.src} alt="Mulher levantando alteres na academia" className='xl:hidden' />
                        <img src={heroDesktop.src} alt="Mulher levantando alteres na academia" className='hidden xl:block' />
                    </div>
                </div>
            </div>
        </section>
    )
}