
const questions = [
    {
        question: "Qual é o objetivo de um ataque de phishing?",
        options: ["Infectar o sistema com malware", "Enganar o usuário para obter informações confidenciais", "Bloquear o acesso a uma rede", "Explorar vulnerabilidades de hardware"],
        answer: 1
    },
    {
        question: "O que é malware?",
        options: ["Um software utilizado para manutenção de sistemas", "Um tipo de vírus que danifica hardware", "Qualquer software malicioso desenvolvido para causar dano", "Um firewall criado para proteger o sistema"],
        answer: 2
    },
    {
        question: "Qual é a função de um firewall?",
        options: ["Filtrar e monitorar tráfego de rede", "Bloquear todos os tipos de tráfego de internet", "Remover vírus e malwares do sistema", "Criptografar dados em redes inseguras"],
        answer: 0
    },
    {
        question: "O que significa a sigla VPN?",
        options: ["Virtual Private Network", "Verified Protected Network", "Virus Protection Network", "Virtual Password Number"],
        answer: 0
    },
    {
        question: "Ransomware é um tipo de malware que:",
        options: ["Rouba dados do computador", "Criptografa os arquivos e pede um resgate", "Infecta o computador com anúncios indesejados", "Monitora o comportamento do usuário"],
        answer: 1
    },
    {
        question: "Qual das alternativas abaixo é uma prática recomendada de cibersegurança?",
        options: ["Usar senhas curtas para facilitar a memorização", "Utilizar a mesma senha para várias contas", "Habilitar a autenticação de dois fatores (2FA)", "Compartilhar senhas por e-mail para segurança"],
        answer: 2
    },
    {
        question: "Qual é a função da autenticação de dois fatores (2FA)?",
        options: ["Verificar se o usuário está usando o dispositivo correto", "Usar dois tipos de senhas para proteger o acesso", "Adicionar uma camada extra de segurança, exigindo dois métodos de verificação", "Criar duas contas para maior proteção"],
        answer: 2
    },
    {
        question: "Como se chama a técnica usada para explorar vulnerabilidades de software antes que os desenvolvedores as conheçam?",
        options: ["Patch exploit", "Zero-day exploit", "Rootkit", "Backdoor"],
        answer: 1
    },
    {
        question: "O que é um rootkit?",
        options: ["Um tipo de malware que se esconde no sistema operacional", "Um firewall criado para proteger o sistema", "Um tipo de ataque de rede que rouba dados", "Um software de proteção contra vírus"],
        answer: 0
    },
    {
        question: "Qual das seguintes opções é uma forma de engenharia social?",
        options: ["Invasão física em uma empresa", "Um e-mail fingindo ser de um banco solicitando informações pessoais", "Uso de criptografia para proteger dados", "Um ataque DDoS"],
        answer: 1
    },
    {
        question: "O que é um ataque DDoS?",
        options: ["Um ataque de negação de serviço distribuído para sobrecarregar um servidor", "Um tipo de phishing sofisticado", "Um ataque que rouba senhas", "Um ataque que criptografa arquivos"],
        answer: 0
    },
    {
        question: "Qual é a importância de manter os softwares atualizados?",
        options: ["Melhora o desempenho do hardware", "Reduz a possibilidade de falhas de hardware", "Corrige vulnerabilidades de segurança e previne ataques", "Facilita o uso de recursos avançados"],
        answer: 2
    },
    {
        question: "O que é criptografia?",
        options: ["Um processo de backup de dados", "O ato de mascarar dados para que não possam ser lidos por terceiros não autorizados", "Um software antivírus", "Uma técnica de espionagem digital"],
        answer: 1
    },
    {
        question: "Qual é a vantagem de utilizar uma senha forte?",
        options: ["Facilita a memorização", "Torna o sistema mais rápido", "Dificulta a violação da senha por ataques de força bruta", "Reduz o número de firewalls necessário"],
        answer: 2
    },
    {
        question: "O que deve ser feito ao receber um e-mail suspeito de phishing?",
        options: ["Clicar no link para verificar sua autenticidade", "Ignorar o e-mail e deixar na caixa de entrada", "Encaminhar para outras pessoas como alerta", "Excluir o e-mail imediatamente sem clicar em links"],
        answer: 3
    },
    {
        question: "O que é um certificado SSL e por que é importante?",
        options: ["Um tipo de hardware de segurança", "Uma licença que permite a criação de websites", "Um protocolo de segurança que encripta os dados transmitidos entre o navegador e o servidor", "Um software antivírus avançado"],
        answer: 2
    },
    {
        question: "Como a biometria pode aumentar a segurança?",
        options: ["Simplificando o login em dispositivos móveis", "Adicionando uma camada extra de verificação com características únicas, como impressão digital", "Removendo a necessidade de usar senhas", "Garantindo que apenas administradores tenham acesso a sistemas"],
        answer: 1
    },
    {
        question: "Qual das opções é uma boa prática para evitar malware em dispositivos móveis?",
        options: ["Instalar aplicativos apenas de lojas oficiais, como Google Play e Apple App Store", "Desativar o antivírus para melhorar o desempenho", "Baixar aplicativos diretamente de sites alternativos", "Compartilhar a senha do dispositivo com amigos e familiares"],
        answer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.innerHTML = `<input type="radio" name="option" value="${index}" id="option${index}"> <label for="option${index}">${option}</label>`;
        optionsContainer.appendChild(optionElement);
    });
}

document.getElementById("submit-button").addEventListener("click", function () {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Por favor, selecione uma opção.");
        return;
    }

    const answer = parseInt(selectedOption.value);
    if (answer === questions[currentQuestionIndex].answer) {
        score += 5; 
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    document.getElementById("quiz-container").style.display = 'none';
    document.getElementById("result-container").style.display = 'block';
    document.getElementById("score").innerText = `Você acertou ${score / 5} perguntas e ganhou ${score} pontos.`;

    let belt = '';
    let beltImage = '';

    // Calcular o nível baseado na pontuação
    let level = Math.floor(score / 10); // Cada faixa corresponde a 10 pontos

    switch (level) {
        case 0:
            belt = 'Sua faixa é: Faixa Branca';
            beltImage = 'img-quiz/faixa-branca-removebg-preview.png';
            break;
        case 1:
            belt = 'Sua faixa é: Faixa Amarela';
            beltImage = 'img-quiz/faixa-amarela-removebg-preview.png';
            break;
        case 2:
            belt ='Sua faixa é: Faixa Laranja';
            beltImage = 'img-quiz/faixa-laranja-removebg-preview.png';
            break;
        case 3:
            belt = 'Sua faixa é: Faixa Verde';
            beltImage = 'img-quiz/faixa-verde-removebg-preview.png';
            break;
        case 4: 
            belt = 'Sua faixa é: Faixa Azul';
            beltImage = 'img-quiz/faixa-azul-removebg-preview.png';
            break;
        case 5:
            belt = 'Sua faixa é: Faixa Roxa';
            beltImage = 'img-quiz/faixa-roxa-removebg-preview.png';
            break;
        case 6:
            belt = 'Sua faixa é: Faixa Marrom';
            beltImage = 'img-quiz/faixa-marrom-removebg-preview.png';
            break;
        default:
            belt = 'Sua faixa é: Faixa Preta';
            beltImage = 'img-quiz/faixa-preta-removebg-preview.png';
            break;
    }

    document.getElementById("belt").innerHTML =` ${belt}`;
    const imageElement = document.getElementById("beltImage");
    imageElement.src = beltImage;
    imageElement.alt = belt; 
    imageElement.style.display = 'inline'; // Torna a imagem visível
}

loadQuestion();



