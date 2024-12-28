import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UpdateUserDto } from 'src/users/dtos/update-user.dto';
import { UserResponseDto } from 'src/users/dtos/user-response.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.repo.create(createUserDto);
    return this.repo.save(user);
  }

  findOne(id: number): Promise<User | null> {
    return this.repo.findOneBy({ id });
  }

  find(userResponseDto: UserResponseDto): Promise<User[]> {
    const { email, firstname, lastname } = userResponseDto;
    const queryBuilder = this.repo.createQueryBuilder('user');

    if (email) {
      queryBuilder.andWhere('user.email = :email', { email });
    }
    if (firstname) {
      queryBuilder.andWhere('user.firstName = :firstname', { firstname });
    }
    if (lastname) {
      queryBuilder.andWhere('user.lastName = :lastname', { lastname });
    }

    return queryBuilder.getMany();
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with ${id} not found`);
    }
    Object.assign(user, updateUserDto);
    return this.repo.save(user);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    await this.repo.remove(user);
  }
}
