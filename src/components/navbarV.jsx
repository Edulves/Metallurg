const NavbarV = () => {
    return (
        <aside class="w-64 border-r border-metallurg-surface-bright bg-metallurg-navy hidden  max-h-screen lg:flex flex-col py-6">
            <nav class="flex-1 px-4 space-y-2 text-lg">
                <a class="flex items-center gap-3 px-3 py-2 rounded bg-metallurg-surface-bright text-metallurg-orange font-medium" href="#">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                        ></path>
                    </svg>
                    Dashboard
                </a>
                <a class="flex items-center gap-3 px-3 py-2 rounded hover:bg-metallurg-surface transition-colors" href="#">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                    Histórico
                </a>
                <a class="flex items-center gap-3 px-3 py-2 rounded hover:bg-metallurg-surface transition-colors" href="#">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                        ></path>
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                    Configurações
                </a>
            </nav>
            <div class="px-4 py-4 border-t border-metallurg-surface-bright mt-auto">
                <p class="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">Sistema</p>
                <div class="p-3 bg-metallurg-surface-bright/20 rounded-md border border-metallurg-surface-bright">
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-[10px] text-gray-400">Status da API</span>
                        <span class="w-2 h-2 rounded-full bg-green-500"></span>
                    </div>
                    <div class="text-[11px] text-gray-300">V. 2.4.0-Stable</div>
                </div>
            </div>
        </aside>
    );
};

export default NavbarV;
