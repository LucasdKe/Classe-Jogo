class Hero {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type; // tipo do herói (guerreiro, mago, monge, ninja)
    }
  
    // Método para atacar
    attack() {
      const lunge = this.lunge(); // Chama o método lunge para determinar o tipo de ataque
      console.log(`O ${this.type} atacou usando ${lunge}`);
    }
  
    // Método para retornar o tipo de ataque
    lunge() {
      let lunge; // definindo variavel na class
      if (this.type === "guerreiro") {
        lunge = "espadas";
      } else if (this.type === "mago") {
        lunge = "magia";
      } else if (this.type === "monge") {
        lunge = "artes marciais";
      } else if (this.type === "ninja") {
        lunge = "shuriken";
      }
      return lunge;
    }
  }

 
const heroi = new Hero ("Lucas", 12, "monge")
console.log(heroi.type)
heroi.attack();