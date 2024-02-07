
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
        { id: 1, title: 'Musculação', desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since` },
        { id: 2, title: 'Funcional', desc: `Lorem Ipsum is simply dummy tting industry. Lorem Ipsum has been the industry's standa` },
        { id: 3, title: 'Natação', desc: `Lorem Ipsum is simply dummy tting industry. Lorem Ipsum has been the industry's standa` },
        { id: 4, title: 'Ritmos', desc: `Lorem Ipsum is simply dummy tting industry. Lorem Ipsum has been the industry's standa` },
    ]
    return (
        <section>
            <div className='px-6 mt-16 flex flex-col items-center gap-12 xl:px-28'>
                <h2 className='text-white text-2xl text-center font-bold xl:text-4xl'>Nossas modalidades</h2>
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
                <div className='hidden xl:flex xl:w-full justify-between gap-8'>
                    {
                        data.map(item => (

                    <div className='bg-[#181616] max-w-64 min-w-60 h-[260px] p-6 rounded-2xl mb-12 2xl:max-w-72 2xl:min-w-72'>
                        <h3 className='text-2xl font-bold text-center'>{item.title}</h3>
                        <p className='text-[#808080] font-bold mt-4 w-full'>{item.desc}</p>
                    </div>
                    ))
                    }
                    
                </div>


            </div>
        </section>
    )
}

