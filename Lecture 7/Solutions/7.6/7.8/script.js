const elements = {
    display: document.querySelector("#display"),
    equal: document.querySelector(".equal"),
    numbers: document.querySelectorAll(".number"),
    operators: document.querySelectorAll(".operator"),
    decimal: document.querySelector("#decimal"),
    clear: document.querySelector("#clear"),
  };
  
  const ops = ["+", "-", "*", "/"];
  
  let calculated = false;
  
  const calculate = (operator, num1, num2) => {
    const calculate = {
      "+": () => num1 + num2,
      "-": () => num1 - num2,
      "*": () => num1 * num2,
      "/": () => num1 / num2,
      default: () => "can't do that",
    };
    return calculate[operator] ? calculate[operator]() : calculate["default"]();
  };
  
  const calculateArbitraryLength = () => {
    let digits = elements.display.textContent.split(" ");
  
    /* Go through all numbers in the list, and if we find * or / operators,
       calculate the result with the numbers on both sides of that operator, 
       and then replace the operator and both of those numbers in the list
       with the result, basically 3 items in the list turns to 1
    */
    while (digits.includes("*") || digits.includes("/")) {
      digits.forEach((curr, i, thisArr) => {
        if (["*","/"].includes(curr)) {
          const res = calculate(curr, Number(thisArr[i - 1]), Number(thisArr[i + 1]));
  
          thisArr.splice(i - 1, 3, String(res));
        }
      })
    }
    /* Go through all numbers in the list, and if we find + or - operators,
       calculate the result with the numbers on both sides of that operator,
       and then replce the operator and both of those numbers in the list
       with the result. Bascially 3 items in the list turns to 1
    */
    while (digits.includes("+") || digits.includes("-")) {
      digits.forEach((curr, i, thisArr) => {
        if (["+","-"].includes(curr)) {
          const res = calculate(curr, Number(thisArr[i - 1]), Number(thisArr[i + 1]));
  
          thisArr.splice(i - 1, 3, String(res));
        }
      })
    }
    // we should only have 1 value left, which is the total value.
    elements.display.textContent = digits[0];
  }
  
  elements.equal.addEventListener("click", () => {
    // calculate arbitrary length
    calculateArbitraryLength();
    
    // simple calculate with 2 numbers
    const digits = elements.display.textContent.split(" ");
    //elements.display.textContent = calculate(digits[1], Number(digits[0]), Number(digits[2]));
    
    calculated = true;
  });
  
  elements.numbers.forEach((element) =>
    element.addEventListener("click", (e) => {
      const value = e.target.textContent;
      if (calculated) {
        elements.display.textContent = "0";
      }
      calculated = false;
      elements.display.textContent === "0"
        ? (elements.display.textContent = value)
        : (elements.display.textContent += value);
    })
  );
  
  elements.operators.forEach((element) =>
    element.addEventListener("click", (e) => {
      let operator = e.target.textContent;
      // if a decimal dot is left as the last character, remove it
      if (elements.display.textContent[elements.display.textContent.length - 1] === ".") {
        elements.display.textContent = 
          elements.display.textContent.slice(0, elements.display.textContent.length - 1);
      }
      // if the last character is an operator, remove it. 
      if (["+", "-", "*", "/"].includes(
        elements.display.textContent[elements.display.textContent.length - 2])
      ) {
        elements.display.textContent = 
          elements.display.textContent.slice(0, elements.display.textContent.length - 3); 
      }
      // lisää operaattori
      elements.display.textContent = `${elements.display.textContent} ${operator} `;
    })
  );
  
  // splits all digits in the display by operators
  // I've used a regexp that recognizes +, -, *, / signs 
  const getDigits = () => elements.display.textContent.split(/[\+\-*\/]/);
  
  elements.decimal.addEventListener("click", (e) => {
    const digits = getDigits();
    // check the last number in the display, 
    // if it doesn't exists (using truthy/falsy) (this also recognizes operator being last char) 
    // or
    // '.' doesn't exist yet in that number 
    if (digits[digits.length - 1] &&
        !digits[digits.length - 1].includes(".")) {
        elements.display.textContent += ".";
    }
  
  });
  
  elements.clear.addEventListener(
    "click",
    () => (elements.display.textContent = "0")
  );
  