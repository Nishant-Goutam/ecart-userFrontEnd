const baseUrl = "https://ecart-backend-nishant.herokuapp.com";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
