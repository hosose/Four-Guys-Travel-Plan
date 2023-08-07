/*
 * Spring Handler Interceptor : DispatcherServlet이 해당 컨트롤러를 호출하기 전,후에 요청과 응답을
 * 제어하는 역할을 한다. 컨트롤러 실행전 preHandle(request,response,handler) 컨트롤러 실행후
 * postHandle(request,response,handler) 응답완료
 * afterCompletion(request,response,handler) Spring에서 제공하는 HandlerInterceptor 를
 * implements하여 위와 같은 메서드를 오버라이딩해서 사용한다 DispatcherServlet -- HandlerInterceptor
 * -- Handler(Controller) 컨트롤러 영역의 공통관심사항을 일괄처리 로그인 인증여부를 체크해서 로그인되어 있지 않은 사용자의
 * 요청은 요청에 해당하는 핸들러(컨트롤러)를 실행하지 않고 home으로 redirect 시킨다
 * 
 * package org.kosta.fourguys.config.interceptor;
 * 
 * import javax.servlet.http.HttpServletRequest; import
 * javax.servlet.http.HttpServletResponse; import
 * javax.servlet.http.HttpSession;
 * 
 * import org.slf4j.Logger; import org.slf4j.LoggerFactory; import
 * org.springframework.stereotype.Component; import
 * org.springframework.web.servlet.HandlerInterceptor;
 * 
 * @Component public class LoginCheckInterceptor implements HandlerInterceptor{
 * private Logger log = LoggerFactory.getLogger(getClass());
 * 
 * @Override public boolean preHandle(HttpServletRequest
 * request,HttpServletResponse response,Object hander) throws Exception{
 * HttpSession session = request.getSession(false);
 * if(session==null||session.getAttribute("mvo")==null) {
 * log.warn("##비로그인 {}##",request.getRequestURI()); response.sendRedirect("/");
 * return false;//handler(Controller)실행 X } return true;//handler(Controller)실행
 * O } }
 */