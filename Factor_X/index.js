/// Phân tich 1 số nguyên tố thành các tổng
//Tiêp tục đem tổng đi phân tíc cho đên khi không phân tích đước nữa
function solve(n) {
     let k=2;
     let sum=0;
     while(n>1){
         while(n%k==0){
             sum+=k;
             n/=k;
             console.log("Gía trị của sum và n là",sum,n)
         }
         k++;
     }
    
    console.log("Gía trị của sum là ",sum, "Gía trị của n là",n)
    return sum;
}
function factor_Solve(n) {
    while (n != solve(n))
    {
        n=solve(n);
    }
    return n;
}
console.log("Input is 42 => output is: ",factor_Solve(42))