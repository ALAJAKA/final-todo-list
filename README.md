# final-todo-list

## 투두리
- 이재관
- 박민욱
- 김형섭

## 개발환경

 - 프레임워크 : Express.JS
 - OS : window & mac OS
 - webstorm & vsCode
 - DB : RDS for MySQL

## 사용된 기술

 - Nodejs
 - Sequelize
 - AWS RDS for MySQL
 - EJS
 - Bootstrap
 - AWS Cognito


## DB 설계

-  users

| 칼럼        | 데이터타입         | 제약조건          | 설명        |
|-----------|---------------|---------------|-----------|
| id        | INT           | PRIMARY KEY   | 유저 번호     |
| email     | varchar       | not Null      | 유저 이메일    |
| name      | varchar       | not Null      | 유저 이름     |
| sub       | varchar       | not Null Unique | 유저 식별자    |
| createdAt | date          |           | 유저 생성일    |
| updatedAt | date          |               | 유저 정보 변경일 |

- todoLists

| 칼럼        | 데이터타입   | 제약조건             | 설명                |
|-----------|---------|------------------|-------------------|
| id        | INT     | PRIMARY KEY      | todoList 번호       |
| title     | varchar | not Null         | todoList 내용       |
| success   | enum    | not Null         | todoList 달성여부     |
| today     | varchar | not Null         | todoList 실행해야하는 날 |
| userId    | INT     | not Null Unique foreignKey | 유저 식별자            |
| createdAt | date    |                  | todoList 생성일            |
| updatedAt | date    |                  | todoList 정보 변경일         |

- bucketLists

| 칼럼        | 데이터타입    | 제약조건             | 설명                     |
|-----------|----------|------------------|------------------------|
| id        | INT      | PRIMARY KEY      | bucketList 번호          |
| title     | varchar  | not Null         | bucketList 내용          |
| d_day     | date     | not Null         | bucketList 실행해야하고 싶은 날 |
| userId    | INT      | not Null Unique foreignKey | 유저 식별자                 |
| createdAt | date     |           | bucketList 생성일                 |
| updatedAt | date     |               | bucketList 정보 변경일              |

- allDayTodoLists

| 칼럼        | 데이터타입   | 제약조건                       | 설명                |
|-----------|---------|----------------------------|-------------------|
| id        | INT     | PRIMARY KEY                | 매일하는 todoList  번호 |
| title     | varchar | not Null                   | 매일하는 todoList 제목  |
| content   | varchar | not Null                   | 매일하는 todoList 내용  |
| success   | enum    | not Null                   | 해당날 달성여부          |
| image     | varchar |                            | 매일하는 todoList 사진  |
| userId    | varchar | not Null Unique foreignKey | 유저 식별자            |
| createdAt | date    |                            | 매일하는 todoList 생성일           |
| updatedAt | date    |                            | 매일하는 todoList 정보 변경일        |

- allDayTodoList

| 칼럼         | 데이터타입   | 제약조건                       | 설명                   |
|------------|---------|----------------------------|----------------------|
| id         | INT     | PRIMARY KEY                | 매일하는 todoList  번호    |
| title      | varchar | not Null                   | 매일하는 todoList 제목     |
| content    | varchar | not Null                   | 매일하는 todoList 내용     |
| success    | enum    | not Null                   | 해당날 달성여부             |
| image      | varchar |                            | 매일하는 todoList 사진     |
| share      | enum    | not Null                   | 매일하는 todoList 공유여부   |
| shareCount | int     | not Null                   | 매일하는 todoList 공유된 횟수 |
| userId     | varchar | not Null Unique foreignKey | 유저 식별자               |
| createdAt  | date    |                            | 매일하는 todoList 생성일    |
| updatedAt  | date    |                            | 매일하는 todoList 정보 변경일 |

- bucketListCard

| 칼럼        | 데이터타입   | 제약조건                       | 설명                        |
|-----------|---------|----------------------------|---------------------------|
| id        | INT     | PRIMARY KEY                | 특정 날짜가 없는 bucketList  번호         |
| title     | varchar | not Null                   | 특정 날짜가 없는 bucketList 제목          |
| content   | varchar | not Null                   | 특정 날짜가 없는 bucketList 내용          |
| success   | enum    | not Null                   | 특정 날짜가 없는 bucketList 달성여부                  |
| image     | varchar |                            | 특정 날짜가 없는 bucketList 사진          |
| share      | enum    | not Null                   | 특정 날짜가 없는 bucketList 공유여부 |
| shareCount | int     | not Null                   | 특정 날짜가 없는 bucketList 공유된 횟수      |
| userId    | varchar | not Null Unique foreignKey | 유저 식별자                    |
| createdAt | date    |                            | 매일하는 todoList 생성일         |
| updatedAt | date    |                            | 매일하는 todoList 정보 변경일      |

- todoReviews

| 칼럼               | 데이터타입   | 제약조건                       | 설명                   |
|------------------|---------|----------------------------|----------------------|
| id               | INT     | PRIMARY KEY                | todoList 댓글 번호       |
| content          | varchar | not Null                   | todoList 댓글 내용       |
| AllDayTodoListId | varchar | not Null Unique foreignKey | 매일하는 투두 리스트 식별자      |
| userId           | varchar | not Null Unique foreignKey | 작성자 식별자              |
| createdAt        | date    |                            | todoList 댓글 생성일    |
| updatedAt        | date    |                            | todoList 댓글 정보 변경일 |

- bucketReviews

| 칼럼               | 데이터타입   | 제약조건                       | 설명                   |
|------------------|---------|----------------------------|----------------------|
| id               | INT     | PRIMARY KEY                | bucketListCard 댓글 번호       |
| content          | varchar | not Null                   | bucketListCard 댓글 내용       |
| bucketListCardId | varchar | not Null Unique foreignKey | bucketListCard 식별자      |
| userId           | varchar | not Null Unique foreignKey | 작성자 식별자              |
| createdAt        | date    |                            | bucketListCard 댓글 생성일    |
| updatedAt        | date    |                            | bucketListCard 댓글 정보 변경일 |
