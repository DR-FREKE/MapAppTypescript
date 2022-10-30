import { LocationType } from "../types";
import { faker } from "@faker-js/faker";
import { Mappable } from "./MapInterface";

export class User implements Mappable {
  name: string;
  location: LocationType;

  public constructor() {
    //
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  getLocation(): LocationType {
    return this.location;
  }

  getContent(): string {
    return `<div><h1>User name: ${this.name}</h1></div>`;
  }
}
