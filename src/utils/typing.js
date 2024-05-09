const typingActions = {
    placeholder: document.querySelector("#typing"),
    container: document.querySelector("#linux"),
    words: [
        "Olá! Seja bem-vindo(a) ao meu Portfolio!",
        "Eu sou o Natan, um Web Developer dedicado a criar experiências digitais únicas.",
        "Estudante de Tecnologia em Sistemas para Internet no IFSP/Araraquara.",
        "Busco constantemente desafios, aprendizados e soluções criativas.",
    ],
    index: 0,
    
    type(word) {
        let i = 0;
        let text = document.createElement('span');
        this.container.appendChild(text);
        let writing = setInterval(() => {
            text.textContent += word.charAt(i);
            i++;
            if (i >= word.length) {
                clearInterval(writing);
                setTimeout(this.erase.bind(this), 1000);
            }
        }, 75);
    },

    erase() {
        let text = this.container.lastElementChild;
        let deleting = setInterval(() => {
            text.textContent = text.textContent.slice(0, -1);
            if (text.textContent.length <= 0) {
                clearInterval(deleting);
                this.index++;
                if (this.index >= this.words.length) {
                    this.index = 0;
                }
                this.type(this.words[this.index]);
            }
        }, 25);
    },

    init() {
        this.type(this.words[this.index]);
    }
};

typingActions.init();