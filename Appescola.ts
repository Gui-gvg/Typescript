import { Pessoa } from "./Pessoa";
import { Aluno } from "./Aluno";
import { Professor} from "./Professor";

var p:Pessoa;

p = new Pessoa();
p.setRegistro(1234);
p.setNome("Genereites de Albuquerque Lima Filho Jr");
p.setEmail("gene@generates.com.br");
p.setTelefone("+55 11 98765-4321");

console.log(p);

var a: Aluno;
a = new Aluno();
a.setRegistro(1235);
a.setNome("Isidro de Almeida Botelho");
a.setEmail("isi@isidrocorp.com");
a.setTelefone("+55 11 12345-6789");
a.setCurso("Java Full Stack Galaxy Master");
a.setAnoMatricula(2019);
console.log(a);

var pr: Professor;
pr = new Professor();
pr.setRegistro(1236);
pr.setNome("Isidro de Peixoto Botelho");
pr.setEmail("isi@isidrocorpen.com");
pr.setTelefone("+55 11 12345-6789");
pr.setNhora(330);
pr.setVhora(2019);
console.log(pr);