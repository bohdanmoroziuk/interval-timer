const useClockify = (milliseconds: number) => {
  const pad = (x: number) => (
    x < 10 
      ? x.toString().padStart(2, '0') 
      : x.toString()
  );
  
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Number(((milliseconds % 60000) / 1000).toFixed(0));

  return `${pad(minutes)}:${pad(seconds)}`;
};

export default useClockify;
