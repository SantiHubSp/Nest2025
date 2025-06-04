import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MatriculacionService {
  constructor(@InjectRepository(Matricula) private readonly matriculasRepository:Repository<Matricula>){

  }

  async findByCurso(idCurso:number):Promise<MatriculaDatosDto[]>{
    const matriculas:Matricula[]=await this.matriculasRepository.createQueryBuilder("matricula")
    .innerJoin("matricula.curso","c")
    .innerJoin("matricula.alumno","a")
    .where("c.idCurso=:idCurso",{idCurso:idCurso})
    .getMany();
    return matriculas.map(m=>new MatriculaDatosDto(m.alumno.nombre,m.alumno.email,m.curso.nombre,m.nota))
  }
}
