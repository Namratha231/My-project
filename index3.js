var arr=[9,9,0,8,0,0,2,6,8,5]
var sum =0
for(let i=0;i<arr.length;i++)
{
  sum +=arr[i];
}
for(var i=1;i<=sum;i++)
{
  if (i%12==0)
  {
    process.stdout.write('FizzBuzz'+" ");
  }
  else if(i%4==0)
  {
    process.stdout.write('Buzz'+" ");
  }
  else if(i%3==0)
  {
    process.stdout.write('Fizz'+" ");
  }
  else
  {
    process.stdout.write(i+" ");
  }
}