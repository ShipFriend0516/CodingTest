function solution(nums) {
    let count = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                
                let isPrime = true;
                if (sum < 2) {
                    isPrime = false;
                } else {
                    for (let l = 2; l <= Math.sqrt(sum); l++) {
                        if (sum % l === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                }

                if (isPrime) {
                    count++;
                }
            }
        }
    }

    return count;
}