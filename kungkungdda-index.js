document.addEventListener("DOMContentLoaded", () => {
  // 총 인원 입력받는 공간 생성
  const $inputTotal = document.querySelector("#input-total");
  // 총 인원 입력받은 값 저장할 공간 생성
  let outputTotal;
  // 총 인원 입력받은 값 저장하는 함수 생성
  const onTotal = event => {
    outputTotal = Number(event.target.value);
  };
  // 로컬스토리지에서 key'참가인원' 값 가져오는 함수 생성
  // const load = () => {
  //   const data = localStorage.getItem("참가인원");
  //   JSON.parse(data);
  // };
  // 로컬스토리지에 key'참가인원 값 저장하는 함수 생성
  // const save = data => {
  //   localStorage.setItem("참가인원", JSON.stringify(data));
  // };
  // 시작하는 함수 생성
  const onStart = () => {
    if (isNaN(outputTotal)) {
      alert("참여 인원을 제대로 입력해 주세요 !");
      $inputTotal.value = "";
      $inputTotal.focus();
    } else {
      // alert(`총 ${outputTotal}명이 참여합니다.`);
      const link = "/kungkungdda-play.html";
      location.href = link;
      localStorage.setItem("num", outputTotal);
    }
  };
  // 총 인원 입력하면 저장공간에 저장
  $inputTotal.addEventListener("input", onTotal);
  // 총 인원 입력하면 로컬스토리지에 저장
  // $inputTotal.addEventListener("input", () => {
  //   data.num = outputTotal;
  //   save(data);
  // });

  // start버튼 클릭
  const $start = document.querySelector(".start");
  $start.addEventListener("click", onStart);
  $inputTotal.addEventListener("keyup", e => {
    if (e.keyCode == 13) {
      onStart();
    }
  });
});
