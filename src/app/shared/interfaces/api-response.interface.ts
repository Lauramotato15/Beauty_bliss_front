export interface ApiResponse <T>{
    data: T;
    status: number;
    success: boolean;
}

export type FailedApiResponse<T = unknown> = ApiResponse<T> & { message: string }; 