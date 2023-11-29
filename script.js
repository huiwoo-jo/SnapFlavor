function analyzeImage() {
  const fileInput = document.getElementById('uploadImage');
  const resultDiv = document.getElementById('result');

  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const img = new Image();
      img.onload = function() {
        // 이미지 분석 및 레시피 API 호출
        const analyzedResult = analyzeFood(img);
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `<strong>인식된 음식:</strong> ${analyzedResult}`;
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function analyzeFood(image) {
  // 여기서 이미지 분석 및 API 요청을 시뮬레이션합니다.
  // 실제 API 호출 및 이미지 분석 로직을 작성해야 합니다.
  return "스테이크";
}

function submitReplacement() {
    const replacementInput = document.getElementById('replacement');
    const replacement = replacementInput.value;

    if (replacement.trim() !== '') {
        const replacementDiv = document.createElement('div');
        replacementDiv.classList.add('replacement-item');
        replacementDiv.textContent = replacement;

        document.getElementById('result').appendChild(replacementDiv);
        replacementInput.value = '';
    }
}

