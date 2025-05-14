/**
 * AI-Tutor Qyzylorda - AI Teacher Module
 * This file handles the AI teacher functionality for the demo page
 */

class AITeacher {
    constructor() {
        this.subjects = {
            'math': ['алгебра', 'геометрия', 'математика', 'теорема', 'формула', 'есептеу', 'теңдеу'],
            'physics': ['физика', 'механика', 'электр', 'оптика', 'ньютон', 'энергия', 'күш'],
            'chemistry': ['химия', 'элемент', 'менделеев', 'реакция', 'органикалық', 'бейорганикалық'],
            'biology': ['биология', 'ботаника', 'зоология', 'анатомия', 'генетика', 'жасуша'],
            'programming': ['программалау', 'код', 'python', 'java', 'javascript', 'функция', 'алгоритм'],
            'english': ['ағылшын', 'тіл', 'grammar', 'vocabulary', 'тыңдалым', 'оқылым', 'жазылым']
        };
        
        this.responses = {
            'math': {
                'пифагор': 'Пифагор теоремасы: Тік бұрышты үшбұрышта гипотенузаның квадраты катеттердің квадраттарының қосындысына тең. Формуласы: a² + b² = c², мұндағы a және b - катеттер, c - гипотенуза.',
                'квадрат': 'Квадрат теңдеу ax² + bx + c = 0 түрінде жазылады. Оның шешімі: x = (-b ± √(b² - 4ac)) / 2a формуласымен табылады.',
                'интеграл': 'Интеграл - бұл функцияның барлық нүктелеріндегі мәндерінің қосындысы. Анықталмаған интеграл ∫f(x)dx түрінде жазылады және F(x) + C түрінде шешіледі, мұндағы F\'(x) = f(x).',
                'туынды': 'Туынды - бұл функцияның өзгеру жылдамдығын көрсететін шама. f(x) функциясының туындысы f\'(x) немесе df/dx түрінде белгіленеді.'
            },
            'physics': {
                'ньютон': 'Ньютонның үшінші заңы: Әрбір әрекетке тең және қарама-қарсы бағытталған реакция бар. Бұл заңды күнделікті өмірде көптеген жағдайларда байқауға болады. Мысалы, жерге басқан кезде, жер де сізге бірдей күшпен әсер етеді.',
                'энергия': 'Энергияның сақталу заңы: Жабық жүйеде энергия жоғалмайды және пайда болмайды, тек бір түрден екінші түрге айналады. Мысалы, потенциалдық энергия кинетикалық энергияға айналады.',
                'масса': 'E = mc² - Эйнштейннің энергия мен массаның эквиваленттілігі формуласы. Мұндағы E - энергия, m - масса, c - жарық жылдамдығы (шамамен 3×10⁸ м/с).',
                'үдеу': 'Ньютонның екінші заңы: F = ma, мұндағы F - күш, m - масса, a - үдеу. Бұл заң бойынша, денеге әсер ететін күш оның массасы мен үдеуінің көбейтіндісіне тең.'
            },
            'chemistry': {
                'менделеев': 'Менделеев кестесіндегі элементтердің периодтық заңдылығы: Элементтердің қасиеттері олардың атомдық массаларына байланысты периодты түрде өзгереді. Қазіргі түсінікте, элементтердің қасиеттері олардың атомдық нөміріне (протон санына) байланысты.',
                'валенттілік': 'Валенттілік - бұл атомның химиялық байланыс құру қабілеті. Ол атомның электрондық құрылымына байланысты және периодтық кестедегі орнына байланысты анықталады.',
                'реакция': 'Химиялық реакция - бұл заттардың өзара әрекеттесуі, нәтижесінде бастапқы заттар жаңа заттарға айналады. Реакциялар экзотермиялық (жылу бөлінеді) және эндотермиялық (жылу сіңіріледі) болуы мүмкін.',
                'органикалық': 'Органикалық химия - көміртек қосылыстарын зерттейтін химия саласы. Көміртек атомдары бір-бірімен және басқа элементтермен (сутегі, оттегі, азот) күшті байланыстар құра алады.'
            },
            'biology': {
                'жасуша': 'Жасуша - тірі организмдердің құрылымдық және функционалдық бірлігі. Жасушалар прокариоттық (ядросыз) және эукариоттық (ядролы) болып бөлінеді.',
                'днк': 'ДНК (дезоксирибонуклеин қышқылы) - генетикалық ақпаратты сақтайтын молекула. Ол екі полинуклеотидтік тізбектен тұрады, олар қос спираль түрінде орналасқан.',
                'фотосинтез': 'Фотосинтез - өсімдіктердің күн энергиясын пайдаланып, көмірқышқыл газы мен судан органикалық заттар мен оттегін түзу процесі. Формуласы: 6CO₂ + 6H₂O + күн энергиясы → C₆H₁₂O₆ + 6O₂',
                'эволюция': 'Эволюция теориясы - тірі организмдердің уақыт өте келе өзгеріп, жаңа түрлерге айналу процесі. Чарльз Дарвин табиғи сұрыпталу арқылы эволюцияның негізгі механизмін түсіндірді.'
            },
            'programming': {
                'функция': 'Python тілінде функция "def" кілт сөзімен анықталады. Мысалы:\n\ndef hello(name):\n    return f"Сәлем, {name}!"\n\nprint(hello("Айдос"))',
                'цикл': 'Python тілінде циклдар "for" және "while" кілт сөздерімен жасалады. Мысалы:\n\nfor i in range(5):\n    print(i)\n\nj = 0\nwhile j < 5:\n    print(j)\n    j += 1',
                'массив': 'Python тілінде массивтер (тізімдер) квадрат жақшалармен жасалады. Мысалы:\n\nnumbers = [1, 2, 3, 4, 5]\nprint(numbers[0])  # 1\nprint(len(numbers))  # 5',
                'класс': 'Python тілінде класс "class" кілт сөзімен анықталады. Мысалы:\n\nclass Student:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def say_hello(self):\n        return f"Менің атым {self.name}, жасым {self.age}"\n\nstudent = Student("Айдос", 16)\nprint(student.say_hello())'
            },
            'english': {
                'grammar': 'Ағылшын тілінің грамматикасы 12 шақтан тұрады. Негізгі шақтар: Present Simple, Past Simple, Future Simple, Present Continuous, Past Continuous, Future Continuous, Present Perfect, Past Perfect, Future Perfect.',
                'vocabulary': 'Сөздік қорды кеңейту үшін күнделікті 5-10 жаңа сөз жаттау ұсынылады. Сөздерді контекстпен бірге жаттау тиімдірек.',
                'reading': 'Оқу дағдысын дамыту үшін әртүрлі жанрдағы мәтіндерді оқу керек. Бастапқыда қарапайым мәтіндерден бастап, біртіндеп күрделірек мәтіндерге көшу ұсынылады.',
                'listening': 'Тыңдау дағдысын дамыту үшін ағылшын тіліндегі подкасттар, фильмдер, әндер тыңдау пайдалы. Бастапқыда субтитрлермен, кейін субтитрлерсіз тыңдау ұсынылады.'
            }
        };
        
        this.greetings = [
            'Сәлеметсіз бе! Мен AI-Tutor Qyzylorda жобасының AI мұғалімімін. Сізге қандай пән бойынша көмек керек?',
            'Қайырлы күн! Мен AI мұғаліммін. Қандай сұрағыңыз бар?',
            'Сәлем! Мен сізге оқуда көмектесуге дайынмын. Қандай тақырып бойынша сұрағыңыз бар?'
        ];
        
        this.fallbacks = [
            'Кешіріңіз, бұл сұраққа жауап беру үшін қосымша ақпарат қажет. Сұрағыңызды нақтылай аласыз ба?',
            'Бұл қызықты сұрақ. Толығырақ түсіндіре аласыз ба?',
            'Мен әлі бұл тақырып бойынша оқып жатырмын. Басқа сұрақ қоя аласыз ба?',
            'Бұл тақырып бойынша толық ақпарат алу үшін тіркеліп, толық нұсқасын қолдануды ұсынамын.'
        ];
    }
    
