const Sucess = ({ show, onClose }) => {
    return (
        <div
            className={`fixed top-24 right-8 z-50 transition-all duration-3500 ease-in-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"}`}
        >
            <div className="bg-surface-container-high border border-tertiary p-md rounded-xl shadow-2xl flex items-center gap-md">
                <div className="w-10 h-10 bg-tertiary/20 text-tertiary rounded-full flex items-center justify-center text-[24px]">
                    <span className="material-symbols-outlined">check_circle</span>
                </div>
                <div>
                    <p className="text-base leading-6 font-bold text-on-surface">Upload Concluído</p>
                    <p className="text-xs leading-4 tracking-wider font-semibold text-on-surface-variant">Arquivo pronto para análise técnica.</p>
                </div>
                <button className="text-on-surface-variant hover:cursor-pointer hover:text-on-surface ml-md text-[24px]" onClick={onClose}>
                    <span className="material-symbols-outlined ">close</span>
                </button>
            </div>
        </div>
    );
};

export default Sucess;
