(() => {
  function myTest(text: number | string) {
    if (typeof text === 'string') {
      console.log(`string ${text.toLowerCase()}`);
    } else {
      console.log(`number ${text.toFixed(1)}`);
    }
  }

  myTest('Carlos');
  myTest(27.242344);
  myTest('Joh@n');
})();
