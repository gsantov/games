export class CardModel {

    imageId?:string;
    imageUrl?:string;
    status?:string;
    back:string;

    constructor(imageId:string, imageUrl:string, status:string){
        this.imageId = imageId;
        this.imageUrl = imageUrl;
        this.status = status;
        this.back = 'assets/images/memory/cardback.jpg';
    }
    
    

}