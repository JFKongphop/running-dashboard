export type TotalRunning = {
  distance: Number;
  running_day: Number;
  running_activity: Number;
}

export type DateDistance = {
  date: String;
  distance: Number;
}

export type DateDistancePaceHr = {
  date: String;
  distance: Number;
  pace: String;
  hr: Number;
}

export type PaceGroup = {
  pace: String;
  activity: Number;
  distance: Number;
  percentage: Number;
}

export type DateDistanceResponse = {
  dateDistance: DateDistance[];
}

export type DateDistancePaceHrResponse = {
  tableData: DateDistancePaceHr[];
}

export type PaceGroupResponse = {
  paceGroup: PaceGroup[];
}