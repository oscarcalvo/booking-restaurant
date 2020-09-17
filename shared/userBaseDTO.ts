export class UserBaseDTO {
  public id?: number;
  public email: string;
  public token?: string;
  public password?: string;
  public createdAt: Date;
  public secondId: string;
}
