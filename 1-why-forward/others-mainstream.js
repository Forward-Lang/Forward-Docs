/// [function]
   function say(text) {
      console.log(text);
      return true;
   }
/// [function]

/// [anonFunction]
   say2 = (x) => { console.log(x); return true; };
/// [anonFunction]

/// [ifElse]
   if (true) {
      say("it is true"); 
   } else { 
      say("it is not true"); 
   } 
/// [ifElse]

/// [loops]
   for (var i of [1, 2, 3, 4, 5]) {
      say(i);
   }

   for (var i = 1; i <= 5; i++) {
      say(i);
   }


   while (true) { 
      say("this is an infinite loop");
   }
/// [loops]

/// [short]
   true && say("it is true") || say("it is not true")
/// [short]

/// [recursion]
   function while_loop() {
      say("yes") && true && while_loop();
   }

   function for_loop(i) { 
      i++; 
      say(i);
      (i == 5) || for_loop(i);
   }

   for_loop(0)  // <1>
   while_loop() // <2>
   // (1) execute for-loop first
   // (2) since the while-loop will enter an infinite loop,
   //     you will need to cancel the execution by pressing CTRL-C
/// [recursion]

/// [mapReduce]
   const numbers = [1, 2, 3, 4, 5];

   say(numbers.map(i => i * 3));
   say(numbers.filter(i => i % 2));
   say(numbers.reduce((a,b) => a + b ));
/// [mapReduce]

//    * properties, methods

myObject = { myProperty: "name", myMethod: (x) => "name"; }
