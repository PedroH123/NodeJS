var empresa;
(function (empresa) {
    var Banco = /** @class */ (function () {
        function Banco() {
            this._clientes = [];
            this._funcionario = [];
        }
        Banco.prototype.getNome = function () {
            return this._nome;
        };
        Banco.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Banco.prototype.getCodBanco = function () {
            return this._codBanco;
        };
        Banco.prototype.setCodBanco = function (codigo) {
            this._codBanco = codigo;
        };
        Banco.prototype.getCliente = function () {
            return this._clientes;
        };
        Banco.prototype.addCliente = function (cliente) {
            this._clientes.push(cliente);
        };
        Banco.prototype.getFuncionario = function () {
            return this._funcionario;
        };
        Banco.prototype.addFuncionario = function (funcionario) {
            this._funcionario.push(funcionario);
        };
        return Banco;
    }());
    empresa.Banco = Banco;
})(empresa || (empresa = {}));
