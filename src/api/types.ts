export interface ILocation {
  lat: number;
  lng: number;
}

export interface ITask {
  number: string;
  taskInfo?: JSX.Element | string;
  correctAnswer?: string;
  location: ILocation;
  mapHint?: JSX.Element | string;
}
