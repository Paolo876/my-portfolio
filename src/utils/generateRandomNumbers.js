const generateRandomNumbers = (max, range) => {
    let arr = [];
    let i = 0;
    while (i < range) {
      const j = Math.floor(Math.random() * max);
      if(!arr.includes(j)){
        arr.push(j)
        i++;
      }   
    }
    return arr
}

export default generateRandomNumbers;