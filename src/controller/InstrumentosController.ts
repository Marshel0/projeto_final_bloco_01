import { Instrumentos } from "../model/Instrumentos";
import { InstrumentosRepository } from "../repository/InstrumentosRepository";

export class InstrumentosController implements InstrumentosRepository{

    private listaInstrumentos: Array<Instrumentos> = new Array<Instrumentos>();
    public id: number = 0;
    
    cadastrar(instrumentos: Instrumentos): void {
        this.listaInstrumentos.push(instrumentos);
        console.log(`\nO instrumento de ID: ${instrumentos.id} foi criada com sucesso!`);
    }
    listarTodos(): void {
        for (let produto of this.listaInstrumentos){
            produto.visualizar();
        }
    }
    procurarPorId(numero: number): void {
        let buscaInstrumentos = this.buscarNoArray(numero);

        if(buscaInstrumentos !== null)
        buscaInstrumentos.visualizar();
        else
            console.log("\nO instrumento não foi localizado!")
    }
    atualizar(instrumentos: Instrumentos): void {
        
        let buscaInstrumentos = this.buscarNoArray(instrumentos.id);

        if(buscaInstrumentos != null){
            this.listaInstrumentos[this.listaInstrumentos.indexOf(buscaInstrumentos)] = instrumentos;
            console.log(`O instrumento de ID: ${instrumentos.id} foi atualizado com sucesso!`)
        } else
            console.log(`\nO instrumento de ID: ${instrumentos.id} não foi localizada!`)

    }
    deletar(id: number): void {
        let buscaInstrumentos = this.buscarNoArray(id);

        if(buscaInstrumentos != null){
            this.listaInstrumentos.splice(this.listaInstrumentos.indexOf(buscaInstrumentos), 1)
            console.log(`O instrumento de ID: ${id} foi deletado com sucesso!`)
        }else
            console.log(`\nO instrumento de ID: ${id} não foi localizada!`)
    }

    public gerarNumero(): number {
        return ++ this.id;
    }

    public buscarNoArray(numero: number): Instrumentos | null {
        for(let instrumentos of this.listaInstrumentos){
            if (instrumentos.id === numero)
                return instrumentos;
        }

        return null;
    }



    
}