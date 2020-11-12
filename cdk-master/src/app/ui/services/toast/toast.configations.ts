export interface IToastConfig {
  title: string;
  content: string;
  type: string;
  showTitle: boolean;
  hasCloseButton: boolean;
  duration: string;
  xPosition: string;
  yPosition: string;
  close?: () => void;
}
