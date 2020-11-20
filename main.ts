import Elementos from "./Elementos";
import prompt from "prompt-sync"; 

let hidro: Elementos = new Elementos("Hidrogênio", 1, "H", "Era utilizado em dirigiveis");
let oxi: Elementos = new Elementos("Oxigênio", 8, "O", "Terceiro elemento mais abundante no universo!");
let carb: Elementos = new Elementos("Carbono", 6, "C", " Existem mais de três milhões de compostos distintos derivados do carbono" );
let nitro: Elementos = new Elementos("Nitrogênio", 7, "N", "O nitrogênio é o elemento mais caro dos fertilizantes" );

let teclado = prompt();
let option: number = 0;


while(option != 9) {
console.log('+========== Elementos ===========+');
console.log('|1. Hidrogênio                   |');
console.log('|2. Oxigênio                     |');
console.log('|3. Carbono                      |');
console.log('|4. Nitrogênio                   |');
console.log('|5. Wiki                         |');
console.log('|9. Sair Do Programa             |');
console.log('+================================+');

option = +teclado("Escolha Uma Ação: ");

switch (option) {
        case 1:
            console.clear()
        console.log('Você selecionou opção "1" ')

                                let teclado2 = prompt();
                    let option2: number = 0;


                    while(option2 != 9) {
                    console.log('+========= Hidrogênio ===========+');
                    console.log('|1. Numero Atomico               |');
                    console.log('|2. Sigla Geral                  |');
                    console.log('|3. Curiosidades                 |');
                    console.log('|9. Sair Do Programa             |');
                    console.log('+================================+');

                    option2 = +teclado2("Escolha Uma Ação: ");

                            switch (option2) {
                                
                                case 1:
                                    console.clear()
                                    console.log('Seu numero atomico é: ' + hidro.n_atomico);
                                    break;
                                    

                                case 2:
                                    console.clear()
                                    console.log('Sua sigla geral é: ' +hidro.simbolo);
                                    break;

                                case 3:
                                    console.clear()
                                    console.log('Curiosidade sobre HIDROGÊNIO: ' +hidro.curiosidade)
                                    break;

                                default:
                                    break;
                              }
                            }
                    break;
                    

            case 2:
                console.clear()
                console.log('Você selecionou opção "2" ')

                                let teclado3 = prompt();
                    let option3: number = 0;


                    while(option3 != 9) {
                    console.log('+========== Oxigênio ============+');
                    console.log('|1. Numero Atomico               |');
                    console.log('|2. Sigla Geral                  |');
                    console.log('|3. Curiosidades                 |');
                    console.log('|9. Sair Do Programa             |');
                    console.log('+================================+');

                    option3 = +teclado3("Escolha Uma Ação: ");

                            switch (option3) {

                                case 1:
                                    console.clear()
                                    console.log('Seu numero atomico é: ' + oxi.n_atomico);
                                    break;

                                case 2:
                                    console.clear()
                                    console.log('Sua sigla geral é: ' +oxi.simbolo);
                                    break;

                                case 3:
                                    console.clear()
                                    console.log('Curiosidade sobre OXIGÊNIO: ' +oxi.curiosidade)
                                    break;

                                default:
                                    break;
                              }
                            }
                    break;

            case 3:
                console.clear()
                console.log('Você selecionou opção "3" ')

                                let teclado4 = prompt();
                    let option4: number = 0;


                    while(option4 != 9) {
                    console.log('+=========== Carbono ============+');
                    console.log('|1. Numero Atomico               |');
                    console.log('|2. Sigla Geral                  |');
                    console.log('|3. Curiosidades                 |');
                    console.log('|9. Sair Do Programa             |');
                    console.log('+================================+');

                    option4 = +teclado4("Escolha Uma Ação: ");

                            switch (option4) {

                                case 1:
                                    console.clear()
                                    console.log('Seu numero atomico é: ' + carb.n_atomico);
                                    break;

                                case 2:
                                    console.clear()
                                    console.log('Sua sigla geral é: ' +carb.simbolo);
                                    break;

                                case 3:
                                    console.clear()
                                    console.log('Curiosidade sobre CARBONO: ' +carb.curiosidade)
                                    break;

                                default:
                                    break;
                              }
                            }
                    break;


            case 4:
                console.clear()
                console.log('Você selecionou opção "4" ')

                                let teclado5 = prompt();
                    let option5: number = 0;


                    while(option5 != 9) {
                    console.log('+========= Nitrogênio ===========+');
                    console.log('|1. Numero Atomico               |');
                    console.log('|2. Sigla Geral                  |');
                    console.log('|3. Curiosidades                 |');
                    console.log('|9. Sair Do Programa             |');
                    console.log('+================================+');

                    option5 = +teclado5("Escolha Uma Ação: ");

                            switch (option5) {
                                
                                case 1:
                                    console.clear()
                                    console.log('Seu numero atomico é: ' + nitro.n_atomico);
                                    break;

                                case 2:
                                    console.clear()
                                    console.log('Sua sigla geral é: ' +nitro.simbolo);
                                    break;

                                case 3:
                                    console.clear()
                                    console.log('Curiosidade sobre NITROGÊNIO: ' +nitro.curiosidade)
                                    break;

                                default: 
                                    break;
                              }
                            }
                    break;

                    case 5:
                        console.clear()
                        console.log('Você selecionou opção "3" ')
        
                                        let teclado6 = prompt();
                            let option6: number = 0;
        
        
                            while(option6 != 9) {
                            console.log('+=========== Misturas ============+');
                            console.log('|1. Hidrogênio                    |');
                            console.log('|2. Carbono                       |');
                            console.log('|3. Oxigênio                      |');
                            console.log('|4. Nitrogênio                    |');
                            console.log('|9. Sair Do Programa              |');
                            console.log('+================================+');
        
                            option6 = +teclado6("Escolha Uma Ação: ");
        
                                    switch (option6) {
                                        
                                        case 1:
                                            console.clear()
                                            console.log('https://pt.wikipedia.org/wiki/Hidrog%C3%A9nio');
                                            break;
        
                                        case 2:
                                            console.clear()
                                            console.log('https://pt.wikipedia.org/wiki/Carbono');
                                            break;
        
                                        case 3:
                                            console.clear()
                                            console.log('https://pt.wikipedia.org/wiki/Oxig%C3%A9nio')
                                            break;

                                            case 4:
                                            console.clear()
                                            console.log('https://pt.wikipedia.org/wiki/Azoto')
                                            break;

                                        default:
                                            break;
                                      }
                                    }
                            break;
        

    default:
        break;
 }
}                    