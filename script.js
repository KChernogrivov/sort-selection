let mass = [];
for(let i = 0; i < 100; i++) mass[i] = Math.floor(Math.random() * 100);

for(let i = 0; i < mass.length; i++) {
    let max = mass[i]
    let idx = i;
    for(let j = i+1; j < mass.length; j++) {
        if(max < mass[j]) {
            max = mass[j]
            idx = j
        }
    }
    mass[idx] = mass[i]
    mass[i] = max
}