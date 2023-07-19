function capitalizeNames(arr) {
    let x = arr.map((ele) => {
      return ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase();
    });
    return x;
  }
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 