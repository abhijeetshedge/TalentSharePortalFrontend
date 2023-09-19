import { Mentor } from "./mentor";

export class MentorsData {
    noOfMentors: number;
    listOfMentors: Mentor[];
  
    constructor(noOfMentors: number, listOfMentors: Mentor[]) {
      this.noOfMentors = noOfMentors;
      this.listOfMentors = listOfMentors;
    }
}