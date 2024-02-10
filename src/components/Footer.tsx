import instagram from '@/assets/footer/Vector.png'
import x from '@/assets/footer/Vector-1.png'
import facebook from '@/assets/footer/Vector-2.png'


export const Footer = () => {
    return (
        <footer className='border-t mt-12'>
            <div className='flex flex-col items-center text-center gap-8 py-8 xl:px-28 xl:flex-row xl:justify-between'>
                <div className='text-white'>
                    <p className="font-bold text-lg">Gym+</p>
                    <p className='w-[200px]'>Highlight benefits of each exercise, both physical and mental</p>
                </div>

                <div className='flex flex-col gap-8 xl:flex-row xl:gap-16'>
                    <div className='flex flex-col gap-2 text-white'>
                        <p className="font-bold text-lg">Sitemap</p>
                        <p className="font-medium">About us</p>
                        <p className="font-medium">About us</p>
                        <p className="font-medium">About us</p>
                        <p className="font-medium">About us</p>
                    </div>
                    <div className='flex flex-col gap-2 text-white'>
                        <p className="font-bold text-lg">Suporte</p>
                        <p className="font-medium">FAQ</p>
                        <p className="font-medium">Support center</p>
                    </div>

                    <div className='text-white'>
                        <p className="font-bold text-lg">Social Media</p>
                        <div className='flex justify-between mt-2'>
                            <a href="#"><img src={instagram.src} alt="" /></a>
                            <a href="#"><img src={x.src} alt="" /></a>
                            <a href="#"><img src={facebook.src} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}