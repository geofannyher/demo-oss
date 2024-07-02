export const saveSession = (token: string) => {
  localStorage.setItem("demooss", token);
};

export const getSession = () => {
  return localStorage.getItem("demooss");
};

export const clearSession = () => {
  localStorage.removeItem("demooss");
};
