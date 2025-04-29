
{
  // ‼️ ESM import from a .ts file (relative to generated parser)
  import { double } from '../src/math.ts';
}

Start
  = _ a:Number _ op:("+" / "-") _ b:Number _
    { return op === "+" ? double(a + (op === "-" ? -b : b)) : 0; }

Number "number"
  = digits:[0-9]+ { return parseInt(digits.join(""),10); }

_ = [ \t\n\r]*