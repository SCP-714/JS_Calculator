const button = document.getElementById("equals");

button.addEventListener("click",function(){ alert("gottem"); });

// Execute a function when the user presses a key on the keyboard
button.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("equals").click();
    }
  });

  const addButton = document.getElementById("add");

addButton.addEventListener("click",function(){ alert("addition"); });

// Execute a function when the user presses a key on the keyboard
addButton.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("add").click();
    }
  });

  const subtractButton = document.getElementById("subtract");

  subtractButton.addEventListener("click",function(){ alert("subtraction"); });
  
  // Execute a function when the user presses a key on the keyboard
  subtractButton.addEventListener("keypress", function(event) {
      // If the user presses the "Enter" key on the keyboard
      if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("subtract").click();
      }
    });

    const divideButton = document.getElementById("divide");

    divideButton.addEventListener("click",function(){ alert("division"); });
  
  // Execute a function when the user presses a key on the keyboard
  divideButton.addEventListener("keypress", function(event) {
      // If the user presses the "Enter" key on the keyboard
      if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("divide").click();
      }//
    });