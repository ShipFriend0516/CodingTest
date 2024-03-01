function solution(phone_number) {
    let len = phone_number.slice(0,-4)
    return phone_number.replaceAll(len, ('*').repeat(len.length))
    
}