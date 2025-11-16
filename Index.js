
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
