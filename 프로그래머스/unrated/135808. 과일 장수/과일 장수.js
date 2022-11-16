function solution(k, m, score) {
    let answer = 0;
    
    score.sort((a, b) => b - a);
    
    const boxCount = Math.trunc(score.length / m)

    for (let i = 1; i < boxCount+1; i++) {
        answer += score[(m*i) - 1]*m
    }
    
    return answer;
}