type Bot = {
    name: string;
    description: string;
    image: string;
};

export const bots: Bot[] = [
    {
        name: "gambi",
        description: `
A Gambi é um projeto de robótica pura, desenvolvido sem qualquer programação Arduino. Mesmo assim, é capaz de se mover em múltiplas direções graças ao seu conjunto interno de motores acionados por controle remoto. Construída inteiramente com materiais recicláveis, a Gambi demonstra criatividade, eficiência e engenharia improvisada, destacando-se como um exemplo de inovação acessível e sustentável.
        `,
        image: "/src/assets/gambi.png"
    },
    {
        name: "drift",
        description: "O Drift é um carrinho controlado por um aplicativo mobile que se comunica diretamente com sua placa Arduino. Projetado para alcançar alta velocidade e manobras ágeis, ele representa perfeitamente a combinação entre programação e robótica aplicada.",
        image: "/src/assets/drift.png"
    },
    {
        name: "mg5",
        description: "O MG5 é o maior projeto já construído em termos de dimensão física, concebido para demonstrar potência e estabilidade. Possui movimentação reta e giros precisos, controlados por um sistema mecânico robusto. Seu olho frontal equipado com LEDs reativos fornece sinalização visual e leitura rápida do ambiente. Construído majoritariamente com materiais recicláveis, o MG5 combina sustentabilidade, eletrônica acessível e engenharia funcional. Totalmente programado com placas Arduino, torna-se uma plataforma ideal para testes avançados e experimentação tecnológica.",
        image: "/src/assets/mg5.png"
    }
]
