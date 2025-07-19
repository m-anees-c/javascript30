      // get all input elements
      const inputs = document.querySelectorAll('.controls input');
      inputs.forEach(input => {
        // add event listeners to input elements and update styles
        input.addEventListener("input", changeStyle);
      })

      // function to change CSS variable values
      function changeStyle() {
        newVlaue = this.value; // get selected value
        prefix = this.dataset.sizing || ''; // get size unit or make it default empty string
        propertyName = this.name; // get variable name to update
        document.documentElement.style.setProperty(`--${propertyName}`, `${newVlaue + prefix}`); // update variable value
       
        // display current input value
        displayInputValue()
      }

     

      // function to display input value
      function displayInputValue() {
        // get css variable values
        let spacingValue = getComputedStyle(document.documentElement).getPropertyValue('--spacing');
        let blurValue = getComputedStyle(document.documentElement).getPropertyValue('--blur');
        
        // update input value texts
        document.getElementById('spacing').parentElement.querySelector('.value').textContent = spacingValue ;
        document.getElementById('blur').parentElement.querySelector('.value').textContent = blurValue ;
      }

      // get reset button
      const resetButton = document.querySelector('.reset');
      // Update CSS variables to default on reset button click
      resetButton.addEventListener("click",function(){
        // reset css variables
        document.documentElement.style.setProperty('--spacing','10px');
        document.documentElement.style.setProperty('--blur','0px');
        document.documentElement.style.setProperty('--base','#757575');

        // reset input values
        document.getElementById('spacing').value = '10';
        document.getElementById('blur').value = '0';
        document.getElementById('base').value = '#757575';

        // display reseted input value
        displayInputValue();

      })