    // Determine the subject of the question
    detectSubject(question) {
        question = question.toLowerCase();
        
        for (const subject in this.subjects) {
            for (const keyword of this.subjects[subject]) {
                if (question.includes(keyword)) {
                    return subject;
                }
            }
        }
        
        return 'general';
    }
    
    // Find a relevant response based on keywords
    findResponse(question, subject) {
        question = question.toLowerCase();
        
        if (subject !== 'general' && this.responses[subject]) {
            for (const keyword in this.responses[subject]) {
                if (question.includes(keyword)) {
                    return this.responses[subject][keyword];
                }
            }
        }
        
        // If no specific response is found, return a fallback
        return this.getRandomFallback();
    }
    
    // Get a random greeting
    getRandomGreeting() {
        const index = Math.floor(Math.random() * this.greetings.length);
        return this.greetings[index];
    }
    
    // Get a random fallback response
    getRandomFallback() {
        const index = Math.floor(Math.random() * this.fallbacks.length);
        return this.fallbacks[index];
    }
    
    // Process a question and return a response
    processQuestion(question) {
        if (!question || question.trim() === '') {
            return 'Сұрағыңызды енгізіңіз.';
        }
        
        // Simple greetings
        if (question.match(/сәлем|сәлеметсіз|қайырлы/i)) {
            return this.getRandomGreeting();
        }
        
        const subject = this.detectSubject(question);
        return this.findResponse(question, subject);
    }
    
