(() => {
  // Alias
  type UserId = string | number | boolean;
  let userId: UserId;

  function myTest(userId: UserId) {
    if (typeof userId === 'string') {
      console.log(`String ${userId.toLowerCase()}`);
    }
  }

  myTest('Carlos');
  myTest(123.2233);
  myTest(true);

  // Literal Types
  type Size = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Size;
  shirtSize = 'S';

  console.log({ size: shirtSize });
})();
