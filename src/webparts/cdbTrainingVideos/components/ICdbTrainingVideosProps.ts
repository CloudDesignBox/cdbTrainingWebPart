import { ThemeProvider, ThemeChangedEventArgs, IReadonlyTheme } from '@microsoft/sp-component-base';
export interface ICdbTrainingVideosProps {
  videotypes: string;
  videocourse: string;
}

export interface YouTubeProps {
  videourl: string;
}

export interface VideoState{
  properties:ICdbTrainingVideosProps;
  video:YouTubeProps;
}
