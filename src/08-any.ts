let dynamicVar: any;

dynamicVar = 123;

// Cast to number
const rta = (<number>dynamicVar).toPrecision();
const rta2 = (dynamicVar as number).toExponential();
