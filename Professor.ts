import { Pessoa } from "./Pessoa";

export class Professor extends Pessoa{
    
    private valHora: number;
    private numHoras: number;
    private areaFormacao: string;

    public setVhora(_vhora: number): void{
        this.valHora = _vhora;
    }
    public getVhora(): number{
        return this.valHora;
    }
    public setNhora(_Nhora : number): void{
        this.numHoras = _Nhora;
    }
    public getNhora(): number{
        return this.numHoras;
        
    }
    public setAform(_Aform : string): void{
        this.areaFormacao = _Aform;
    }
    public getAform(): string{
        return this.areaFormacao;
        
    }
}