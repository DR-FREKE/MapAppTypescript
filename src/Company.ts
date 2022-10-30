import { faker } from "@faker-js/faker";
import { LocationType } from "../types";
import { Mappable } from "./MapInterface";

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: LocationType;

  public constructor() {
    //
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  getLocation(): LocationType {
    return this.location;
  }

  getContent(): string {
    return `<div><h1>Company name: ${this.name}</h1><h3>catchPhrase: ${this.catchPhrase}</h3></div>`;
  }
}
