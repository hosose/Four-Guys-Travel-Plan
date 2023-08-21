DROP TABLE "JEJU_AREA";

CREATE TABLE "JEJU_AREA" (
	"contentid"	NUMBER		NOT NULL,
	"mapx"	NUMBER		NULL,
	"mapy"	NUMBER		NULL,
	"cat1"	varchar2(200)		NULL,
	"cat2"	varchar2(200)		NULL,
	"cat3"	varchar2(200)		NULL,
	"addr1"	varchar2(200)		NULL,
	"addr2"	varchar2(200)		NULL,
	"firstimage"	varchar2(200)		NULL,
	"title"	varchar2(200)		NULL,
	"tel"	varchar2(200)		NULL
);
ALTER TABLE JEJU_AREA MODIFY "mapx" VARCHAR2(50);
ALTER TABLE JEJU_AREA MODIFY "mapy" VARCHAR2(50);

DROP TABLE "MEMBER";

CREATE TABLE "MEMBER" (
	"ID"	varchar2(50)		NOT NULL,
	"NAME"	varchar2(50)		NULL,
	"PASSWORD"	varchar2(50)		NULL,
	"ADDRESS"	varchar2(200)		NULL,
	"BIRTH"	DATE		NULL,
	"EMAIL"	varchar2(100)		NULL,
	"PHONE"	varchar2(50)		NULL
);

INSERT INTO MEMBER VALUES ('hosose','호소세','a','킹더랜드',to_date('2023-1-11','YYYY-MM-DD'),'hosose@naver.com','010-1123-4587')
SELECT id, name, address, birth, email, phone FROM member WHERE id = 'hosose' AND password = 'a'
select * from member

DROP TABLE "PLANNER";

CREATE TABLE "PLANNER" (
	"PLANNER_NO"	NUMBER		NOT NULL,
	"ID"	varchar2(100)		NOT NULL,
	"PLANNER_TITLE"	varchar2(100)		NULL,
	"PLANNER_START_DATE"	DATE		NULL,
	"PLANNER_LAST_DAY"	DATE		NULL
);
ALTER TABLE PLANNER ADD COMPLETE_FLAG VARCHAR2(10) DEFAULT '미완성' NOT NULL;
CREATE SEQUENCE planner_seq;
select * from planner
select trunc(PLANNER_LAST_DAY-PLANNER_START_DATE+1) as day from planner where planner_no = 9
INSERT INTO PLANNER (planner_no, id, planner_title, PLANNER_START_DATE,PLANNER_LAST_DAY) VALUES(planner_seq.NEXTVAL, 'hosose','제주여행',to_date('2023-8-11','YYYY-MM-DD'),to_date('2023-8-13','YYYY-MM-DD'))
DROP TABLE "BOARD_REPLY";

CREATE TABLE "BOARD_REPLY" (
	"REPLY_NO"	NUMBER		NOT NULL,
	"BOARD_NO"	NUMBER		NOT NULL,
	"REPLY_CONTENT"	varchar2(1000)		NULL,
	"REPLY_DATE"	DATE		NULL,
	"ID"	varchar2(100)		NOT NULL
);
CREATE SEQUENCE board_reply_seq;
DROP TABLE "PLANNER_BOARD";

CREATE TABLE "PLANNER_BOARD" (
	"BOARD_NO"	NUMBER		NOT NULL,
	"PLANNER_NO"	NUMBER		NOT NULL,
	"ID"	varchar2(100)		NOT NULL,
	"BOARD_TITLE"	varchar2(100)		NULL,
	"BOARD_CONTENT"	CLOB		NULL,
	"BOARD_CREATE_DATE"	DATE		NULL,
	"BOARD_HITS"	NUMBER		NULL
);
CREATE SEQUENCE board_seq;
DROP TABLE "PLAN";
 SELECT * FROM planner_board WHERE board_no =2
