let marks=prompt("Enter your mark");
if(marks>70){
    console.log("Marks are "+ marks +" grade is A");
}
else if(marks>=50 && marks <=70){
    
        console.log("Marks are "+ marks +" grade is B");
    }
    else{
        console.log("Marks are " +marks+"grade is C");
    }
let name=(marks>=50 && marks<=70)?console.log("Marks are " +marks+"grade is B"):"";
         (marks>70)?console.log("Marks are " +marks+"grade is A"):"";