    // Add a typing effect delay
    async getResponseWithDelay(question) {
        // Simulate thinking time (1-3 seconds)
        const thinkingTime = 1000 + Math.random() * 2000;
        
        return new Promise(resolve => {
            setTimeout(() => {
                const response = this.processQuestion(question);
                resolve(response);
            }, thinkingTime);
        });
    }
}

// Initialize the AI Teacher when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const aiTeacher = new AITeacher();
    const chatMessages = document.getElementById('chatMessages');
    const chatForm = document.getElementById('chatForm');
    const userMessageInput = document.getElementById('userMessage');
    const micButton = document.getElementById('micButton');
    const exampleQuestions = document.querySelectorAll('.example-question');
    const subjectList = document.querySelectorAll('.subject-list li');
    
    // Handle form submission
    chatForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const userMessage = userMessageInput.value.trim();
        if (!userMessage) return;
        
        // Add user message to chat
        addMessage('user', userMessage);
        userMessageInput.value = '';
        
        // Show typing indicator
        showTypingIndicator();
        
        // Get AI response with delay
        const response = await aiTeacher.getResponseWithDelay(userMessage);
        
        // Remove typing indicator and add AI response
        hideTypingIndicator();
        addMessage('ai', response);
        
        // Scroll to bottom
        scrollToBottom();
    });
    
    // Handle microphone button
    micButton.addEventListener('click', function() {
        // Check if browser supports speech recognition
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            
            recognition.lang = 'kk-KZ'; // Kazakh language
            recognition.interimResults = false;
            
            // Add animation to mic button
            micButton.classList.add('recording');
            
            recognition.start();
            
            recognition.onresult = function(event) {
                const transcript = event.results[0][0].transcript;
                userMessageInput.value = transcript;
                micButton.classList.remove('recording');
            };
            
            recognition.onerror = function() {
                micButton.classList.remove('recording');
                alert('Дауысты тану мүмкін болмады. Қайталап көріңіз.');
            };
            
            recognition.onend = function() {
                micButton.classList.remove('recording');
            };
        } else {
            alert('Сіздің браузеріңіз дауысты тануды қолдамайды.');
        }
    });
    
    // Handle example questions
    exampleQuestions.forEach(question => {
        question.addEventListener('click', async function() {
            const questionText = this.getAttribute('data-question');
            
            // Add user message to chat
            addMessage('user', questionText);
            
            // Show typing indicator
            showTypingIndicator();
            
            // Get AI response with delay
            const response = await aiTeacher.getResponseWithDelay(questionText);
            
            // Remove typing indicator and add AI response
            hideTypingIndicator();
            addMessage('ai', response);
            
            // Scroll to bottom
            scrollToBottom();
        });
    });
    
    // Handle subject selection
    subjectList.forEach(subject => {
        subject.addEventListener('click', function() {
            // Remove active class from all subjects
            subjectList.forEach(s => s.classList.remove('active'));
            
            // Add active class to selected subject
            this.classList.add('active');
            
            // You can add additional functionality here if needed
        });
    });
    
    // Function to add a message to the chat
    function addMessage(type, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message animate__animated animate__fadeIn`;
        
        if (type === 'user') {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <p>${text}</p>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    <p>${text}</p>
                </div>
            `;
        }
        
        chatMessages.appendChild(messageDiv);
        scrollToBottom();
    }
    
    // Function to show typing indicator
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message ai-message typing-message animate__animated animate__fadeIn';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        
        chatMessages.appendChild(typingDiv);
        scrollToBottom();
    }
    
    // Function to hide typing indicator
    function hideTypingIndicator() {
        const typingMessage = document.querySelector('.typing-message');
        if (typingMessage) {
            typingMessage.remove();
        }
    }
    
    // Function to scroll to bottom of chat
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});