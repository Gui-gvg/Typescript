export class Pessoa{
    private numRegistro :number;
    private nome :string;
    private email : string;
    private telefone : number;

    public constructor (_co: number,_no: string,_de: string, _pr:number,_es:number,_li:string){
        this.codigo =_co;
        this.nome = _no;
        this.detalhes = _de;
        this.preco = _pr;
        this.estoque = _es;
        this.linkFoto =_li;
    }
    public getRegistro():number{
        return this.numRegistro;
    }
    public setRegistro(_nReg:number):void{
        this.numRegistro= _nReg;
    }
    public getNome():string{
        return this.nome;
    }
    public setNome(_nome:string):void{
        this.nome= _nome;
    }
    public getEmail():string{
        return this.email;
    }
    public setEmail(_email:string):void{
        this.email= _email;
    }
    public getTelefone():number{
        return this.telefone;
    }
    public setTelefone(_telefone:number):void{
        this.preco= _telefone;
    }
    public getInfo():void{
        console.log(`O produto de nome: ${this.nome} - (código: ${this.codigo}, contem como detalhes: ${this.detalhes}). Seu preço unitário é de R$ ${this.preco}. Atualmente existe(m) ${this.estoque} unidade(s) deste produto em estoque. Imagem do produto: ${this.linkFoto}`);
    }
}