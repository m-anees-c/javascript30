        let canvas = document.getElementById("canvas");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        let ctx = canvas.getContext("2d");
        let startY = 0;
        let startX = 0;
        ctx.lineWidth = 1;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        let hue = 0 ;
        ctx.strokeStyle = "#BADA55"
        let direction = true ;

        let isDrawing = false;
        
            
        
        function draw(e){
            // exit draw function if not in drawing state 
            if (!isDrawing) return ;
            
            ctx.strokeStyle = `hsl(${hue},100%,50%)`
            ctx.beginPath();

            // line starts from
            ctx.moveTo(startX,startY);
            // line end to
            ctx.lineTo(e.offsetX,e.offsetY);
            ctx.stroke();

            // set x,y positions as last x,y positions to continuation
            startX = e.offsetX;
            startY = e.offsetY;

            hue++ ;

            // reset hue color to 0
            if ( hue >= 360 ) {
                hue = 0;
            } 

            // Toggle direction when lineWidth hits the limits (1 or 100)
            if ( ctx.lineWidth >= 100 || ctx.lineWidth <= 1 ) {
                direction = !direction ; // reverse the direction flag
            }

            // update lineWidth based on current direction flag
            if ( direction ) {
                ctx.lineWidth++ ; // increase lineWidth
            } else {
                ctx.lineWidth-- ; // decrease lineWidth
            }

        }

        // mouse event
        canvas.addEventListener("mousedown",(e) => {
            startX = e.offsetX;
            startY = e.offsetY;
            isDrawing = true;
        });
        
        // mousedown event
        canvas.addEventListener("mousemove",draw);

        // mouseup event
        canvas.addEventListener("mouseup",() => {
            isDrawing = false;
        })

        // mouseout event
        canvas.addEventListener("mouseout",()=>{
            isDrawing = false;
        })

