import { Component, ReactElement } from "react";

export interface FooterProps {
  medias: Media[];
}

export interface Media {
  name: string;
  link: string;
  icon: ReactElement;
}
