import { Time } from "@angular/common";
import { PickupParty } from "./pickup-parties";

export interface Event {
    id?: number;
    date: string;
    doors_time?: string;
    startTime?: string;
    venue: string;
    headliner: string;
    support1?: string;
    support2?: string;
    support3?: string;
    headlinerBio?: string;
    headlinerImgLink?: string;
    meetsCriteria?: string;
    isDenied?: string;
    external?: string;
    createdAt?: string;
    updatedAt?: string;
    capacity?: number;
    locationName?: string;
  }