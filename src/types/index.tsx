// Da store lädt im Browser. Pledges können im store sein, bei Usern evt. nicht sinnvoll.

export interface MyStore {
    language: string;
    country: string;
    challenges: any;
    pledges: any;
       auth: {
        authenticated: boolean;
        username?: string;
    };
}