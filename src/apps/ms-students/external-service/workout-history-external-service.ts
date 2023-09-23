import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import axios from 'axios';
import { Request } from 'express';

@Injectable()
export default class WorkoutHistoryExternalService {
  constructor(@Inject(REQUEST) private readonly request: Request) {}
  private getAuthorization() {
    return this.request.headers['authorization'];
  }
  async getWorkoutHistory(idStudent: number) {
    const response = await axios.get(
      'http://localhost:3020/workout/workout-history/' + idStudent,
      {
        headers: { Authorization: this.getAuthorization() },
      },
    );
    return response.data;
  }
}
