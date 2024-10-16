import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>){}

async create(email: string, password: string): Promise<User> {
    const user = this.repo.create({email,password});
    return this.repo.save(user);
}

}
