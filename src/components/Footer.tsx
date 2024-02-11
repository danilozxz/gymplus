import instagram from '@/assets/footer/Vector.png'
import linkedin from '@/assets/footer/linkedinIcon.png'


export const Footer = () => {
    return (
        <footer className='border-t'>
            <div className='flex flex-col items-center text-center gap-8 py-8 xl:px-28 xl:flex-row xl:justify-between'>
                <div className='text-white'>
                    <p className="font-bold text-lg">Gymplus</p>
                    <p className='w-[200px]'>Projeto desenvolvido para por em prática os meus conhecimentos em react e tailwindcss</p>
                </div>

                <div className='flex flex-col gap-8 xl:flex-row xl:gap-16'>
                    <div className='flex flex-col gap-2 text-white'>
                        <p className="font-bold text-lg">Desenvolvedor:</p>
                        <p className="font-medium">Danilo Fernandes</p>
                    </div>

                    <div className='text-white'>
                        <p className="font-bold text-lg">Minhas redes:</p>
                        <div className='flex justify-around mt-2'>
                            <a href="https://instagram.com/danilo.zxz" target='_blank'><img src={instagram.src} alt="" className='w-8 h-8'/></a>
                            <a href="https://www.linkedin.com/in/dev-danilo-fernandes/" target='_blank'><img src={linkedin.src} alt="" className='w-8 h-8' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}