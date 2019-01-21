

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