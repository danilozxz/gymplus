
import { Swiper, SwiperSlide } from 'swiper/react'
import { register } from 'swiper/element/bundle'
import { ButtonGreen } from './ButtonGreen'
import vericado from '@/assets/planos/verificadoBranco.png'
import { useEffect } from 'react'
register()

export const Planos = () => {


    useEffect(() => {
        const containers = document.querySelectorAll('.mudaCores');

        containers.forEach((container) => {
            const titulo = container.querySelector('.mudaCorTitulo');
            const btnGreen = container.querySelector('.btnGreen');
            const btnBlack = container.querySelector('.btnBlack');

            container.addEventListener('mouseover', function () {
                container.classList.add('hover:bg-[#1FAF54]');
                titulo?.classList.add('text-white');
                btnGreen?.classList.add('hidden');
                btnBlack?.classList.remove('hidden');
            });

            container.addEventListener('mouseout', function () {
                container.classList.remove('hover:bg-[#1FAF54]');
                titulo?.classList.remove('text-white');
                btnGreen?.classList.remove('hidden');
                btnBlack?.classList.add('hidden');
            });
        });
    }, []);


    const data = [
        {
            id: 1,
            title: 'Essencial',
            price: 100,
            available: [
                'Acesso ilimitado à academia',
                'Musculação',
                'Ritmos 2x por semana',
                'Nutricionista 1x por mês',
                'Personal trainer'
            ]
        },

        {
            id: 2,
            title: 'Premium',
            price: 150,
            available: [
                'Acesso ilimitado à academia',
                'Musculação',
                'Ritmos 3x por semana',
                'Nutricionista 2x por mês',
                'Personal trainer',
                'Funcional',
                'Natação 2x na semana'
            ]
        },

        {
            id: 3,
            title: 'Gold',
            price: 220,
            available: [
                'Acesso ilimitado à academia',
                'Musculação',
                'Ritmos 5x por semana',
                'Nutricionista 4x por mês',
                'Personal trainer',
                'Funcional',
                'Natação 4x na semana',
                'Acompanhamento individual'
            ]
        }
    ]

    return (
        <section id='planos'>
            <div className='mb-24 xl:px-28'>
            <h2 className='w-full text-white text-2xl text-center font-bold xl:text-4xl'>Assine um dos nossos planos</h2>

                {/* Mobile */}
                <div className='mt-8'>
                    <div className='xl:hidden'>
                        <Swiper
                            slidesPerView={1}
                            pagination
                            className='custom-swiper-pagination max-w-[280px] sm:max-w-[380px]'
                        >
                            {
                                data.map(item => (
                                    <SwiperSlide key={item.id}>
                                        <div className='bg-[#181616] max-w-full mx-4 h-[700px] sm:h-[600px] p-6 rounded-2xl mb-12 relative'>
                                            <h3 className='text-[#1FAF54] text-2xl font-bold text-center'>{item.title}</h3>
                                            <div className='my-4'>
                                                <span className='text-white text-4xl font-bold'>R${item.price}</span>
                                                <p className='text-[#9A9A9A] font-medium'>Por mês</p>
                                            </div>
                                            <div>
                                                <ul className='flex flex-col gap-6'>
                                                    {item.available.map(opcao => (
                                                        <div className='flex items-center gap-2'>
                                                            <img src={vericado.src} className='w-6 h-6' />
                                                            <li className='text-white'>{opcao}</li>
                                                        </div>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className='absolute bottom-8 w-[200px] sm:w-[300px] flex justify-center'>
                                                <ButtonGreen children='Assinar plano' />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>

                    {/* Desktop */}
                    <div className='hidden xl:grid grid-cols-3 gap-8 '>
                        {data.map(item => (
                            <div className='bg-[#181616] rounded-2xl relative h-[540px] transition-all ease-linear bg-red mudaCores'>
                                <h3 className='text-[#1FAF54] text-2xl font-bold text-center py-4 mudaCorTitulo'>{item.title}</h3>
                                <div className='px-8'>
                                    <ul className='flex flex-col gap-6'>
                                        {item.available.map(opcao => (
                                            <div className='flex items-center gap-2'>
                                                <img src={vericado.src} className='w-6 h-6' />
                                                <li className='text-white font-bold'>{opcao}</li>
                                            </div>
                                        ))}
                                    </ul>
                                </div>

                                <div className='absolute bottom-8 w-full flex justify-center'>
                                    <div className='btnGreen'>
                                        <ButtonGreen children='Assinar plano' />
                                    </div>
                                    <button className="text-white bg-[#000000] font-semibold text-[18px] py-2 px-6 rounded-lg transition-all ease-linear hover:bg-[#171717] hidden btnBlack">Assinar plano</button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
