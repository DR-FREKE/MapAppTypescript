import { LocationType } from "../types";

export interface Mappable {
  getLocation(): LocationType;
  getContent(): string;
}
