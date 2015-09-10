beforeEach(function () {
  jasmine.addMatchers({
    valueOf: function () {
      return {
        compare: function (actual, expected) {
          var stateCode = actual;

          return {
            pass: stateCode.actual === 'DC'
          };
        }
      };
    }
  });
});
