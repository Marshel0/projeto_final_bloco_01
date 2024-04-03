import { Instrumentos } from "../model/Instrumentos";

export interface InstrumentosRepository{

    cadastrar(Instrumentos: Instrumentos):void;
    listarTodos(): void;
    procurarPorId(numero: number): void;
    atualizar(instrumentos: Instrumentos): void;
    deletar(id: number): void;
    

}