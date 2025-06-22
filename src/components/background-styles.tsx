"use client"

export default function BackgroundStyles() {
    return (
        <style jsx global>{`
            @keyframes float-slow {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-15px) rotate(180deg); }
            }
            
            @keyframes float-random {
                0%, 100% { transform: translateY(0px) translateX(0px); }
                25% { transform: translateY(-20px) translateX(10px); }
                50% { transform: translateY(-10px) translateX(-15px); }
                75% { transform: translateY(-25px) translateX(5px); }
            }
            
            @keyframes pulse-slow {
                0%, 100% { opacity: 0.3; transform: scale(1); }
                50% { opacity: 0.1; transform: scale(1.1); }
            }
            
            @keyframes grid-move {
                0% { transform: translate(0, 0); }
                100% { transform: translate(50px, 50px); }
            }
            
            .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
            .animate-float-random { animation: float-random 4s ease-in-out infinite; }
            .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
            .animate-grid-move { animation: grid-move 20s linear infinite; }
            
            .animation-delay-1000 { animation-delay: 1s; }
            .animation-delay-2000 { animation-delay: 2s; }
            .animation-delay-3000 { animation-delay: 3s; }
        `}</style>
    )
}
