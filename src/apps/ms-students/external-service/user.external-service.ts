import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import axios from 'axios';
export interface ICreateUser {
  name: string;
  password: string;
  email: string;
}

@Injectable()
export default class UserExternalService {
  constructor(
    @Inject(REQUEST)
    private readonly request: Request,
  ) {}

  async createUser(createUser: ICreateUser) {
    const response = await axios.post(
      'http://localhost:3020/user',
      createUser,
      { headers: { Authorization: this.getAuthorization() } },
    );

    return response.data.id;
  }
  private getAuthorization() {
    return this.request.headers['authorization'];
  }
  async getUser(idUser: number) {
    const response = await axios.get('http://localhost:3020/user/' + idUser, {
      headers: { Authorization: this.getAuthorization() },
    });
    return response.data;
  }
}
