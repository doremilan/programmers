function solution(ingredient) {
  let answer = 0;
  const arr = [];

  // 들어온 식재료를 하나씩 살펴본다.
  for (let i = 0; i < ingredient.length; i++) {
    // 만들어둔 arr에 식재료를 하나씩 넣고
    // 길이가 4이상이 되면 최근 4가지의 재료를 확인한다.
    // Array push는 길이를 반환한다.
    const len = arr.push(ingredient[i]);
    if (len >= 4) {
      if (
        arr[len - 4] === 1 &&
        arr[len - 3] === 2 &&
        arr[len - 2] === 3 &&
        arr[len - 1] === 1
      ) {
        // 최근 4가지의 재료가 햄버거가 완성될 재료면
        // pop()을 통해 완성된 햄버거를 제외시켜준다.
        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();

        // 그리고 갯수를 하나 올려준다.
        answer++;
      }
    }
  }

  return answer;
}

/*
function solution(ingredient) {
    let answer = 0;

    while (ingredient.join('').indexOf('1231') != -1) {
        const index = ingredient.join('').indexOf('1231');
        ingredient.splice(index, 4);
        answer++;
    }

    return answer;
}
*/