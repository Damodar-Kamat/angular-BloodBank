export type BloodBank = {
    bloodBankId:number;
    bloodBankName: string;
    phoneNumber: any;
    email: string;
    a_Post: number;
    a_Neg: number;
    b_Post: number;
    b_Neg: number;
    o_Post: number;
    o_Neg: number;
    ab_Post: number;
    ab_Neg: number;
  };
  
export type User={
  username:string;
  password:string;
  roles:string[];
}