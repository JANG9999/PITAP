<h2 align="center">PITAP 클론코딩</h2>
<br><br>

## 작업자
 장서연
<br><br>

## 제작기간 :(5일)
 2025.06.16~2025.06.20
<br><br>

## 페이지 개수
메인페이지
<br><br>

## PITAP 홈페이지를 클론코딩한 이유
pitap 홈페이지는 애니메이션이 적절하게 조화를 이루어 시각적으로 편안하면서도 흥미를 유도하는 점이 인상 깊은 사이트라고 생각합니다. 
이번 클론코딩을 통해 웹사이트의 흐름에 맞춰 자연스럽게 애니메이션을 적용하는 방법을 배우고, 사용자 경험을 고려한 인터랙션 구현에 대해 더 깊이 이해하고자 합니다.
<br><br>

## 메인 페이지 

### main

마우스를 커스텀하여 기본 커서 대신 도형으로 디자인으로 변경하였고, 특정 영역에 마우스를 올렸을 때 커서 색이 바뀌도록 제작하였습니다.
<br><br>
<img width="2842" height="1527" alt="Image" src="https://github.com/user-attachments/assets/a623078b-6af8-4dd1-9007-f2dbcdf8dbb6" />
<br><br><br>
메뉴 아이콘을 클릭하면 위에서 아래로 메뉴가 내려옵니다.
<br><br>

<img width="2841" height="1507" alt="Image" src="https://github.com/user-attachments/assets/52844153-1bb8-4635-b3e3-8e2f30fe5d4f" />
<br><br><br>
일시정지 버튼을 누르면 스와이퍼 슬라이드가 멈추며, 하단에 위치한 프로그레스바를 통해 현재 슬라이드의 진행 상황을 확인할 수 있습니다.
<br><br>

<img width="2832" height="1399" alt="Image" src="https://github.com/user-attachments/assets/74c2cc85-7369-4108-bdf8-488f9f9dbbfa" />
<br><br><br>
왼쪽 이미지는 서로 포개어 놓은 뒤, 자바스크립트를 활용해 0.8초 간격으로 순차적으로 투명도를 조절하여 이미지가 바뀌도록 구현했습니다. 
또한 슬라이드 이미지에 마우스를 올리면 해당 이미지의 제목과 내용이 나타나도록 제작하였습니다.

<br><br>

<img width="2827" height="1488" alt="Image" src="https://github.com/user-attachments/assets/39f454a2-dc5b-437b-9e3c-42c2df2b10e2" />
<br><br><br>
스크롤을 내리면 글자와 이미지가 좌우로 움직이는 애니메이션을 GSAP를 활용해 구현하였습니다. 
표 형태의 이미지에 마우스를 올리면 제목과 내용이 나타나도록 제작하였으며, 스크롤이 계속되면 표가 있는 섹션이 위로 올라가면서 그 아래에 숨겨져 있던 푸터 영역이 자연스럽게 드러나도록 구성했습니다.
<br><br>

 
 ## 서브 페이지 

### about
![Image](https://github.com/user-attachments/assets/fa170a7d-ad88-4907-a89a-06f05a08866b)
<br><br><br>
자바스크립트를 활용해 2초 간격으로 글자와 글자의 배경색이 순차적으로 바뀌도록 제작하였습니다. 
또한 GSAP를 사용해 스크롤 시 하단에 있는 글자가 위로 올라오도록 애니메이션을 적용하였습니다.

<br><br><br>
GSAP를 활용해 특정 섹션에서 화면을 고정하고, 스크롤 시 화면이 오른쪽에서 왼쪽으로 이동하는 애니메이션을 구현하였습니다. 
또한 API를 활용하여 지도를 불러와 화면에 표시하였습니다.
<br><br>
### story
<img width="2830" height="1496" alt="Image" src="https://github.com/user-attachments/assets/cba676e6-5f42-424c-bf54-5be129751c08" />

<img width="2832" height="1514" alt="Image" src="https://github.com/user-attachments/assets/8c938d0b-8e8e-42a9-ad92-7aa7a91443a4" />
<br><br><br>

<br><br>

<img width="2880" height="5762" alt="Image" src="https://github.com/user-attachments/assets/fca75809-8b18-4af2-baec-d93fb7847e48" />
<br><br>

<img width="2818" height="1480" alt="Image" src="https://github.com/user-attachments/assets/4fba82b5-8fb7-4cf1-86af-e886c6cf83d2" />
<br><br>
옵션 메뉴에서 항목을 클릭하면 해당하는 내용의 카드가 화면에 나타나도록 제작하였습니다. 
<img width="2826" height="1486" alt="Image" src="https://github.com/user-attachments/assets/7e83cf5b-a83f-403c-b7a1-ecdf821091a8" />
<br><br>
만약 일치하는 항목이 없는 경우에는 '검색 결과가 없습니다'라는 문구가 표시되도록 구현하였습니다.
<br><br>

## 느낀점
역동적인 웹사이트 제작은 처음이라, 각 이미지가 언제 나타나고 사라져야 하는 타이밍을 조정하는 것이 쉽지 않았습니다. 
이전까지는 정적인 페이지만 제작해왔기 때문에, 이번 프로젝트를 통해 움직임이 있는 페이지를 만들어보는 과정은 색다른 매력으로 다가왔습니다. 
특히 GSAP를 처음 활용하다 보니 예상대로 작동하지 않는 애니메이션 때문에 어려움도 많았지만, 문제를 하나씩 해결하며 원하는 동작을 구현해냈을 때 큰 성취감을 느낄 수 있었습니다.
 <br><br>
## 🔗 링크

- [기존 사이트](https://www.pitap.at/)
- [클론코딩](https://jang9999.github.io/PITAP/#none)
