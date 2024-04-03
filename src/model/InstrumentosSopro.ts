import { Instrumentos } from "./Instrumentos";

export class InstrumentosSopro extends Instrumentos{

    private _materialInstrumento: string;

	constructor(id: number, nome: string, tipo: number, preco: number, materialInstrumento: string) {
        super(id, nome, tipo, preco)
		this._materialInstrumento = materialInstrumento;
	}

	public get materialInstrumento(): string {
		return this._materialInstrumento;
	}

	public set materialInstrumento(value: string) {
		this._materialInstrumento = value;
	}

    public visualizar(): void {
        super.visualizar()
        console.log("Material do instrumento: " + this._materialInstrumento)
    }

}