# 액세서리 셰이프 패밀리 라이브러리

카테고리별 표준 셰이프 패밀리. Step 1에서 **2~4개**를 선택하거나, 동일한 형식으로 신규 패밀리를 정의하세요 (이름 · 용도 · 실루엣 큐 · 일반 소재).

---

## 가방 (Bag)

### 백팩 — 신학기

- **Light String** — 드로스트링 클로저, 패디드 스트랩, 메쉬 사이드 포켓, 라이트 신슈 바디. 고등학교·대학 저학년 데일리 통학 포지셔닝
- **Round Zipper** — 전면 라운드 곡선 지퍼, 워드마크/캐릭터 자수 배치, 미드웨이트. 스트릿 코드 데일리 백팩 포지셔닝
- **Round Pocket** — 전면 라운드 셰이프 포켓 패널, 옵셔널 플랩, 캐릭터 키링과 페어. 위트·IP 쇼케이스 포지셔닝

### 크로스 / 슬링

- **Soft sling** — 싱글 스트랩, 소프트 바디, 유연한 형태. 데일리 루즈핏
- **Structured cross** — 박시 크로스, 구조감 있는 베이스. 위크엔드 아웃도어
- **Belt-bag / 웨이스트** — 패니/웨이스트백. 페스티벌·액티비티

### 토트 / 미니

- **Canvas tote** — 헤비웨이트 캔버스, 대형 로고·캐릭터 배치
- **Mesh tote** — 스포티 라이트 토트, 메쉬 사이드
- **Mini mini** — 손바닥 사이즈 참백

### 데일리 이지백

- **Easy crossbody mini** — 언더암 또는 짧은 크로스, 가벼움
- **Easy zip pouch** — 플랫 집 파우치, 소형 캐리

---

## 모자 (Cap)

- **볼캡 / Ball cap** — 6패널, 구조감 있는 형태 또는 언스트럭처드 (워시드 / 소프트 / 캠프 변형)
- **버킷 / Bucket** — 와이드 브림, 소프트 바디
- **메쉬 캡 / Mesh cap** — 트러커 스타일, 메쉬 백
- **비니 / Beanie** — 니트, 슬라우치드 또는 피티드
- **스냅백 / Snapback** — 플랫 브림 + 스냅 클로저
- **리본캡 / Ribbon cap** — 소프트 바디 볼캡 + 백타이 리본 (우먼 브릿지 스타일)
- **러플 햇 / Ruffle hat** — 소프트 브림 + 러플 트림 (우먼 로맨틱 라인)

---

## 신발 (Shoes)

- **Sneaker (low) / 로우 스니커즈** — 로우컷 스니커, 클래식 또는 모던 실루엣. 시그니처 스타일
- **Sneaker (mid) / 미드 스니커즈** — 미드컷 스니커
- **Sandal — strap** — 단일/더블 스트랩, EVA / 쿠션 솔
- **Sandal — slide** — 오픈 슬라이드, 쿠션 솔
- **Slide — one-mold** — 원피스 몰드 슬라이드 (경량, 여름 히어로)
- **Loafer / mule** — 클로즈드 프론트, 오픈 힐
- **Boots** — 첼시 / 처카 / 레이스업
- **Mary Jane** — 스트랩 클로저 (우먼 브릿지)
- **Sock-shoe** — 니트 어퍼 양말형 러너

---

## 양말 (Socks)

- **Crew** — 미드 카프, 립드 또는 그래픽
- **Ankle / no-show** — 로우컷, 뉴트럴
- **Knee-high** — 오버 니, 우먼 브릿지
- **Loose / slouch** — 릴랙스 스크런치드

---

## 키링 / 참 (Charm / Keyring)

- **Character mascot** — 브랜드 마스코트 플러시 / 아크릴 / 실리콘 / 젤리 형태 (예: 와키윌리 세계관의 Kiky / Lilly / Leo / Poco / Ace / Bear / Doroo / Puro / Pisisik)
- **Box pouch** — 키링이 달린 미니 집 파우치
- **Acrylic stand** — 플랫 아크릴 포토카드형
- **Sticker pack** — 마스코트 스티커 3~5장 세트

---

## 벨트 / 머플러 / 스카프 (Belt / Scarf)

- **Web belt** — 컬러 웨빙 + 메탈 버클 (스트릿 데일리)
- **Leather belt** — 가죽 + 클래식 버클 (셋업·포멀)
- **Bandana** — 면 손수건형 스카프 (50×50 / 70×70cm)
- **Long muffler** — 울/캐시미어 롱 머플러 (FW 시즌)
- **Silk twilly** — 슬릭 트윌리, 백·헤어 액세서리 활용

---

## 패밀리 카드 표준 형식

신규 패밀리를 정의할 때 다음 형식을 따르세요.

```
Name              — 짧은 내부 명칭 (한국어 + 영어 혼용 가능)
Category          — bag / cap / shoes / socks / belt / scarf / charm
Sub-segment       — 카테고리에 서브 세그먼트가 있을 때 (신학기 백팩 / 볼캡)
Use               — 1줄 "use when" / 타겟 고객
Silhouette cues   — 실루엣 디스크립터 2~4개
Typical materials — 소재 옵션 2~4개
SKU per family    — 시즌당 일반적으로 2~5개
Hero flag         — yes / no (라인업당 최대 1개)
Color story link  — `fashion-color-story` 티어 참조 (BASIC/SUB/ACCENT)
Carryover         — new / [이전 시즌]에서 캐리오버
```

## 한국 K-패션 시즌 운영 메모

- **신학기 백팩 라인업**: S1 판기(1~2월) 입고 목표 → 시즌 시작 3개월 전인 전년 10~11월 LOCK
- **여름 슬라이드/샌들**: S2~S3 판기(5~7월) 입고 → 시즌 시작 3개월 전인 1~2월 LOCK
- **FW 캡·비니·머플러**: S4 판기(9~12월) 입고 → 시즌 시작 3개월 전인 5~6월 LOCK
- **키링·참**: 의류 룩북 촬영(시즌 시작 1~2개월 전)과 함께 등장하므로, 캐릭터 IP 시즌은 의류 라인업 LOCK과 동시에 LOCK 필수
