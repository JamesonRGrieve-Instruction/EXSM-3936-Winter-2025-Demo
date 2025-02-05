// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const request1 = wait(3000, () => {
    output("First request done.");
  });
  const request2 = wait(5000, () => {
    output("Second request done.");
  });
  const request3 = wait(2000, () => {
    output("Third request done.");
  });


  await Promise.all([request1, request2, request3]);

}

async function wait(ms, callback) {
  const timeout = new Promise((res) => setTimeout(res, ms));
  await timeout;
  callback();
}