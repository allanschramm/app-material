export class Forum {
    
    public Id?: number;

    constructor(){
        this._titulo = '';
        this._descricao = '';
        this._data = '';
        this._responsavel = '';
        this._telefone = '';
    }
    
    // propriedade titulo
    private _titulo : string;
    public get titulo() : string {
        return this._titulo;
    }
    public set titulo(v : string) {
        this._titulo = v;
    }

    // propriedade descricao
    private _descricao : string;
    public get descricao() : string {
        return this._descricao;
    }
    public set descricao(v : string) {
        this._descricao = v;
    }
    
    // propriedade data
    private _data : string;
    public get data() : string {
        return this._data;
    }
    public set data(v : string) {
        this._data = v;
    }
    
    // propriedade responsavel
    private _responsavel : string;
    public get responsavel() : string {
        return this._responsavel;
    }
    public set responsavel(v : string) {
        this._responsavel = v;
    }
    
    // propriedade telefone    
    private _telefone : string;
    public get telefone() : string {
        return this._telefone;
    }
    public set telefone(v : string) {
        this._telefone = v;
    }
    
}
