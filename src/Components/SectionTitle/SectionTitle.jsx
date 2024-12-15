
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto items-center text-center pb-10 lg:w-[30%]">
            <p className='text-xl text-orange-400 font-semibold pb-2 '>---{subHeading}---</p>
            <h1 className='text-4xl font-bold uppercase border-y-4 py-6'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;