/*jshint eqnull:true, expr:true*/

var _ = {};

(function() {

  // Returns whatever value is passed as the argument. This function doesn't
  // seem very useful, but remember it--if a function needs to provide an
  // iterator when the user does not pass one in, this will be handy.
  _.identity = function(val) {
    return val;
  };

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   *
   *
   * IMPORTANT NOTE!
   * ===========
   *
   * The .first function is implemented for you, to help guide you toward success
   * in your work on the following functions. Whenever you see a portion of the
   * assignment pre-completed, be sure to read and understand it fully before
   * you proceed. Skipping this step will lead to considerably more difficulty
   * implementing the sections you are responsible for.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    return n === undefined ? array[array.length-1] : (n > array.length) ? array.slice(0,n) : array.slice(array.length-n, array.length) // if undefined, return  the last array, if not undefined and n is greater than array length, return all elements of array, otherwise, return elements (starting at array.length-n) until the end of the array
        };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.
  _.each = function(collection, iterator) {
    if (Array.isArray(collection)) { //if collection is an array
      for (var i = 0; i < collection.length; i++) { //set up of array
        iterator(collection[i], i, collection); // call the array item by index, the index, then print the full array
      }
    }
    else if (typeof collection === 'object') { //otherwise, if this is an object
      for (var prop in collection) { //set up of iteration through object
        iterator(collection[prop], prop, collection) //iterate on each key 
      }
    }
    else
      return "not an Array or Object" //otherwise return "not an array or object"
    };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
    // TIP: Here's an example of a function that needs to iterate, which we've
    // implemented for you. Instead of using a standard `for` loop, though,
    // it uses the iteration helper `each`, which you will need to write.
    var result = -1;

    _.each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });

    return result;
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test) {
    var result = []; //create an empty array for positive items to be added to
    
    _.each(collection, function(item) { // pass collection as the array, item is the callback argument 
      if (test(item)) {result.push(item)} //test if the item is true in the callback function, if true, push item
    });
      return result;
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, test) {
    // TIP: see if you can re-use _.filter() here, without simply
    // copying code in and modifying it
<<<<<<< HEAD
    //   return _.filter(collection, function(item) {
    //     return !test(item);
    //   });
    // };
    return _.filter (collection, function(item) {
      return !(test(item))                                // hard to visualize
=======
    return _.filter (collection, function(args) {
      return !(test(args))
>>>>>>> parent of cd7aff9... completed section 1 through invoke!
    });
  };

  // Produce a duplicate-free version of the array.
<<<<<<< HEAD
  _.uniq = function(array) {     
    var results = [];
    _.each(array, function(item) {
      if (_.indexOf(results, item) === -1) {
        results.push(item)
      }
=======
  _.uniq = function(array) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if (_.indexOf(results, array[i]) === -1) {
      results.push(array[i]);
>>>>>>> parent of cd7aff9... completed section 1 through invoke!
    }
  }
  return results;
};

  
  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
<<<<<<< HEAD
    var mapped = [];
    _.each(collection, function(item) {
      mapped.push(iterator(item));
    })
    return mapped;
  }    


    // var results = [];
    // _.each(collection, function(item) {
    //   results.push(iterator(item))
    // })
    // return results;
    // };
=======
    var results = [];

    for (var i = 0; i < collection.length; i++) {
      results.push(iterator(collection[i]));

    }
    return results;
  };

>>>>>>> parent of cd7aff9... completed section 1 through invoke!



  /*
   * TIP: map is really handy when you want to transform an array of
   * values into a new array of values. _.pluck() is solved for you
   * as an example of this.
   */

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(collection, key) {
    // TIP: map is really handy when you want to transform an array of
    // values into a new array of values. _.pluck() is solved for you
    // as an example of this.
    return _.map(collection, function(item){
      return item[key];
    });
  };

  // Calls the method named by functionOrKey on each value in the list.
  // Note: you will nead to learn a bit about .apply to complete this.
  _.invoke = function(collection, functionOrKey, args) {
<<<<<<< HEAD
    if (typeof functionOrKey === 'function') {
      return _.map(collection, function(item) {
        return functionOrKey.apply(item)(args)                     // args here is optional?
      })
    }
    else if (typeof functionOrKey === 'string') {
      return _.map(collection, function(item) {
        return item[functionOrKey](args)                        // args here is optional? 
      })
    }
};

    // if (typeof functionOrKey === 'function') {
    //   return _.map(collection, function(item) {             // are map and invoke the same wrt functions?
    //     return functionOrKey.apply(item, args);
    //   })} 
    //   else if (typeof functionOrKey === 'string') {
    //     return _.map(collection, function(item) {
    //       return item[functionOrKey]();
    //     })
    //   }
    // };

  //   return (typeof functionOrKey === 'function') ?
  //     function() {
  //     return _.map(collection, function(item) {
  //       return functionOrKey.apply(item, args)
  //     })}() :
      
  //     function() {return _.map(collection, function(item) {
  //       return item[functionOrKey](args)
  //     })
  // }() 

  // };
=======
  };
