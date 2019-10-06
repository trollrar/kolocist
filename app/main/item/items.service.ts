import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
    private items = new Array<Item>(
        {id: 1, bike_id:"94283q257", owner_id: 1, bike_brand:"viathon", picture: "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2019/09/Viathon-mountain-bikes-1676x1117.jpg", worth:"6000", official_register: true, stolen: false },
        {id: 2, bike_id:"58sa42982", owner_id: 2, bike_brand:"balance", picture: "https://ridelikeapdxgirl.files.wordpress.com/2014/04/rusty-bike.jpg", worth:"", official_register: false, stolen: false},
        {id: 3, bike_id:"cjw843224", owner_id: 3, bike_brand:"nakamura", picture: "https://forums.mtbr.com/attachments/bike-frame-discussion/531705d1269831701-i-bought-nakamura-7989en_20.jpg", worth:"", official_register: false, stolen: false},
        {id: 4, bike_id:"9i9789767", owner_id: 1, bike_brand:"gaint", picture: "https://images.giant-bicycles.com/b_white,c_pad,h_650,q_80/g2ywaxbu496z7gd8kupp/MY19StanceE+2Power_ColorA.jpg", worth:"4500", official_register: true, stolen: true },
        {id: 5, bike_id:"432rfsaf2", owner_id: 5, bike_brand:"rog", picture: "https://www.ckr.si/sites/default/files/styles/kolesa-velika-slika/public/rog%20touring.jpg?itok=ipV-atkw", worth:"", official_register: false, stolen: false},
        {id: 6, bike_id:"2f0n2ef90", owner_id: 6, bike_brand:"ktm", picture: "https://s3-media2.fl.yelpcdn.com/bphoto/RlJzOP7R-jMmjn8_QogE7A/ls.jpg", worth:"3000", official_register: true, stolen: false },
        {id: 7, bike_id:"897h8g8g8", owner_id: 1, bike_brand:"rog", picture: "https://i.pinimg.com/originals/63/db/56/63db562c6ac8b2aa039e8f1f727fe0a4.jpg", worth:"600" , official_register: true, stolen: false },
        {id: 8, bike_id:"okokoi867", owner_id: 8, bike_brand:"kilimanjaro", picture: "https://cdn.hervis.si/medias/sys_master/images/images/h3c/he4/10272428851230/X-Fact-Sport-29-2261402-00-123379.jpg", worth:"", official_register: false, stolen: false},
        {id: 9, bike_id:"u89978z9h", owner_id: 9, bike_brand:"merida", picture: "https://d2lljesbicak00.cloudfront.net/merida-v2/crud-zoom-img/master/bikes/2019/REACTO_TRACK_500_grnblk_MY2019.tif?p3" , worth:"1900", official_register: true, stolen: false },
        {id: 10, bike_id:"87ghbh8g7", owner_id: 10, bike_brand:"spcialized" , picture: "https://traildevils.ch/img/xga/0ec7595a88a1cfdde9c508d57aa9b120.jpg", worth:"5000", official_register: true, stolen: false }
    );

    getItems(): Array<Item> {
        return this.items;
    }

    getUserItems(id: number): Array<Item> {
        return this.items.filter((item) => item.owner_id == id);
    }

    getByID(id: number) {
        return this.items.filter((item) => item.id == id)[0];
    }

}
export class Item {
    constructor(public id: number,
                public bike_id: string,
                public owner_id: number,
                public bike_brand: string,
                public picture: string,
                public worth: string,
                public official_register: boolean,
                public stolen: boolean
               ) { }
}

