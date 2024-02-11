
import { Swiper, SwiperSlide } from 'swiper/react'

import { register } from 'swiper/element/bundle'
register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

export const Modalidades = () => {

    const data = [
        { id: 1, title: 'Musculação', desc: `Potencialize seu corpo na musculação! Com equipamentos de qualidade e orientação profissional, fortaleça seus músculos e melhore sua saúde.` },
        { id: 2, title: 'Funcional', desc: `Supere-se com nosso treino funcional! Equipamentos modernos e orientação especializada para fortalecer seu corpo.` },
        { id: 3, title: 'Natação', desc: `Explore os benefícios da natação! Instrutores experientes e uma piscina de qualidade para aprimorar suas habilidades e promover seu bem-estar.` },
        { id: 4, title: 'Ritmos', desc: `Sinta a energia das aulas de ritmos! Música contagiante e movimentos divertidos para um exercício animado e eficaz.` },
    ]
    return (
        <section id='modalidades'>
            <div className='px-6 flex flex-col items-center gap-12 mb-24 xl:px-28 xl:grid'>
                <h2 className='w-full text-white text-2xl text-center font-bold xl:text-4xl xl:text-start'>Nossas modalidades</h2>

                {/* Mobile */}
                <div className='xl:hidden'>
                    <Swiper
                        slidesPerView={1}
                        pagination
                        className='custom-swiper-pagination max-w-[264px] sm:max-w-[380px]'

                    >
                        {
                            data.map(item => (
                                <SwiperSlide key={item.id}>
                                    <div className='bg-[#181616] max-w-full mx-4 h-[260px] p-6 rounded-2xl mb-12'>
                                        <h3 className='text-white text-xl font-bold text-center'>{item.title}</h3>
                                        <p className='text-[#808080] font-bold mt-4'>{item.desc}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>

                {/* Desktop */}
                <div className='hidden xl:grid xl:grid-cols-4 gap-8'>
                    {
                        data.map(item => (

                    <div className='bg-[#181616]  min-w-60 h-[260px] p-6 rounded-2xl 2xl:min-w-72'>
                        <h3 className='text-white text-2xl font-bold text-center'>{item.title}</h3>
                        <p className='text-[#808080] font-bold mt-4 w-full'>{item.desc}</p>
                    </div>
                    ))
                    }
                    
                </div>

            </div>
        </section>
    )
}