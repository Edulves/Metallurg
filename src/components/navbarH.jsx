import { supabase } from "../../supabase";
import { useNavigate } from "react-router-dom";

const NavbarH = ({ onNovaAnalise }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate("/");
    };

    return (
        <header className="sticky top-0 z-50 h-16 border-b border-metallurg-surface-bright flex items-center justify-between px-6 bg-metallurg-navy ">
            <div className="flex items-center">
                <span className="text-xl font-bold tracking-wider font-inter leading-8 text-metallurg-orange">METALLURG-X</span>
            </div>
            <div className="flex items-center gap-10">
                <button
                    onClick={onNovaAnalise}
                    className="bg-metallurg-orange hover:bg-orange-600 text-white px-4 py-2 rounded text-sm font-semibold transition-colors flex items-center gap-2"
                >
                    <div className="text-2xl flex items-center">
                        <span class="material-symbols-outlined ">add</span>
                    </div>
                    <span className="text-sm">Nova Análise</span>
                </button>
                <button
                    onClick={handleLogout}
                    className="bg-metallurg-orange hover:bg-orange-600 text-white px-4 py-2 rounded text-sm font-semibold transition-colors flex items-center gap-2"
                >
                    <div className="text-2xl flex items-center">
                        <span class="material-symbols-outlined ">exit_to_app</span>
                    </div>
                    <span className="text-sm">Logout</span>
                </button>
            </div>
        </header>
    );
};

export default NavbarH;
