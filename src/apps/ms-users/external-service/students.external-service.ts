import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import axios from 'axios';

@Injectable()
export default class StudentsExternalService {
  constructor(
    @Inject(REQUEST)
    private readonly request: Request,
  ) {}

  private getAuthorization() {
    return this.request.headers['authorization'];
  }
  async getStudentsUser(idUser: number) {
    const response = await axios.get(
      'http://localhost:3020/students/' + idUser + '/user',
      {
        headers: { Authorization: this.getAuthorization() },
      },
    );
    return response.data;
  }
}
