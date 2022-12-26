var number=parseInt(prompt("enter number:"));
var a="";
for(i=0;i<=number;i++)
{
	for(j=0;j<number-i;j++)
	{
		a+="*";
	}
	    a+="\n";
}
console.log(a);