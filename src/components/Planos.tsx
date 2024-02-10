
import { Swiper, SwiperSlide } from 'swiper/react'
import { register } from 'swiper/element/bundle'
import { ButtonGreen } from './ButtonGreen'
import vericado from '@/assets/planos/verificadoBranco.png'
register()

export const Planos = () => {
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
        <section>
            <div className='my-8'>
                <h2 className='text-white text-2xl text-center font-bold px-6'>Assine um dos nossos planos</h2>
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
                </div>
            </div>
        </section>
    )
}
