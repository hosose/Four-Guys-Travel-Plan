/**
 * package org.kosta.fourguys.config.interceptor;
 * 
 * import org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.context.annotation.Configuration; import
 * org.springframework.web.servlet.config.annotation.InterceptorRegistry; import
 * org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
 * 
 * @Configuration public class HandlerInterceptorConfigure implements
 *                WebMvcConfigurer{ private final LoginCheckInterceptor
 *                logincheck;
 * @Autowired public HandlerInterceptorConfigure(LoginCheckInterceptor
 *            logincheck) { super(); this.logincheck = logincheck; }
 * @Override public void addInterceptors(InterceptorRegistry registry) {
 *           registry.addInterceptor(logincheck).addPathPatterns("/**")
 *           .excludePathPatterns("/","/home","/login*","/register*","/images/**","/css/**","/scripts/**");
 *           } }
 */