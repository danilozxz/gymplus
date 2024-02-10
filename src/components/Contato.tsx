
export const Contato = () => {
    return (
        <section className="xl:px-28">
            <div className="bg-[#1FAF54] xl:rounded-2xl py-8">
                <h2 className='text-white text-2xl text-center font-bold px-6 pb-4'>Dúvidas? Entre em contato com a nossa equipe</h2>
                <div className="flex flex-col gap-4 max-w-[380px] mx-auto px-2 xl:px-0 xl:max-w-[600px]">
                    <input
                        type="text"
                        placeholder="Digite o seu e-mail"
                        className="outline-none rounded-lg text-black p-2"
                    />
                    <textarea
                        name=""
                        id=""
                        placeholder="Digite a sua dúvida"
                        className="text-black outline-none rounded-lg p-2">
                    </textarea>
                    <button className="text-white bg-[#000000] font-semibold text-[18px] py-2 px-6 rounded-lg transition-all ease-linear hover:bg-[#171717] btnBlack">Enviar dúvida</button>
                </div>
            </div>
        </section>
    )
}