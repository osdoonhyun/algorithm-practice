const obj1 = {
  a: 'a',
  b: 1,
  c: ['a', 'b', 'c'],
  d: {
    e: null,
    f: -1,
  },
};

const obj2 = {
  a: 'a',
  b: 1,
  c: ['a', 'b', 'c'],
  d: {
    e: null,
    f: -1,
  },
};

function isEqual(objA, objB) {
  const checkObjects =
    objA && objB && typeof objA === 'object' && objB === 'object';

  if (checkObjects && Object.keys(objA).length === Object.keys(objB).length) {
    return Object.keys(objA).reduce((equal, key) => {
      return equal && isEqual(objA[key], objB(key));
    }, true);
  } else {
    return objA === objB;
  }
}

console.log(isEqual(obj1, obj2));
