import readlinesync = require('readline-sync')
import { InstrumentosController } from './src/controller/InstrumentosController';
import { InstrumentosCorda } from './src/model/InstrumentosCorda';
import { InstrumentosSopro } from './src/model/InstrumentosSopro';


export function main() {


    let instrumentos: InstrumentosController = new InstrumentosController();

    let opcao, id, tipo, preco: number;
    let nome: string; 
    let materialCorda: string;
    let materialInstrumento: string;
    const tipoInstrumentos = ['Instrumento de Corda', 'Instrumento de Sopro']

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("               THE INTERNET INSTRUMENTS              ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar instrumento;               ");
        console.log("            2 - Listar todos instrumentos;           ");
        console.log("            3 - Buscar instrumento por ID            ");
        console.log("            4 - Atualizar dados do instrumento       ");
        console.log("            5 - Deletar instrumento                  ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");


        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log("\nTHE INTERNET INSTRUMENTS - KEEP GIGIN'!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\n* Cadastrar Instrumento *\n\n");

                console.log("Digite o nome do instrumento: ")
                nome = readlinesync.question("")

                console.log("Informe o tipo do instrumento: ")
                tipo = readlinesync.keyInSelect(tipoInstrumentos, "", { cancel: false }) + 1

                console.log("Digite o preço do instrumento: ")
                preco = readlinesync.questionFloat("R$ ")

                switch (tipo) {
                    case 1:
                        console.log("Digite o material da corda do instrumento: ")
                        materialCorda = readlinesync.question("")
                        instrumentos.cadastrar(
                            new InstrumentosCorda(instrumentos.gerarNumero(), nome, tipo, preco, materialCorda)
                        )
                        break;

                    case 2:
                        console.log("Digite o material do instrumento: ")
                        materialInstrumento = readlinesync.question("")
                        instrumentos.cadastrar(
                            new InstrumentosSopro(instrumentos.gerarNumero(), nome, tipo, preco, materialInstrumento)
                        )
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log("\n\n* Listar Todos Instrumentos *\n\n");

                instrumentos.listarTodos();

                keyPress()
                break;
            case 3:
                console.log("\n\n* Buscar Instrumento por ID *\n\n");

                console.log("Digite o ID do instrumento que deseja realizar a consulta de dados: ");
                id = readlinesync.questionInt("");
                instrumentos.procurarPorId(id);

                keyPress()
                break;
            case 4:
                console.log("\n\n* Atualizar Dados do Instrumento *\n\n");

                console.log("Digite o ID do instrumento que deseja atualizar os dados: ");
                id = readlinesync.questionInt("");

                let instrumento = instrumentos.buscarNoArray(id);

                if(instrumento != null){

                    console.log("Digite o novo ID do instrumento: ")
                    id = readlinesync.questionInt("")
    
                    console.log("Digite o nome do instrumento: ")
                    nome = readlinesync.question("")

                    console.log("Digite o preço do instrumento: ")
                    preco = readlinesync.questionFloat("R$ ")
    
                    tipo = instrumento.tipo

                    switch (tipo) {
                        case 1:
                            console.log("Digite o material da corda do instrumento: ")
                            materialCorda = readlinesync.question("")
                            instrumentos.cadastrar(
                                new InstrumentosCorda(id, nome, tipo, preco, materialCorda)
                            )
                            break;
    
                        case 2:
                            console.log("Digite o material do instrumento: ")
                            materialInstrumento = readlinesync.question("")
                            instrumentos.cadastrar(
                                new InstrumentosSopro(id, nome, tipo, preco, materialInstrumento)
                            )
                            break;
                    }
                }else{
                    console.log("O instrumento não foi localizado!");
                }

                keyPress()
                break;
            case 5:
                console.log("\n\n* Deletar Instrumento *\n\n");

                console.log("Digite o ID do instrumento que deseja deletar: ")
                id = readlinesync.questionInt("");
                instrumentos.deletar(id);

                keyPress()
                break;
            default:
                console.log("\nOpção Inválida!\n");
                
                keyPress()
                break;
        }
    }


}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Marcelo Henrique ");
    console.log("Marcelo Henrique - mah_henrique4478@hotmail.com");
    console.log("github.com/Marshel0");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();