export interface Serializer {
    fromJson(json: any): any;
    toJson(items: any): any;
}
