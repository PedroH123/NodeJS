namespace empresa{
    export  class Banco{
        private _nome:string;
        private _codBanco:number;
        private _clientes:Array<Cliente> = [];
        private _funcionario:Array<Funcionario> = [];

         public getNome(){
            return this._nome;
        }

        public setNome(nome:string){
            this._nome = nome;
        }

        public getCodBanco(){
            return this._codBanco;
        }

        public setCodBanco(codigo:number){
            this._codBanco = codigo;
        }

        public getCliente(){
            return this._clientes;
        }

        public addCliente(cliente:Cliente){
            this._clientes.push(cliente);
        }

         public getFuncionario(){
            return this._funcionario;
        }

        public addFuncionario(funcionario:Funcionario){
            this._funcionario.push(funcionario);
        }

    }
}