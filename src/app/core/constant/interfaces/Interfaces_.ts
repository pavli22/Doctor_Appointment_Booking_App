export interface registerHospital {
    hospitalId: number;
    hospitalName: string;
    hospitalAddress: string;
    hospitalCity: string;
    hospitalContactNo: string;
    hospitalOwnerName: string;
    hospitalOwnerContactNo: string;
    hospitalEmailId: string;
    userName: string;
    password: string;
}


export interface registerHospital_API_response {
    message: string;
    result: boolean;
    data: {
        hospitalId: number;
        hospitalName: string;
        hospitalAddress: string;
        hospitalCity: string;
        hospitalContactNo: string;
        hospitalOwnerName: string;
        hospitalOwnerContactNo: string;
        hospitalEmailId: string;
        userName: string;
        password: string;
    }
}
