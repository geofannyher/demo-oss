export const saveSession = (token: string) => {
  localStorage.setItem("idMediamon1", token);
};

export const getSession = () => {
  return localStorage.getItem("idMediamon1");
};

export const clearSession = () => {
  localStorage.removeItem("idMediamon1");
};
