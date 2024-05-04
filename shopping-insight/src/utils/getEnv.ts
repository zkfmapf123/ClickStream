export const getEnv = () => {
  return {
    BASE_URL: process.env.NAVER_BASE_URL,
    REACT_APP_SHOPPING_URL: process.env.REACT_APP_SHOPPING_URL,
    // NAVER_CLIENT_ID: process.env.NAVER_CLIENT_ID,
    // NAVER_CLIENT_SECRET: process.env.NAVER_CLIENT_SECRET,
  };
};
