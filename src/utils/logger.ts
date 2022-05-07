export const debugLog = (message?: any, ...objects: any[]) => {
  // Only print logs if in dev mode
  if (__DEV__) {
    console.log(message, ...objects);
  }
};
