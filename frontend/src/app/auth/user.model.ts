export class User {
    constructor(public username: string,
                public password: string,
                public fullname?: string,
                public address?: string,
                public postalcode?: string,
                public city?: string,
                public email?: string) {}
}