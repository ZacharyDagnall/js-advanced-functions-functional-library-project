const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (coll, func) {
      for (let i = 0; i < coll.length; i++) {
        func(coll[i])
      }
      return coll
    },

    map: function (coll, func) {
      let result = []
      for (let i = 0; i < coll.length; i++) {
        result[i] = func(coll[i])
      }
      return result
    },

    reduce: function () {

    },

    find: function (coll, pred) {
      for (let i = 0; i < coll.length; i++) {
        if (pred(coll[i])) {
          return coll[i]
        }
      }
      return undefined
    },

    filter: function (coll, pred) {
      let result = []
      for (let i = 0; i < coll.length; i++) {
        if (pred(coll[i])) {
          result.push(coll[i])
        }
      }
      return result
    },

    functions: function () {

    },

    size: function (coll) {
      let num = 0;
      coll.forEach(el => num++)
      return num
    }

  }
})()

fi.libraryMethod()
