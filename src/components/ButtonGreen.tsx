type Prop = {
    children: string
}

export const ButtonGreen = ({ children } : Prop) => {
    return (
        <button className="text-white bg-[#1FAF54] font-semibold text-[18px] py-2 px-6 rounded-lg transition-all ease-linear hover:bg-[#1faf54a5]">{children}</button>
    )
}