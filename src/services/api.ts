import axios, { AxiosInstance } from 'axios';

interface IConnections {
  total: number;
}

interface ITeacher {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  cost:number;
  subject: string;
  whatsapp: string;
}

interface ITeacherParams {
  subject: string;
  weekDay: string;
  time: string;
}

export default class Client {
  public api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://10.0.2.2:5000',
    });

    this.getConnections = this.getConnections.bind(this);
    this.getTeachers = this.getTeachers.bind(this);
    this.createConnection = this.createConnection.bind(this);
  }

  async getConnections() {
    return this.api.get<IConnections>('/connections');
  }

  async getTeachers(params: ITeacherParams) {
    return this.api.get<ITeacher[]>('/classes', {
      params: {
        subject: params.subject,
        week_day: Number(params.weekDay),
        time: params.time,
      },
    });
  }

  async createConnection(userId: number) {
    return this.api.post<ITeacher>('/connections', {
      user_id: userId,
    });
  }
}
