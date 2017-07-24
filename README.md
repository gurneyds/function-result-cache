# function-result-cache
Demonstration of how to cache results from a pure function to speed up js performance

If a pure function takes a long time to execute, then there is a desire to cache the results to speed up performance.

There are 4 different implementations are provided:

  1. cacheableModuleRevealing.js - Module revealing pattern that exposes functions to set the function that will executed, get the results for a given key and flush the cache.
  2. cacheableSingleKey.js - A single key can be passed into the "get" function to return the cached result
  3. cacheableMultipleKey.js - Multiple keys can be passed into the "get" function to return the cached result. All of the parameters are concatenated together to form the effective key.
  4. Cacheable.js - An es6 class representation of the cache that can handle multiple keys.


Unit test are only provided for #3 and #4 above, but could easily be provided for the others as well.
