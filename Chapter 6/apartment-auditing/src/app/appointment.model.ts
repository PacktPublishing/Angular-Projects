export interface IUnit {
  type: string;
}

export interface IAppointment {
  number: number;
  units: IUnit[];
  status?: string;
}
