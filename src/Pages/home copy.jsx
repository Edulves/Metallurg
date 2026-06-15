import { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import Sucess from "../components/sucess";
import NavBarH from "../components/navbarH";
import NavbarV from "../components/navbarV";

const Home = () => {
    const [pdf, setPdf] = useState(null);
    const [showButton, setShowButton] = useState(false);
    const [responseData, setResponseData] = useState(null);
    const [showSucess, setShowSucess] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const inputRef = useRef(null);

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];

        if (file && file.type === "application/pdf") {
            setPdf(file);
            setShowButton(true);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const enviarDados = async () => {
        try {
            const formData = new FormData();

            formData.append("pdf", pdf);

            const response = await fetch("http://localhost:5678/webhook-test/teste", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            setResponseData(data.mensagem);
            setShowSucess(true);
        } catch (error) {
            console.error("Erro:", error);
        }
    };

    const selecionarArquivo = () => {
        inputRef.current.click();
    };

    const handleFileChange = (event) => {
        const arquivo = event.target.files[0];
        setPdf(arquivo);
        handleShowButton();
    };

    const handleShowButton = () => {
        if (!(inputRef == null)) setShowButton(true);
        else setShowButton(false);
    };

    return (
        <body className="bg-metallurg-navy text-metallurg-text font-sans overflow-hidden flex flex-col h-full">
            <NavBarH />
            <div className="flex flex-1 overflow-hidden">
                <NavbarV />
                <main className="flex-1 relative overflow-y-auto bg-dot-pattern">
                    <div className="flex flex-col items-center max-w-7xl mx-auto">
                        <div
                            className={`px-margin transition-all duration-3000 ease-in-out ${
                                !responseData ? "max-h-1500 opacity-100 translate-y-0 py-xl" : "max-h-0 opacity-0 -translate-y-40 py-0"
                            }`}
                        >
                            <div className="mb-lg flex flex-col sm:flex-row sm:items-end justify-between gap-md">
                                <div>
                                    <h1 className="text-5xl leading-14 tracking-[-0.02em] font-bold text-on-surface mb-xs">
                                        Análise de Especificações Técnicas
                                    </h1>
                                    <p className="text-lg text-on-surface-variant max-w-2xl">
                                        Processamento automatizado de informações como tolerâncias térmicas e normas industriais via IA.
                                    </p>
                                </div>
                                <div className="flex gap-xs">
                                    <span className="flex items-center gap-xs px-sm py-base bg-tertiary/10 text-tertiary border border-tertiary/20 rounded-full text-label-md text-xs leading-4 tracking-wider font-semibold">
                                        <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                                        System Operational
                                    </span>
                                </div>
                            </div>
                            <div
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                className="grid grid-cols-12 gap-gutter"
                            >
                                <section className="col-span-12 lg:col-span-12 space-y-gutter">
                                    <div
                                        className={`relative group h-100 bg-surface-container border-2 border-dashed border-outline-variant rounded-xl transition-all duration-300 flex flex-col items-center justify-center p-xl overflow-hidden         ${
                                            isDragging
                                                ? "border-primary bg-primary-container/10"
                                                : "border-outline-variant hover:border-primary-container"
                                        }`}
                                    >
                                        <div
                                            className={`absolute inset-0 bg-primary-container/5 opacity-0  transition-opacity ${isDragging ? "opacity-100" : "group-hover:opacity-100"}`}
                                        ></div>
                                        <div className="z-10 text-center">
                                            <div
                                                className={`w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-lg border border-outline-variant  transition-transform text-5xl duration-300 ${isDragging ? "scale-110 " : "group-hover:scale-110"}`}
                                            >
                                                <span className="material-symbols-outlined  text-primary-container">picture_as_pdf</span>
                                            </div>
                                            <h3 className="text-2xl leading-8 font-semibold text-on-surface mb-sm">Arraste seus PDFs aqui</h3>
                                            <p className="text-base leading-6 font-normal text-on-surface-variant mb-xl max-w-96 mx-auto">
                                                Máximo 50MB por arquivo.
                                            </p>
                                            <div>
                                                <input
                                                    ref={inputRef}
                                                    type="file"
                                                    accept=".pdf"
                                                    style={{ display: "none" }}
                                                    onChange={handleFileChange}
                                                />
                                                <button
                                                    className={`bg-primary-container text-on-primary font-bold py-md px-xl rounded-lg shadow-lg transition-all active:scale-95 hover:shadow-primary-container/20 ${showButton ? "hidden" : ""}`}
                                                    onClick={selecionarArquivo}
                                                >
                                                    Selecionar Arquivo
                                                </button>
                                                <button
                                                    className={`bg-primary-container text-on-primary font-bold py-md px-xl rounded-lg shadow-lg hover:shadow-primary-container/20 transition-all active:scale-95 ${showButton ? "" : "hidden"}`}
                                                    onClick={enviarDados}
                                                >
                                                    Enviar para analise
                                                </button>
                                                {pdf && <p>{pdf.name}</p>}
                                            </div>
                                        </div>
                                        <div className="absolute bottom-[-50%] right-[-5%] opacity-5 group-hover:opacity-10 transition-opacity text-[380px]">
                                            <span className="material-symbols-outlined ">factory</span>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div
                            className={`px-margin py-xl transition-all duration-3000 ease-in-out ${
                                responseData ? "max-h-1500 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
                            }`}
                        >
                            <div className="bg-surface-container border border-outline-variant rounded-xl">
                                <div className="bg-surface-container-high px-md py-sm rounded-t-xl border-b border-outline-variant flex items-center justify-between">
                                    <div className="flex items-center gap-xs">
                                        <div className="text-[25px] flex items-center bg-primary-container/20 p-1.5 rounded">
                                            <span className="material-symbols-outlined text-primary-container ">article</span>
                                        </div>
                                        <span className="text-lg font-bold text-on-surface">RESUMO TÉCNICO ESTRUTURADO</span>
                                    </div>
                                    <div className="flex items-center gap-xs">
                                        <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                                        <span className="text-xs font-bold text-green-500 tracking-widest uppercase">Validado</span>
                                    </div>
                                </div>
                                <div
                                    className={`flex-1 p-md technical-scroll overflow-y-auto bg-[#0F172A] font-mono leading-relaxed  rounded-b-xl
                        id="summary-content`}
                                >
                                    <div className={`prose max-w-none`}>
                                        <ReactMarkdown>{responseData}</ReactMarkdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Sucess show={showSucess} onClose={() => setShowSucess(false)} />
                </main>
            </div>
        </body>
    );
};

export default Home;
