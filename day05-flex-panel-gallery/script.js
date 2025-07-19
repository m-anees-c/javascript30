// get all panels
const panels = document.querySelectorAll(".panel");
    panels.forEach(panel => {
        panel.addEventListener("click", function() {
        
        // toglle 'open' class to clicked panel
        panel.classList.toggle("open");

        // get current opened panel and remove 'open' class
        let opnedPanels = document.querySelectorAll(".open");

        opnedPanels.forEach(opnedPanel => {
            // if openPanel is not last opened panel remove 'open' class
            if(opnedPanel != panel) {
                opnedPanel.classList.remove('open');
            }
        });
            
        
        });
        panel.addEventListener("transitionend", (e) => {
            // after flex transition toggle 'open-active' class
            if (e.propertyName.includes("flex")) {
                panel.classList.toggle("open-active");
            }
        });
    })