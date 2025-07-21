    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];


    // console styles
    const headerStyle = "color: white; background: rgb(22, 97, 163); font-weight: bold; padding: 3px 6px; border-radius: 3px;";
    const subHeaderStyle = "color: rgb(22, 97, 163); font-weight: bold; text-decoration: underline;";
        
    console.log("%cArray: people",headerStyle);
    console.table(people);

    console.log("\n%cArray: comments",headerStyle);
    console.table(comments);

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    
    // Get current year for age calculation
    const currentYear = new Date().getFullYear();
   
    // some check
    const hasAdult = people.some(person => (currentYear - person.year) >= 19 )
    
    console.log("\n%cIs at least one person 19 or older?",subHeaderStyle)
    console.log(hasAdult 
        ? "\tThere is at least one adult in the list." 
        : "\tThere are no adults in the list.");      

    // Array.prototype.every() // is everyone 19 or older?

    // every check
    const allAdult = people.every(person => (currentYear - person.year) >= 19)
    
    console.log("\n%cIs everyone 19 or older?",subHeaderStyle)
    console.log(allAdult 
        ? "\tEveryone in the list is an adult." 
        : "\tNot everyone in the list is an adult.");


    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    
    // find the comment with the ID of 823423
    const commentFound = comments.find(comment => comment.id === 823423)

    console.log("\n%cFind the comment with the ID of 823423",subHeaderStyle)
    console.log("\tcomment found with ID of 823423");
    console.table(commentFound);

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423

    // find index
    let index = comments.findIndex(comment => comment.id === 823423)
    
    // creating new excluding index element 
    let newComments = [
        ...comments.slice(0,index),
        ...comments.slice(index + 1)
    ];
    console.log("\n%cnewComments array excluding comment with found index",subHeaderStyle);
    console.table(newComments);

    // deleting index element from original array
    comments.splice(index,1);
    console.log("\n%coriginal comments array excluding comment with found index",subHeaderStyle);
    console.table(comments);