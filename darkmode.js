var count=0;
function clicked()
{
if(count%2==0 && count!=0)
{
  let ele=document.getElementsByTagName('body');
  ele[0].style.backgroundColor="white";
  document.body.style.color="black";

  count++;

}
else
{
    let ele=document.getElementsByTagName('body');
    ele[0].style.backgroundColor="black";
    document.body.style.color="white";
    count++;
}
}