
const Cover = ({image, title}) => {
    return (
        <div
            className="hero h-[600px]"
            style={{
                backgroundImage: `url('${image}')`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md px-10 rounded-2xl bg-[#333333] opacity-65">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cover;