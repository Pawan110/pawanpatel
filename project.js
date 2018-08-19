var totalAmt = document.getElementById("totalAmount");
var date = new Date();
var month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var AvailableBudget = document.getElementById("innerDivH1");
AvailableBudget.textContent = "Available Budget in "+month[date.getMonth()]+" "+date.getFullYear();
var incomeTotal = document.getElementById("incomeTotal");
var expensesTotal = document.getElementById("expenseTotal");
var description = document.getElementById("description");
var amount = document.getElementById("amount");
var addbtn = document.getElementById("addbtn");
var incomeSelected = true;
var incomeRbtn = document.querySelector("#incomeRbtn");
var expensesRbtn = document.querySelector("#expenseRbtn");
var IncomeDv = document.getElementById("incDiv");
var ExpenseDv =document.getElementById("expDiv"); 
var countInc = 0;
var countExp = 0;
description.addEventListener("input",function(){
amount.value = " ";
});
incomeRbtn.addEventListener("click",function(){
   
    document.querySelector("#expenseDiv").style.boxShadow ="none";
     document.querySelector("#incomeDiv").style.boxShadow = "5px 5px 5px black,-5px -3px 5px black";
    incomeSelected = true;
    description.value = "";
    amount.value = "";
    });
expensesRbtn.addEventListener("click",function(){
   
    document.querySelector("#incomeDiv").style.boxShadow = "none";
     document.querySelector("#expenseDiv").style.boxShadow = "5px 5px 5px black,-5px -3px 5px black";
     incomeSelected = false;
     description.value = "";
     amount.value = "";
    });
    addbtn.addEventListener("click",addbtnfn);
    function addbtnfn(){
        var total =Number(totalAmt.textContent);
        var amt  = Number(amount.value);
        var totIncome = Number(incomeTotal.textContent);
        var totExpenses = Number(expensesTotal.textContent);
        if(incomeSelected){
            total = total+amt;
            totalAmt.textContent = total;
            totIncome+=amt;
            incomeTotal.textContent = totIncome;
            countInc++;
            console.log(countInc);
            createDiv(IncomeDv,countInc);
        }
        else{
            if(total<=0 || (total-amt)<0){
                alert("You Dont Have Sufficient Funds! Please Add ");
                return -1;
            }
            total = total-amt;
            totalAmt.textContent = total;
            totExpenses+=amt;
            expensesTotal.textContent = totExpenses;
            countExp++;
            createDiv(ExpenseDv,countExp);
        }
    }
    function createDiv(incdv,i){
       var cDiv = document.createElement("DIV");
       cDiv.setAttribute("class","createdDv");
       incdv.appendChild(cDiv);
       var heading1 = document.createElement("H2");
       heading1.classList.add("heading21");
       heading1.textContent = description.value;
       cDiv.appendChild(heading1);
       var heading2 = document.createElement("H2");
       heading2.classList.add("heading22");
       heading2.textContent = amount.value;
       if(incomeSelected){
           heading2.style.color = "green";
           console.log(i);
           if(i%2===0){
               cDiv.style.backgroundColor = "grey";
           }
       }
       else{
        heading2.style.color = "red";
        if(i%2===0){
            console.log("hello");
            cDiv.style.backgroundColor = "grey";
        }
       }
       cDiv.appendChild(heading2);
       
    }