export class Elementos {
        protected _nome: string;
        protected _n_atomico: number;
        protected _simbolo: string;
        protected _curiosidade: string;

        constructor(nome: string, n_atomico: number, simbolo: string, curiosidade: string){
                this._nome = nome;
                this._n_atomico = n_atomico;
                this._simbolo = simbolo;
                this._curiosidade = curiosidade;
        }

        public get n_atomico() : number {
                return this._n_atomico
        }
        public get simbolo() : string {
                return this._simbolo
        }
        public get curiosidade() : string {
                return this._curiosidade
        }
}
