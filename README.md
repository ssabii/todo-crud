# 투두리스트 CRUD (Todo List)

## 제한 시간: 1시간

## 요구사항

### 필수 기능
1. **할 일 추가**
   - 입력창에서 Enter 또는 추가 버튼으로 추가
   - 빈 문자열은 추가 불가
   - 추가 후 입력창 초기화

2. **할 일 완료 토글**
   - 클릭으로 완료/미완료 토글
   - 완료된 항목은 취소선 표시

3. **할 일 삭제**
   - 개별 삭제 버튼

4. **필터링**
   - 전체 / 진행중 / 완료 필터
   - 현재 필터 상태 시각적 표시

5. **카운터 표시**
   - 남은 할 일 개수 표시 (예: "3개 남음")

### UI 요구사항
- 할 일이 없을 때 빈 상태 표시
- 필터별 빈 상태 메시지 다르게 (예: "완료된 항목이 없습니다")

## 평가 포인트
- [ ] 상태 구조 설계 (Todo 타입, 필터 타입)
- [ ] 필터 로직 구현 방식 (useMemo 활용 여부)
- [ ] 컴포넌트 분리 기준
- [ ] 이벤트 핸들러 구조
- [ ] ID 생성 방식 (Date.now, crypto.randomUUID 등)

## 추가 도전 과제 (시간 남으면)
- 할 일 수정 (인라인 편집)
- 완료된 항목 일괄 삭제
- 드래그앤드롭 순서 변경
- localStorage 저장/불러오기

## 시작하기

```bash
npm install
npm run dev
```

## 타입 참고

```typescript
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

type FilterType = 'all' | 'active' | 'completed';
```
