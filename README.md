# 1만 시간의 법칙

> "1만 시간의 법칙" 프로젝트  
> URL: [1만 시간의 법칙](https://gimeast.github.io/10000-hours-project/index.html)

## 📌 프로젝트 소개

이 프로젝트는 HTML과 CSS만을 사용하여 코딩을 하였습니다.  
웹 퍼블리싱 기본기를 다지고, 정적인 웹페이지 구성 능력을 향상시키는 것을 목표로 하였습니다.

## 🛠 사용 기술

- HTML5
- CSS

## 🖼️ 주요 구현 요소

- 시멘틱 마크업: header, main, section, footer 등 HTML5 시멘틱 태그를 적극 활용하여 구조적이고 의미 있는 문서 구성.
- 반응형 레이아웃: 미디어 쿼리를 사용해 다양한 화면 크기(모바일, PC)에 맞춰 콘텐츠가 유동적으로 배치되도록 구현.
- 접근성 향상: 시각장애인을 위한 적절한 마크업 고려.
- 기본적인 SEO 최적화: title, meta, h1 태그를 활용한 검색엔진 친화적 구조 설계.

## 📁 폴더 구조

```
root/
├── index.html
├── css/
│ ├── style.css
├── assets/
│ ├── images/
│ └── fonts/
└── README.md
```

## 📆 개발 기간

- 시작일: 2025-06-18
- 종료일: 2025-06-20

## ✅ 목표

- HTML/CSS 구조 완벽히 이해하기
- 웹사이트 레이아웃 분석 및 복제 능력 향상
- 시멘틱 태그와 CSS 스타일링 익숙해지기

## 개발 전 마크업 작업
> <img src="https://github.com/user-attachments/assets/56bc4f84-01d6-4cee-ab23-01bab26feb07"  width="400" height="500"/><img src="https://github.com/user-attachments/assets/477e86ce-d7aa-4cdb-a70a-c1197e9637b4"  width="500" height="500"/>

## 📸 완성 화면

> ![Mobile](https://github.com/user-attachments/assets/edd6df94-69da-495f-a70b-009fc17687b1) <img src="https://github.com/user-attachments/assets/792f79a2-c63b-42e8-a3cd-618a61187726"  width="500" height="500"/>

## 유연한 구조를 만들기 위한 방법 (반영X)
> rem, %, clamp를 사용하기
``` scss
@function fcSize($min, $max) {   @return clamp($min * 0.1rem, (100vw / $maxW) * $max, $max * 0.1rem); }
```

## 💁‍♂️ 개발자

- 이름: 김동욱
- GitHub: https://gimeast.github.io
