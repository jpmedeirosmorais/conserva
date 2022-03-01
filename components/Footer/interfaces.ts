import { Component } from "react";

export interface FooterProps {
  medias: Media[];
}

interface Media {
  name: string;
  link: string;
  icon: Component;
}
