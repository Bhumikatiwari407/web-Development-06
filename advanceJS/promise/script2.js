// async and await
async function getdata(value) {
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

await getdata(1)
await getdata(2)
await getdata(3)
await getdata(4)
await getdata(5)