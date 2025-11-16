# 🏹 Heróis da Aventura - Projeto JavaScript

![GitHub repo size](https://img.shields.io/badge/Projeto-Prático-brightgreen?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/Linguagem-JavaScript-yellow?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge)

Bem-vindo(a) ao **Heróis da Aventura**! 🌟  
Este projeto é um exemplo prático de **Programação Orientada a Objetos (OOP)** em JavaScript, onde você aprende a criar **classes, objetos e métodos**, utilizando variáveis, operadores, laços de repetição, estruturas de decisão e funções.  

---

## 🎯 Objetivo

Criar uma **classe genérica de herói** com as seguintes propriedades:

- `nome` → Nome do herói
- `idade` → Idade do herói
- `tipo` → Tipo do herói (`guerreiro`, `mago`, `monge`, `ninja`)

E um método **atacar()**, que exibe a mensagem correta conforme o tipo do herói:

| Tipo      | Ataque               |
|-----------|--------------------|
| Mago      | magia              |
| Guerreiro | espada             |
| Monge     | artes marciais     |
| Ninja     | shuriken           |

Exemplo de saída:

Mago atacou usando magia
Guerreiro atacou usando espada


---

## 💻 Código JavaScript

```javascript
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();
    }

    atacar() {
        let ataque;
        switch(this.tipo) {
            case "mago": ataque = "magia"; break;
            case "guerreiro": ataque = "espada"; break;
            case "monge": ataque = "artes marciais"; break;
            case "ninja": ataque = "shuriken"; break;
            default: ataque = "ataque desconhecido";
        }
        console.log(`${this.tipo} atacou usando ${ataque}`);
    }
}

// Testando heróis
const heroi1 = new Heroi("Merlin", 150, "mago");
const heroi2 = new Heroi("Conan", 30, "guerreiro");
const heroi3 = new Heroi("Liang", 25, "monge");
const heroi4 = new Heroi("Hattori", 28, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();

