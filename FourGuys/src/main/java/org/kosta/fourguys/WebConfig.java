package org.kosta.fourguys;

import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.cleopatra.spring.DataRequestResolver;

@Configuration
public class WebConfig implements WebMvcConfigurer {
	public void addArumentResolvers(List<DataRequestResolver> resolvers) {
		resolvers.add(new DataRequestResolver());
	}
}