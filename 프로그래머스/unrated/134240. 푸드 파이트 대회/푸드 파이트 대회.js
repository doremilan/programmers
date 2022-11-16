function solution(food) {
    let right = '';
    let left = '';
    
    for (let i = 1; i < food.length; i++) {
        const count = parseInt(food[i] / 2);

        for (let j = 1; j <= count; j++) {

            right = `${right}${i}`;
            left = `${i}${left}`;
        }
    }
    
    const answer = `${right}0${left}`
    return answer;
}