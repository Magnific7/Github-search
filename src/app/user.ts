export class User {
  constructor(
    public profile:any,
    public name:string,
    public follower:number,
    public following:number,
    public repo:number
  ) {}
}
