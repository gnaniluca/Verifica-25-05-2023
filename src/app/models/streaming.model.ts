export class Streaming{
    artisti : Artista[];
    brani : Brano[];

}

export class Artista{
    public id : number;
    public nome : string;
    public brani : number
}

export class Brano{
    public id : number;
    public nome : string;
    public artista: string;
    public durata: number
    
     
}