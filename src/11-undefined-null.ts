(() => {
  // let myString: string = null;
  // let myNumber: number = undefined;

  let myString: string | null = null;
  let myNumber: number | undefined = undefined;

  const hi = (name: string | null) => {
    let hello = 'Hello ';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }

    console.log(hello);
  };

  const hi2 = (name: string | null) => {
    let hello = 'Hello ';
    hello += name?.toUpperCase() ?? 'Nobody';
    console.log(hello);
  };

  // Undefined case
  const hi3 = (name: string = 'Nobody') => {
    console.log(`Hello ${name}`);
  };

  hi('Carlos');
  hi(null);

  hi2('Javier');
  hi2(null);

  hi3('Johan');
  hi3();
})();
