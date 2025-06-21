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

## 📐개발 전 마크업 작업

> <img src="https://github.com/user-attachments/assets/477e86ce-d7aa-4cdb-a70a-c1197e9637b4" style="object-fit: cover"  width="300" height="300"/>

## 📸 완성 화면

> <img src="https://github.com/user-attachments/assets/ea911195-e3a9-4626-80e2-08e59db4436e"  style="object-fit: contain" width="300" height="300"/> <img src="https://github.com/user-attachments/assets/89475e9a-0d2c-435f-9224-9706aab42e6a"  width="300" height="300"/>

## 유연한 구조를 만들기 위한 방법 (반영X)

> rem, %, clamp를 사용하기

```scss
@function fcSize($min, $max) {
    @return clamp($min * 0.1rem, (100vw / $maxW) * $max, $max * 0.1rem);
}
```

## 배운점

- dialog 태그는 display:none이 기본값이여서 dialog 자체에 flex를 주면 모달이 계속 open 된다. 이를 해결하기 위해선 dialog 내부를 div로 묶어서 div에 flex를 주어야한다. 

## 💁‍♂️ 개발자

- 이름: 김동욱
- GitHub: https://gimeast.github.io
