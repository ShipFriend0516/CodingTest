function solution(n)
{
    return result = n.toString().split('').map(s=>parseInt(s)).reduce((a,b)=>a+b)
}