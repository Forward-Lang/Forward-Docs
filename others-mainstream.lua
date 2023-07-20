--- [function]
   function say(text)
     print(text);
     return true;
   end
--- [function]

--- [anonFunction]
   say = function (text) print(text); return true; end
--- [anonFunction]

--- [ifElse]
   if true then
      say("it is true");
   else
      say("it is not true");
   end
--- [ifElse]

--- [loops]
   for i = 1,5 do
      say(i);
   end

   -- execute once, stop when true
   repeat
     say("this is executed once");
   until true

   -- execute only if true
   while true do
      say("this is an infinite loop");
   end
--- [loops]

--- [short]
   x = true and say("it is true") or say("it is not true")
   -- the `x =` is required since lua distinguishes between statements and expressions
--- [short]

--- [recursion]
   function while_loop ()
     say("yes");
     return true and while_loop();
   end

   function for_loop (i)
     i = i+1;
     say(i);
     return (i == 5) or for_loop(i);
   end

   for_loop(0)   -- <1>
   while_loop()  -- <2>
   -- (1) execute for-loop first
   -- (2) since the while-loop will enter an infinite loop,
   --     you will need to cancel the execution by pressing CTRL-C
--- [recursion]

-- == Functional constructs

-- lua doesn't implement map, reduce, filter by default
