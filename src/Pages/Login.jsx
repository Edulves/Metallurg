const Login = () => {
    return (
        <div className="bg-metallurg-navy text-on-surface min-h-screen">
            <div className="flex min-h-screen">
                <section className="w-full space-y-6 md:w-120 lg:w-140 flex flex-col justify-center px-lg relative">
                    <div className="max-w-100 w-full mx-auto">
                        <header className="mb-lg">
                            <h2 className="text-[32px] text-on-surface mb-xs leading-10 tracking-[-0.01em] font-semibold">Acesso ao Portal</h2>
                            <p className="text-on-surface-variant">Entre com suas credenciais para gerenciar especificações técnicas.</p>
                        </header>
                        <form className="space-y-md">
                            <div className="space-y-xs">
                                <label className="text-xs font-semibold leading-4 tracking-wider  block">E-MAIL CORPORATIVO</label>
                                <div className="relative group">
                                    <div className="text-2xl">
                                        <span class="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
                                            mail
                                        </span>
                                    </div>
                                    <input
                                        className="w-full bg-surface-container-low border border-outline-variant text-on-surface py-md pl-xl pr-md rounded focus:ring-2 focus:ring-metallurg-orange  transition-all placeholder:text-surface-variant focus:outline-none"
                                        placeholder="nome@metallurg-x.com"
                                        type="email"
                                    />
                                </div>
                            </div>
                            <div className="space-y-xs">
                                <div className="flex justify-between">
                                    <label className="text-xs font-semibold uppercase text-on-surface tracking-widest">Senha de segurança</label>
                                    <a className="text-xs leading-4 tracking-wider font-semibold hover:text-metallurg-orange text-primary">
                                        Recupear Acesso
                                    </a>
                                </div>
                                <div className="relative">
                                    <div className="text-2xl">
                                        <span class="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
                                            lock
                                        </span>
                                    </div>
                                    <input
                                        className="w-full bg-surface-container-low border border-outline-variant text-on-surface py-md pl-xl pr-md rounded focus:ring-2 focus:ring-metallurg-orange  transition-all placeholder:text-surface-variant focus:outline-none"
                                        placeholder="••••••••"
                                        type="email"
                                    />
                                </div>
                            </div>
                            <button
                                className="bg-metallurg-orange w-full text-on-primary-container flex  justify-center items-center py-md leading-7 tracking-wider text-base rounded-lg hover:brightness-110 gap-xs active:scale-[0.98] transition-all shadow-lg shadow-metallurg-orange/20"
                                type="submit"
                            >
                                <div className="text-2xl flex justify-center">
                                    <span className="material-symbols-outlined">login</span>
                                </div>
                                AUTENTICAR
                            </button>
                        </form>
                        <footer class="mt-xl pt-lg border-t border-outline-variant">
                            <p
                                class="text-xs font-semibold text-on-surface-variant 
                            text-center"
                            >
                                © 2026 METALLURG-X INDUSTRIAL SYSTEMS. <br />
                                Acesso monitorado e protegido por criptografia.
                            </p>
                        </footer>
                    </div>
                </section>
                <section className="w-full flex-1 flex bg-surface-container-lowest items-center justify-center overflow-hidden">
                    <div className="text-center px-xl">
                        <div className="inline-block px-md py-xs border border-primary rounded-full mb-md glass-panel">
                            <span className="text-xs leading-4 tracking-[0.2em] uppercase font-semibold text-primary">V.4.2 Engine Analysis</span>
                        </div>
                        <h1 className="text-5xl font-bold tracking-tighter mb-sm">METALLURG-X</h1>
                        <div className="h-1 w-30 bg-metallurg-orange mx-auto mb-lg"></div>
                        <p className="max-w-120 text-secondary opacity-80 leading-relaxed text-lg">
                            A precisão da engenharia aliada à inteligência de dados para o setor metalúrgico pesado.
                        </p>
                        <div className="mt-xl flex gap-md justify-center">
                            <div className="glass-panel px-6 py-6 rounded-xl text-left min-w-35">
                                <div className="text-primary text-[10px] uppercase font-bold tracking-widest mb-1">Status</div>
                                <div className="flex items-center gap-2">
                                    <div class="w-2 h-2 rounded-full bg-tertiary animate-pulse"></div>
                                    <span class="text-xs leading-4 font-semibold text-on-surface tracking-wider">ONLINE</span>
                                </div>
                            </div>
                            <div className="glass-panel px-6 py-6 rounded-xl text-left min-w-35">
                                <div className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1">Database</div>
                                <div className="flex items-center gap-2">
                                    <div className="text-[14px]">
                                        <span className="material-symbols-outlined text-primary">database</span>
                                    </div>
                                    <span className="text-xs font-semibold tracking-widest text-on-surface">SYNCED</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute bottom-0 right-0 overflow-hidden opacity-10 text-[300px]">
                        <span class="material-symbols-outlined overflow-hidden translate-x-35 translate-y-65 text-on-surface-variant">
                            settings_suggest
                        </span>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Login;
