function getdata(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === 3) {
        reject("Query not found");
      } else {
        console.log("Data sent", value);
        resolve("Query Solved");
      }
    }, 2000);
  });
}

getdata(1).then(() => getdata(2));
getdata(1).then(() => getdata(3));
getdata(1).then(() => getdata(4));
getdata(1).then(() => getdata(5));
getdata(1).catch((rej) => console.log(rej));
