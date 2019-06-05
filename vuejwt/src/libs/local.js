let util = {
  setlocal: (key, value) => {
    localStorage[key] = value;
  },
  getlocal: key => localStorage[key]
  // getlocal: key => {
  //   // console.log(localStorage[key]);
  //   if (localStorage[key] != undefined && localStorage[key] != "undefined") {
  //     return JSON.parse(localStorage[key]);
  //   }
  // }
};
export default util;
