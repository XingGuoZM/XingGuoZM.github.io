export type IStage = {
  id: string;
  title: string;
  desc: string;
  resultList: string[];

  status: string;
  threshold: string;
};
export interface IStageProgress {
  amount: string;
  stageList: IStage[];
}
