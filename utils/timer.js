const timer = async (label, fn) => {
  const start = Date.now();
  const result = await fn();
  const end = Date.now();
  console.log(`${label} took ${end - start}ms`);
  return result;
};

module.exports = timer;
