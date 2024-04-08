def solution(lottos, win_nums):
    winCount = 0;
    zeroCount = 0;
    for w in win_nums:
        if w in lottos:
            winCount += 1
    
    for l in lottos:
        if l == 0:
            zeroCount += 1
    
    최소등수 = 6 if winCount <= 1 else 7 - winCount;
    최대등수 = 6 if zeroCount + winCount <= 1 else 7 - zeroCount - winCount
    

    
    
    return [최대등수, 최소등수]