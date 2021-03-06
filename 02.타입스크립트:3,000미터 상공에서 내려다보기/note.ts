/**
 * <프로그램 실행 의미>
 *  1. 컴파일러가 소스 코드(개발자가 작성한 텍스트 파일)를 파싱해 AST(추상 문법 트리 자료구조)로 만듬
 *  2. AST를 바이트 코드로 변환한 것을 런타임이 평가하도록 지시
 *
 * <TS가 다른 언어와 다른 점>
 *  - TS 컴파일러가 코드를 바이트코드 대신 JS 코드로 변환
 *  - TS 컴파일러러는 AST를 만들어 결과 코드를 내놓기 전에 타입 확인을 거친다.
 *
 * <TS 컴파일 과정>
 *  1. TS 소스 -> TS AST
 *  2. 타입 검사기가 AST를 확인
 *  3. TS AST -> JS 소스
 *
 * <JS 컴파일 과정>
 *  1. JS 소스 -> JS AST
 *  2. AST -> 바이트 코드
 *  3. 런타임이 바이트코드를 평가
 */
