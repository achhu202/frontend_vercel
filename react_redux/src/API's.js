const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000"
    : "https://deploy-backend-1-opk3.onrender.com/";

export const registerAPI = `${BASE_URL}/api/auth/register`;
export const loginAPI = `${BASE_URL}/api/auth/login`;
