const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('asinc!!'), 2000)
      : reject(new error('error!'));
  });
};

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log('H00ello');
};
console.log('huahua');
console.log('before');
anotherFn();
console.log('after');
console.log('done');
