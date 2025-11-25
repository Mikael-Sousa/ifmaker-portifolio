type Bot = {
    name: string;
    description: string;
    image: string;
};

export const bots: Bot[] = [
    {
        name: "gambi",
        description: `
A Gambi é um projeto de robótica pura, desenvolvido sem qualquer 
programação Arduino. Mesmo assim, é capaz de se mover em múltiplas 
direções graças ao seu conjunto interno de motores acionados por 
controle remoto. Construída inteiramente com materiais recicláveis, 
a Gambi demonstra criatividade, eficiência e engenharia improvisada, 
destacando-se como um exemplo de inovação acessível e sustentável.
        `,
        image: "/src/assets/gambi.png"
    },
    {
        name: "drift",
        description: `
O Drift é um carrinho controlado por um aplicativo mobile que se 
comunica diretamente com sua placa Arduino. Projetado para alcançar 
alta velocidade e manobras ágeis, ele representa perfeitamente a 
combinação entre programação e robótica aplicada.
        `,
        image: "/src/assets/drift.png"
    },
    {
        name: "mg5",
        description: `
O MG5 é o maior projeto já construído em termos de dimensão física, 
concebido para demonstrar potência e estabilidade. Possui movimentação 
reta e giros precisos, controlados por um sistema mecânico robusto. 
Seu olho frontal equipado com LEDs reativos fornece sinalização visual 
e leitura rápida do ambiente. Construído majoritariamente com materiais 
recicláveis, o MG5 combina sustentabilidade, eletrônica acessível e 
engenharia funcional. Totalmente programado com placas Arduino, 
torna-se uma plataforma ideal para testes avançados e experimentação 
tecnológica.
        `,
        image: "/src/assets/mg5.png"
    },
    {
        name: "xbot",
        description: `
O Xbot é um robô construído inteiramente com peças de LEGO, combinando 
criatividade estrutural com eletrônica Arduino. Ele é capaz de se mover 
em todas as direções graças ao seu sistema de rodas totalmente 
articulado. Equipado com uma câmera, o Xbot realiza mapeamento do 
ambiente por onde passa, permitindo identificar obstáculos e compreender 
a disposição do espaço. É um projeto que une montagem prática, lógica de 
programação e exploração inteligente do ambiente.
    `,
        image: "/src/assets/xbot.png"
    },

    {
        name: "matuts",
        description: `
O Matuts é um robô protótipo construído com uma estrutura retangular 
feita de peças de madeira, equipado com rodas, sensores e uma placa 
Arduino. Projetado para testes de mobilidade e navegação, ele possui 
sensores anticolisão que permitem detectar e evitar obstáculos durante 
o percurso. Sua proposta inicial é servir como base para um robô de 
resgate em cenários de incêndio, onde a detecção do ambiente é 
fundamental para operar com segurança. Simples, funcional e pensado 
para evoluir, o Matuts é uma etapa importante no desenvolvimento de 
robôs focados em salvamento.
    `,
        image: "/src/assets/matuts.png"
    },

    {
        name: "robert",
        description: `
O robert possui uma estrutura peculiar, mas não se assuste: ele é 
totalmente amigável. Programado com placas Arduino, o robô conta com 
sensores anticolisão que identificam obstáculos à sua frente. Ao detectar 
algo no caminho, ele interrompe o movimento e muda automaticamente de 
direção, garantindo navegação segura e autônoma. Simples, eficiente e 
curioso, o robert é ideal para demonstrações de comportamento inteligente 
em robôs móveis.
    `,
        image: "/src/assets/robert.png"
    },
];
