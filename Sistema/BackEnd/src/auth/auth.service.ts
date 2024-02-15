import { Injectable } from '@nestjs/common';
import { SesionService } from 'src/sesion/sesion.service';



@Injectable()
export class AuthService {
    constructor(
        private readonly sesionService: SesionService,
    ){}

    login ()
    {
        
    }

}