SELECT board_no, planner_no, id, board_title, board_content, to_char(board_create_date,'YYYY-MM-DD')board_create_date, board_hits FROM planner_board ORDER BY planner_no DESC
SELECT row_number() over(ORDER BY board_no  DESC) as board_no, planner_no, id, board_title, board_content, to_char(board_create_date,'YYYY-MM-DD') board_create_date, board_hits FROM planner_board
CREATE TABLE "PLAN" (
	"PLAN_NO"	NUMBER		NOT NULL,
	"PLANNER_NO"	NUMBER		NOT NULL,
	"plan_DATE" 	DATE		NULL,
	"CONTENT_ID"	NUMBER		NOT NULL
);
CREATE SEQUENCE plan_seq;
ALTER TABLE PLAN MODIFY PLAN_DATE NUMBER;
INSERT INTO PLAN(plan_no, planner_no, plan_date) VALUES(plan_seq.NEXTVAL,9,1)
ALTER TABLE JEJU_AREA ADD CONSTRAINT PK_JEJU_AREA PRIMARY KEY (
	"contentid"
);
SELECT DISTINCT plan_date, planner_no FROM plan WHERE planner_no=72 ORDER BY PLAN_DATE
SELECT p.planner_no, p.plan_date, p.content_id, j.title
FROM plan p
INNER JOIN jeju_area j ON p.content_id = j.contentid
WHERE planner_no = 178 AND plan_date=2

ALTER TABLE "MEMBER" ADD CONSTRAINT "PK_MEMBER" PRIMARY KEY (
	"ID"
);

ALTER TABLE "PLANNER" ADD CONSTRAINT "PK_PLANNER" PRIMARY KEY (
	"PLANNER_NO"
);

ALTER TABLE "BOARD_REPLY" ADD CONSTRAINT "PK_BOARD_REPLY" PRIMARY KEY (
	"REPLY_NO"
);

ALTER TABLE "PLANNER_BOARD" ADD CONSTRAINT "PK_PLANNER_BOARD" PRIMARY KEY (
	"BOARD_NO"
);

ALTER TABLE "PLAN" ADD CONSTRAINT "PK_PLAN" PRIMARY KEY (
	"PLAN_NO"
);

ALTER TABLE "PLANNER" ADD CONSTRAINT "FK_MEMBER_TO_PLANNER_1" FOREIGN KEY (
	"ID"
)
REFERENCES "MEMBER" (
	"ID"
);

ALTER TABLE "BOARD_REPLY" ADD CONSTRAINT "FK_BOARD_TO_REPLY" FOREIGN KEY (
	"BOARD_NO"
)
REFERENCES "PLANNER_BOARD" (
	"BOARD_NO"
);

ALTER TABLE "PLANNER_BOARD" ADD CONSTRAINT "FK_PLANNER_TO_BOARD" FOREIGN KEY (
	"PLANNER_NO"
)
REFERENCES "PLANNER" (
	"PLANNER_NO"
);

ALTER TABLE "PLANNER_BOARD" ADD CONSTRAINT "FK_PLANNER_TO_BOARD_2" FOREIGN KEY (
	"ID"
)
REFERENCES "MEMBER" (
	"ID"
);

ALTER TABLE "PLAN" ADD CONSTRAINT "FK_PLANNER_TO_PLAN_1" FOREIGN KEY (
	"PLANNER_NO"
)

REFERENCES "PLANNER" (
	"PLANNER_NO"
);

ALTER TABLE "PLAN" DROP FOREIGN KEY "FK_PLANNER_TO_PLAN_1";

ALTER TABLE board_reply DROP CONSTRAINT PK_BOARD_REPLY
ALTER TABLE jeju_area DROP CONSTRAINT PK_JEJU_AREA
ALTER TABLE plan DROP CONSTRAINT PK_PLAN
ALTER TABLE planner DROP CONSTRAINT PK_PLANner
ALTER TABLE planner_board DROP CONSTRAINT PK_PLANNER_BOARD

select DISTINCT "cat1" from JEJU_AREA

SELECT * FROM planner_board WHERE board_no = 1

INSERT INTO "BOARD_REPLY" ("REPLY_NO","BOARD_NO", "REPLY_CONTENT", "ID")
VALUES (board_reply_seq.NEXTVAL, 2, 'gd', 'hosose');