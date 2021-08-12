document.addEventListener("DOMContentLoaded", () => {
  const num = Number(localStorage.getItem("num"));
  const $total = document.querySelector(".total");
  const $order = document.querySelector(".order");
  const $write = document.querySelector(".write");
  const $next = document.querySelector(".next");
  const $word = document.querySelector(".output-word .val");
  $total.textContent = num;
  // 기존 제시어 저장할 변수 생성
  let word;
  // 새로운 제시어 저장할 변수 생성
  let newWord;
  // order
  $write.focus();
  // 게임 시작 함수 생성
  const onStart = () => {
    if (newWord.length === 3 && (!word || word[word.length - 1] === newWord[0])) {
      let order = Number($order.textContent);
      word = newWord;
      $word.textContent = word;
      if (order == num) {
        $order.textContent = 1;
      } else {
        $order.textContent = order + 1;
      }
    } else {
      // alert("단어가 올바르지 않아요 !");
    }
    $write.value = "";
    $write.focus();
  };
  // input에 word를 저장하는 함수 생성
  const onSaveNewWord = event => {
    newWord = event.target.value;
  };
  $write.addEventListener("input", onSaveNewWord);
  $next.addEventListener("click", onStart);
  $write.addEventListener("keyup", event => {
    if (event.keyCode == 13) {
      onStart();
    }
  });
});
