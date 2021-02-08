import { Injectable } from '@angular/core'


@Injectable()
export class ImageService {
    visibleImages = [];

    getImages() {

        return this.visibleImages = IMAGES.slice(0);
    }


    getImage(id: number) {
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

const IMAGES = [
    {
        "id": 1, "category": "boats", "caption": "View from a boat", "url": "assets/img/boat_01.jpg"
    },
    {
        "id": 2, "category": "boats", "caption": "View from a boat", "url": "assets/img/boat_02.jpg"
    }, {
        "id": 3, "category": "boats", "caption": "View from a boat", "url": "assets/img/boat_03.jpg"
    }, {
        "id": 4, "category": "boats", "caption": "View from a boat", "url": "assets/img/boat_04.jpg"
    }, {
        "id": 5, "category": "boats", "caption": "View from a boat", "url": "assets/img/boat_05.jpg"
    }, {
        "id": 6, "category": "camping", "caption": "View from a Camp", "url": "assets/img/camping_01.jpg"
    }, {
        "id": 7, "category": "camping", "caption": "View from a Camp", "url": "assets/img/camping_02.jpg"
    }, {
        "id": 8, "category": "camping", "caption": "View from a Camp", "url": "assets/img/camping_03.jpg"
    }, {
        "id": 9, "category": "camping", "caption": "View from a Camp", "url": "assets/img/camping_04.jpg"
    }, {
        "id": 10, "category": "camping", "caption": "View from a Camp", "url": "assets/img/camping_05.jpg"
    }, {
        "id": 11, "category": "camping", "caption": "View from a Camp", "url": "assets/img/camping_06.jpg"
    }, {
        "id": 12, "category": "camping", "caption": "View from a Camp", "url": "assets/img/camping_07.jpg"
    }, {
        "id": 13, "category": "Library", "caption": "View from a Library", "url": "assets/img/Library_01.jpg"
    }, {
        "id": 14, "category": "Library", "caption": "View from a Library", "url": "assets/img/Library_02.jpg"
    }, {
        "id": 15, "category": "Library", "caption": "View from a Library", "url": "assets/img/Library_03.jpg"
    }, {
        "id": 16, "category": "Library", "caption": "View from a Library", "url": "assets/img/Library_04.jpg"
    }
]