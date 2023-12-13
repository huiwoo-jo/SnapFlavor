# SnapFlavor 🍲✨ <br>
## 개요 🌐
SnapFlavor 는 사용자가 업로드한 음식 이미지를 분석하여 해당 음식의 레시피를 생성해주는 최첨단 웹 애플리케이션입니다. 
강력한 GPT-3.5-turbo를 활용하여 레시피를 생성하고, 사용자가 입력한 제외할 재료를 반영하여 사용자 맞춤형 레시피를 제공합니다.

![image](https://github.com/huiwoo-jo/SnapFlavor/assets/84004687/0f9d455b-fac2-40c8-8af2-f367c71232d4)

## 동작 방식 🛠️ <br>
### 레시피 생성 📜
사용자가 이미지를 업로드하면, 해당 이미지는 분석되어 음식이 식별되고, 이를 기반으로 레시피가 생성됩니다.

- 코드 파일: main.py
- HTML 템플릿: index.html, result.html
- HTML 스타일링 : script.js, style.css
- 데이터 학습 파일 : model_trained.h5

## 설정 및 구성 ⚙️<br>
### 설치 📥
시작하기 전에, 시스템에 Python이 설치되어 있는지 확인해야 합니다. 그 후, 필요한 Python 패키지인 Flask, torch, keras 등이 설치되어야 합니다.

### 의존성 설치 🔗
터미널이나 명령 프롬프트에서 다음 명령을 사용하여 필요한 패키지를 설치합니다:

```
pip install Flask torch keras werkzeug
pip install openai
```

### API 키 🔐
OpenAI API 키를 env 파일 내 settings.py 파일에 다음과 같이 배치해야 합니다:

```
DATABASE_CONFIG = {
  'apikey': 'PUT_YOUR_API_KEY_HERE'
}
```
코드 파일: settings.py

### 어플리케이션 실행 🚀
다음 명령을 실행하여 앱을 시작합니다:
```
python main.py
```
이렇게 하면 Flask 애플리케이션이 시작됩니다. 그런 다음 웹 브라우저에서 http://localhost:5000를 방문하여 웹 인터페이스에 액세스할 수 있습니다.

### 사용법 🖱️
웹 인터페이스에서 제공된 영역에 <b>이미지 선택 <b>을 클릭하고 이미지를 선택한 후,  <b>분석 시작 <b>을 누릅니다. 애플리케이션은 그 후 레시피를 생성하고 웹페이지에 표시합니다.

### 샘플 레시피
![image](https://github.com/huiwoo-jo/SnapFlavor/assets/84004687/653fb119-b6ce-4174-93e1-45bf8099990d)


참고: 애플리케이션이 원활하게 작동하도록 'PUT_YOUR_API_KEY_HERE'를 실제 OpenAI API 키로 교체해야 합니다.
