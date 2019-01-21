
const describe = (description, funct) => {
  console.log(description);
  funct();
};

const it = (description, funct) => {
  console.log(description);
  funct();
};

const toBeIdenticalTo = (object1, object2) => {
  if (object1 === object2) {
    console.log('pass')
  } else {
    console.log('fail')
    console.log(object1 + ' is not identical to ' + object2)
  };
};

const matchers = (exp) => ({
  toBeIdenticalTo: (assertion) => {
    if (exp === assertion) {
      console.log('pass')
    } else {
      console.log('fail')
    }
  }
})

expect = (exp) => matchers(exp)