export interface ILocation {
  lat: number;
  lng: number;
}

interface IAlternatives {
  alternative: string;
  description: string;
}

export interface ITask {
  number: string;
  taskInfo?: JSX.Element | string;
  correctAnswer?: string;
  location: ILocation;
  mapHint?: JSX.Element | string;
  alternatives?: Array<IAlternatives>;
  cover?: JSX.Element;
}
