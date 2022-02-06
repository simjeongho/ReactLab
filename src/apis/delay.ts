const delay = <T>(time: number, value: T) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });
//가짜 딜레이
export default delay;
