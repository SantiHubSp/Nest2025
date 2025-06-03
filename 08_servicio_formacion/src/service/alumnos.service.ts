import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class AlumnosService {
    constructor(@InjectRepository(Alumno) private readonly alumnosRepository:Repository)
}
