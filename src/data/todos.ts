export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export type FilterType = 'all' | 'active' | 'completed';

export const initialTodos: Todo[] = [
  {
    id: '1',
    text: '프로젝트 기획서 검토',
    completed: false,
    createdAt: new Date('2024-01-15T09:00:00'),
  },
  {
    id: '2',
    text: 'PR 코드 리뷰',
    completed: true,
    createdAt: new Date('2024-01-15T10:30:00'),
  },
  {
    id: '3',
    text: '팀 미팅 참석',
    completed: false,
    createdAt: new Date('2024-01-15T14:00:00'),
  },
  {
    id: '4',
    text: '버그 수정 배포',
    completed: false,
    createdAt: new Date('2024-01-15T16:00:00'),
  },
];

/**
 * 고유 ID 생성 유틸
 * crypto.randomUUID() 또는 Date.now() 사용 가능
 */
export function generateId(): string {
  return crypto.randomUUID();
}
