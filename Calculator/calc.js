let currentDisplay = "";

      const appendToDisplay = (value) => {
        currentDisplay += value;
        document.querySelector("#displayInput").value = currentDisplay;
      };
      function clearDisplay() {
        currentDisplay = "";
        document.querySelector("#displayInput").value = currentDisplay;
      }

      function calculateResult() {
        try {
          let result = eval(document.querySelector("#displayInput").value);
          if (isNaN(result) || !isFinite(result)) {
            throw new Error("Invalid expression");
          }
          currentDisplay = result;
          document.querySelector("#displayInput").value = result;
        } catch (error) {
          document.querySelector("#displayInput").value = "Error";
        }
      }

      document.addEventListener("keydown", function (event) {
        // Get the pressed key from the event
        const pressedKey = event.key;

        // Check if the pressed key is a number, an arithmetic operator, Enter, or the backspace key
        if (
          !isNaN(pressedKey) ||
          ["+", "-", "*", "/", "Enter", "Delete", "."].includes(pressedKey)
        ) {
          // If Enter is pressed, calculate the result
          if (pressedKey === "Enter") {
            calculateResult();
          } else if (pressedKey === "Delete") {
            document.querySelector("#displayInput").value = "";
          } else {
            // Update the displayed text with the pressed number, operator, or Enter
            if (document.querySelector("#displayInput").value === "Error") {
              document.querySelector("#displayInput").value = "";
            }
            updateDisplayedText(pressedKey);
          }
        } else if (pressedKey === "Backspace") {
          // Handle backspace key
          handleBackspace();
        }
      });

      function updateDisplayedText(pressedKey) {
        // Get the current displayed text

        let currentText = document.querySelector("#displayInput").value;

        // Append the pressed number, operator, or Enter to the current text
        currentText += pressedKey;

        // Update the displayed text
        document.querySelector("#displayInput").value = currentText;
      }

      function handleBackspace() {
        // Get the current displayed text
        let currentText = document.querySelector("#displayInput").value;
        if (currentText === "Error") {
          document.querySelector("#displayInput").value = "";
        } else {
          currentText = currentText.slice(0, -1);

          // Update the displayed text
          document.querySelector("#displayInput").value = currentText;
        }
        // Remove the last character from the current text
      }