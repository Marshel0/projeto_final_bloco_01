import { Instrumentos } from "./Instrumentos";

export class InstrumentosCorda extends Instrumentos{

    private _materialCorda: string;

	constructor(id: number, nome: string, tipo: number, preco: number, materialCorda: string) {
        super(id, nome, tipo, preco)
		this._materialCorda = materialCorda;
	}

	public get materialCorda(): string {
		return this._materialCorda;
	}

	public set materialCorda(value: string) {
		this._materialCorda = value;
	}

    public visualizar(): void {
        super.visualizar()
        console.log("Material da corda: " + this._materialCorda)
    }

}
