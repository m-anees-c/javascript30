let lastChecked;

function handleCheck(e) {
    let inBetween = false;

    // if checkbox click by holding shift key
    if (e.shiftKey && this.checked) {
        // iterate over all checkboxes
        checkboxes.forEach(checkbox => {
            // if checkbox is current checkbox or last checked , toggle inBetween status
            if ( checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }
            // if inBetween check it 
            if (inBetween){
                checkbox.checked = true ;
            }
        });
    }
    lastChecked = this;
}

const checkboxes = document.querySelectorAll(".inbox input[type = checkbox]");
checkboxes.forEach(checkbox => checkbox.addEventListener("click",handleCheck));
