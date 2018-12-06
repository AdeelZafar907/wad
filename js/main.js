var CustomerDetails=
    {
      title:"Adeel Zafar",
      balance:123000,
      currency:"PKR",
      IBAN:"PKR123454321"
    };
document.getElementById("title").innerHTML=CustomerDetails.title;
document.getElementById("currency").innerHTML=CustomerDetails.currency;
document.getElementById("balance").innerHTML=CustomerDetails.balance;
document.getElementById("IBAN").innerHTML=CustomerDetails.IBAN;
function DepositAmount()
{
    if (event.keyCode===13)
    {
        CustomerDetails.balance = CustomerDetails.balance  + parseInt(document.getElementById("deposit").value);
        document.getElementById("balance").innerHTML=CustomerDetails.balance;
    }
}
function WithdrawAmount()
{
    if (event.keyCode===13)
    {
        CustomerDetails.balance = CustomerDetails.balance  - parseInt(document.getElementById("withdraw").value);
        document.getElementById("balance").innerHTML=CustomerDetails.balance;
    }
}


