export interface Room {

}

export interface Features {

}
export interface Img {

}
export interface Rate {

}
export interface Coords {
    name: string,
    lat: number,
    lng: number
}
export interface Period {

}

export interface House {
    ownerId:        string,
    addedOn:        number,
    rooms:          Array<Room>,
    mainImage:      Array<Img>,
    securityFeatures?: Array<Features>,
    houseAminities:   Array<Features>,
    location:         string,
    city:            string,
    coordinates:      Coords,
    institutions:      Array<string>,
    availablePeriod:   Period,
    ratings:          Array<Rate>
}
