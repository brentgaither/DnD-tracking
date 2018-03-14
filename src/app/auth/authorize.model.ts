export class Authorize {
    constructor(code: string) {
        this.code = code;
        this.grant_type = 'authorization_code';
        this.client_id = '7';
        this.client_secret = 'Nog2JOZSXmDXWh3oz6StcvM3eBV26Ziy1DCU09OC';
        this.redirect_uri = 'http://localhost:4200/callback';
    }
    code: string;
    grant_type: string;
    client_id: string;
    client_secret: string;
    redirect_uri: string;
}
