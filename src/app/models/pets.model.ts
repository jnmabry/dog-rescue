export class Pet {

  age: string;
  animal: string;
  description: string;
  breed: string;
  breeds: string[];

    constructor(json: any) {
      if (json) {
        if (json.age.$t) this.age = json.age.$t;
        if (json.animal.$t) this.animal = json.animal.$t;
        if (json.description.$t) this.description = json.description.$t;
        if (json.breeds.breed.$t) {
          this.breed = json.breeds.breed.$t;
        } else if (json.breeds.breed[0].$t) {
            const breedArray: any[] = [];
            for (let i = 0; i < json.breeds.breed.length; i++) {
              breedArray.unshift(json.breeds.breed[i].$t);
            }
            this.breeds = breedArray;
        };

      }
    }

}