>>>>>>> parent of cd7aff9... completed section 1 through invoke!

  // Reduces an array or object to a single value by repetitively calling
  // iterator(previousValue, item) for each item. previousValue should be
  // the return value of the previous iterator call.
  //
  // You can pass in an initialValue that is passed to the first iterator
  // call. If initialValue is not explicitly passed in, it should default to the
  // first element in the collection.
  //
  // Example:
  //   var numbers = [1,2,3];
  //   var sum = _.reduce(numbers, function(total, number){
  //     return total + number;
  //   }, 0); // should be 6
  _.reduce = function(collection, iterator, accumulator) {
    if (accumulator === undefined) {
      accumulator = collection[0]
    }
    
    _.each(collection, function(item) {
      accumulator = iterator(accumulator, item)
    })

    return accumulator;
  };

  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    // TIP: Many iteration problems can be most easily expressed in
    // terms of reduce(). Here's a freebie to demonstrate!
    return _.reduce(collection, function(wasFound, item) {  // wasFound is the accumulator
      if (wasFound) {                                       // and by default is false (from 3rd argument = 'false' below)
        return true;                                        // until wasFound is true
      }
      return item === target;                               // answer to return item === target becomes accumulator
    }, false);                                              // sets default value of accumulator (wasFound) to false
    
    // ---------------------------------------------------
    //  Alternative Implementation
    //  var wasFound = false
    //    _.each(collection, function(item) {  
    //    if (item === target && wasFound === false) {
    //      wasFound = true;
    //       }
    //    })
    //  return wasFound
    // ---------------------------------------------------    

  };

  // Determine whether all of the elements match a truth test.
  // _.every = function(collection, iterator) {
  //   // TIP: Try re-using reduce() here.
  //     return _.reduce(collection, function(accumulator, item) {
  //       iterator = iterator || function() { return _.identity(item) }
  //       return !!((iterator(item)) && (accumulator))
  //   }, true)

  _.every = function(collection, iterator) {
    // TIP: Try re-using reduce() here.
      return _.reduce(collection, function(accumulator, item) {
      iterator = iterator || function() {return _.identity(item)}
      return ((!!iterator(item) && accumulator))}
      , true);
    };
  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {
    // TIP: There's a very clever way to re-use every() here.
    return !_.every(collection, function(item){
       return iterator ? !iterator(item) : !item
      }
    )
  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla
  _.extend = function(obj) {
//     _.each(arguments, function(item) {
//       for (var z in item) {
//       obj[z] = item[z]
//       }
//       })
//     return obj; 
// }
  
    for (var i = 0; i < arguments.length; i++ ) {
      for (var key in arguments[i]) {
        obj[key] = arguments[i][key];
      }
    }
    return obj;
   }

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
    for (var x = 0; x < arguments.length; x++) {
        for (var z in arguments[x]) {
          if (typeof obj[z] === "undefined") {
            obj[z] = arguments[x][z]
          }
        }
    }
    return obj;

  };


  /**
   * FUNCTIONS
   * =========
   *
   * Now we're getting into function decorators, which take in any function
   * and return out a new version of the function that works somewhat differently
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    // TIP: These variables are stored in a "closure scope" (worth researching),
    // so that they'll remain available to the newly-generated function every
    // time it's called.
    var alreadyCalled = false;
    var result;

    // TIP: We'll return a new function that delegates to the old one, but only
    // if it hasn't been called before.
    return function() {
      if (!alreadyCalled) {
        // TIP: .apply(this, arguments) is the standard way to pass on all of the
        // infromation from one function call to another.
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }
      // The new function always returns the originally computed result.
      return result;
    };
  };

  // Memoize an expensive function by storing its results. You may assume
  // that the function takes only one argument and that it is a primitive.
  //
  // _.memoize should return a function that when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
    var result = {};
    return function(key) {
        if (key in result) {
          return result[key]
        }
        else {
          result[key] = func.apply(this, arguments);
        }
        return result[key]
  }
};



  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
    _.delay = function(func, wait) {
    var argsArr = [];
    _.each(arguments,function(item,index){
      if (index > 1) {
        argsArr.push(item);
      }
    });
    setTimeout(function(){
      func.apply(this,argsArr);
      },
      wait)
  };


//or var args = Array.prototype.slice.call(arguments, 2); instead of 
// var argsArr = [];
//     _.each(arguments,function(item,index){
//       if (index > 1) {
//         argsArr.push(item);
//       }
//     });
  /**
   * ADVANCED COLLECTION OPERATIONS
   * ==============================
   */

  // Randomizes the order of an array's contents.
  //
  // TIP: This function's test suite will ask that you not modify the original
  // input array. For a tip on how to make a copy of an array, see:
  // http://mdn.io/Array.prototype.slice
  _.shuffle = function(array) {
    var copyofArray = array.slice();
    var shuffledArray = [];

    while (copyofArray.length > 0) {
      var element = copyofArray.splice(Math.floor(Math.random()*copyofArray.length), 1)
      shuffledArray.push(element[0]);
    }
    
    return shuffledArray;
  };


  /**
   * Note: This is the end of the pre-course curriculum. Feel free to continue,
   * but nothing beyond here is required.
   */


  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
    var sorted = [];

    // if Array.isArray(collection) {
    //   for (var i = 0; i < collection.length-1; i++) {
    //     iterator.sort
    //     if (iterator[i] < iterator[i+1]) {
    //       sorted.push[i]
    //     }
    //   }
    // }



    // // if iterator === 'string' {                    //if iterator is a string, collection is an object
    // //   for (x in collection) {
    // //     x[string]
    // //   }
    // // }

    return sorted;

  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]

  _.zip = function() {
    var zipped = [];
    var longestArray = [];

    for (var i = 0; i < arguments.length; i++ ) {
      if (arguments[i].length > longestArray.length) {
        longestArray = arguments[i]
      }
    }

    for (var i = 0; i < longestArray.length; i++ ) {
      zipped.push([]);
      for (var x = 0; x < arguments.length; x++) {  
        
        zipped[i][x] = arguments[x][i];
      }
    }

    return zipped;
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  //
  // Hint: Use Array.isArray to check if something is an array
  _.flatten = function(nestedArray, result) {
    result = result || []

    // var flattenRecur = function(nestedArray) {
    //   for (var i = 0; i < nestedArray.length; i++) {
    //     if (Array.isArray(nestedArray[i])) {
    //       flattenRecur(nestedArray[i])
    //     } else {
    //     result.push(nestedArray[i])
    //     }
    //   }
    // }    
    // flattenRecur(nestedArray);

    _.each(nestedArray, function(item) {
      if (Array.isArray(item)) {
        _.flatten(item, result) 
      } else {
      result.push(item);
    }
    })
    // }
    return result;
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
    var args = Array.prototype.slice.call(arguments);
    var result = args[0].slice();
    var testItem;

    for (var i = 0; i < args[0].length; i++) {
      testItem = args[0][i];
      for (var x = 1; x < args.length; x++) {
        if (_.contains(args[x], testItem)) {
          result[i] = testItem;
        } else {
          result.splice(_.indexOf(result,testItem),1)
        }
      }
    }
    return result
  };


  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var args = Array.prototype.slice.call(arguments);
    var result = args[0].slice();
    var testItem;

    for (var i = 0; i < args[0].length; i++) {
      testItem = args[0][i];
      for (var x = 1; x < args.length; x++) {
        if (_.contains(args[x], testItem)) {
          result.splice(_.indexOf(result,testItem),1)
        }
        }
      }
    return result
  };


  /**
   * MEGA EXTRA CREDIT
   * =================
   */

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.
  //
  // See the Underbar readme for details.
  _.throttle = function(func, wait) {
  };

}).call(this);
