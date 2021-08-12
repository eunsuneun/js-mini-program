document.addEventListener("DOMContentLoaded", () => {
  const number = Number(prompt("몇 명이 참가하나요?"));
  const $button = document.querySelector("button");
  const $input = document.querySelector("input");
  const $first = document.querySelector("#first-word");
  const $order = document.querySelector("#order");
  let word; // 제시어
  let newWord; // 새로 입력한 단어
  $input.focus();
  const onClickButton = () => {
    if (!word || word[word.length - 1] === newWord[0]) {
      // 첫 번째 참가자 이거나, 단어가 올바르다.
      word = newWord;
      $first.textContent = word;
      const order = Number($order.textContent);
      if (order === number) {
        $order.textContent = 1;
      } else {
        $order.textContent = order + 1;
      }
    } else {
      // 단어가 올바르지 않다.
      alert("단어가 올바르지 않아요 !");
    }
    $input.value = "";
    $input.focus();
  };
  const onInput = event => {
    newWord = event.target.value;
  };
  $button.addEventListener("click", onClickButton);
  $input.addEventListener("input", onInput);
});
