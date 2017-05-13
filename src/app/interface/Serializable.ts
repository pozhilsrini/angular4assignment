export class Serializable {
    constructor(json: any) {
        for (var propName in json)
            this[propName] = json[propName];
    }
}
