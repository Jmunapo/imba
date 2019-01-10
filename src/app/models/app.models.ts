export interface Room {
    roomName:     string, //Room A...
    beds:           number, //default 0
    chargePer:      string,  //Head/Room/Bed
    price:          number, 
    utilitiesPrice:    string | number, //Included on rent / range / fixed
    roomImg:       Img,
    roomVid?:       string //30Sec video
}

export interface Features {
    featureName: string, //Wifi
    iconPack:     number // Ionicons - 1, fa - 2
    featureIcon:  string // name
}
export interface Img {
    uploadedOn: number,
    url:        string, //full image
    thumbnail:  string, //1024 x 620px
    images:     Array<string> //array of urls
}
export interface Rate {
    stars:       number, //
    comment:   string, //revies
    date:       string,
    commentBy: string //username
}
export interface Coords { //google map
    name:  string, //
    lat:    number,
    lng:    number
}
export interface Period {
    from:       number,
    to:         number,
    periodName: string //semester / term
}

export interface House {
    ownerId:        string,
    addedOn:        number,
    rooms:          Array<Room>,
    mainImage:      Img,
    securityFeatures?: Array<Features>,
    houseAminities:   Array<Features>,
    location:         string,
    city:            string,
    coordinates:      Coords,
    institutions:      Array<string>,
    availablePeriod:   Period,
    ratings:          Array<Rate>
}
