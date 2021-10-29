const plugin = (input) => {
   const { data, metadata } = input;
   const y = data[0].y.map(x => Math.log(x));
   const output = `Timestamp,${data[0].name}_log\n` + y.map((x, i) => `${data[0].x[i].toISOString()},${x}`).join('\n');
   return output;
}