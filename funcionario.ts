namespace empresa{
    export  class Funcionario extends Pessoa{
        private _codFuncionario:number;
        private _setor:string;

        public getCodCliente(){
            return this._codFuncionario;
        }

        public setCodCliente(codigo:number){
            this._codFuncionario = codigo;
        }

        public getSetor(){
            return this._setor;
        }

        public setSetor(setor:string){
            this._setor = setor;
        }

    }
}