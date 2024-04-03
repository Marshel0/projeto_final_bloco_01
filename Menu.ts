import readlinesync = require('readline-sync')

export function main() {

    let opcao: number;

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

                keyPress()
                break;
            case 2:
                console.log("\n\n* Listar Todos Instrumentos *\n\n");

                keyPress()
                break;
            case 3:
                console.log("\n\n* Buscar Instrumento por ID *\n\n");

                keyPress()
                break;
            case 4:
                console.log("\n\n* Atualizar Dados do Instrumento *\n\n");

                keyPress()
                break;
            case 5:
                console.log("\n\n* Deletar Instrumento *\n\n");

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