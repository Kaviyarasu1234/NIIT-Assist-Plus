package com.jeeva.config;

import static com.jeeva.model.enumerate.Permission.ADMIN_CREATE;
import static com.jeeva.model.enumerate.Permission.ADMIN_DELETE;
import static com.jeeva.model.enumerate.Permission.ADMIN_READ;
import static com.jeeva.model.enumerate.Permission.ADMIN_UPDATE;
import static com.jeeva.model.enumerate.Permission.STAFF_READ;
import static com.jeeva.model.enumerate.Permission.STUDENT_CREATE;
import static com.jeeva.model.enumerate.Permission.STUDENT_DELETE;
import static com.jeeva.model.enumerate.Permission.STUDENT_READ;
import static com.jeeva.model.enumerate.Permission.STUDENT_UPDATE;
import static com.jeeva.model.enumerate.Role.ADMIN;
import static com.jeeva.model.enumerate.Role.STAFF;
import static com.jeeva.model.enumerate.Role.STUDENT;
import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.jeeva.constant.Api;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

        private final JwtAuthenticationFilter jwtAuthenticationFilter;
        private final AuthenticationProvider authenticationProvider;

        private static final String[] AUTH_WHITELIST = {
                "/api/auth/**",
                "/api/web/sites",
                "/swagger-ui/**",
                "/swagger-ui.html/**",
                "/v3/api-docs/**"
        };

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
                httpSecurity
                                .cors(corsConfirguarationSource -> corsConfirguarationSource.configurationSource(
                                                corsConfigurationSource()))
                                .csrf(csrf -> csrf.disable())
                                .authorizeHttpRequests(authorize -> authorize
                                                .requestMatchers(AUTH_WHITELIST)
                                                .permitAll()
                                                .requestMatchers(Api.AUTH + "/**")
                                                .permitAll()
                                                .requestMatchers(Api.MAIL + "/**")
                                                .permitAll()

                                                // .requestMatchers(Api.ADMIN + "/**")
                                                // .hasRole(ADMIN.name())
                                                // .requestMatchers(GET, Api.ADMIN + "/**")
                                                // .hasAuthority(ADMIN_READ.name())
                                                // .requestMatchers(POST, Api.ADMIN + "/**")
                                                // .hasAuthority(ADMIN_CREATE.name())
                                                // .requestMatchers(PUT, Api.ADMIN + "/**")
                                                // .hasAuthority(ADMIN_UPDATE.name())
                                                // .requestMatchers(DELETE, Api.ADMIN + "/**")
                                                // .hasAuthority(ADMIN_DELETE.name())

                                                .requestMatchers(Api.USER + "/**")
                                                .hasAnyRole(ADMIN.name(), STUDENT.name())
                                                .requestMatchers(GET, Api.USER + "/**")
                                                .hasAnyAuthority(ADMIN_READ.name(), STUDENT_READ.name())
                                                .requestMatchers(POST, Api.USER + "/**")
                                                .hasAnyAuthority(ADMIN_CREATE.name())
                                                .requestMatchers(PUT, Api.USER + "/**")
                                                .hasAnyAuthority(ADMIN_UPDATE.name(), STUDENT_UPDATE.name())
                                                .requestMatchers(DELETE, Api.USER + "/**")
                                                .hasAnyAuthority(ADMIN_DELETE.name())

                                                .requestMatchers(Api.COURSE + "/**")
                                                .hasAnyRole(ADMIN.name(), STUDENT.name())
                                                .requestMatchers(GET, Api.COURSE + "/**")
                                                .hasAnyAuthority(ADMIN_READ.name(), STUDENT_READ.name())
                                                .requestMatchers(POST, Api.COURSE + "/**")
                                                .hasAnyAuthority(ADMIN_CREATE.name())
                                                .requestMatchers(PUT, Api.COURSE + "/**")
                                                .hasAnyAuthority(ADMIN_UPDATE.name())
                                                .requestMatchers(DELETE, Api.COURSE + "/**")
                                                .hasAnyAuthority(ADMIN_DELETE.name())

                                                .requestMatchers(Api.ENROLL + "/**")
                                                .hasAnyRole(ADMIN.name(), STAFF.name(), STUDENT.name())
                                                .requestMatchers(GET, Api.ENROLL + "/**")
                                                .hasAnyAuthority(ADMIN_READ.name(), STAFF_READ.name())
                                                .requestMatchers(POST, Api.ENROLL + "/**")
                                                .hasAnyAuthority(STUDENT_CREATE.name())
                                                .requestMatchers(PUT, Api.ENROLL + "/**")
                                                .hasAnyAuthority(ADMIN_UPDATE.name())
                                                .requestMatchers(DELETE, Api.ENROLL + "/**")
                                                .hasAnyAuthority(ADMIN_DELETE.name(),STUDENT_DELETE.name())

                                                .requestMatchers(Api.PAYMENT + "/**")
                                                .hasAnyRole(ADMIN.name(), STUDENT.name(), STAFF.name())
                                                .requestMatchers(GET, Api.PAYMENT + "/**")
                                                .hasAnyAuthority(ADMIN_READ.name(), STUDENT_READ.name(), STAFF_READ.name())
                                                .requestMatchers(POST, Api.PAYMENT + "/**")
                                                .hasAnyAuthority(STUDENT_CREATE.name())
                                                .requestMatchers(PUT, Api.PAYMENT + "/**")
                                                .hasAnyAuthority(ADMIN_UPDATE.name())
                                                .requestMatchers(DELETE, Api.PAYMENT + "/**")
                                                .hasAnyAuthority(ADMIN_DELETE.name())

                                                .requestMatchers(Api.ENQUIRY + "/**")
                                                .hasAnyRole(ADMIN.name(), STUDENT.name(), STAFF.name())
                                                .requestMatchers(GET, Api.ENQUIRY + "/**")
                                                .hasAnyAuthority(ADMIN_READ.name(), STUDENT_READ.name())
                                                .requestMatchers(POST, Api.ENQUIRY + "/**")
                                                .hasAnyAuthority(STUDENT_CREATE.name())
                                                .requestMatchers(PUT, Api.ENQUIRY + "/**")
                                                .hasAnyAuthority(ADMIN_UPDATE.name())
                                                .requestMatchers(DELETE, Api.ENQUIRY + "/**")
                                                .hasAnyAuthority(ADMIN_DELETE.name(), STUDENT_DELETE.name())

                                                .anyRequest().authenticated())
                                .sessionManagement(session -> session
                                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                                .authenticationProvider(authenticationProvider)
                                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
                return httpSecurity.build();
        }

        @Bean
        public CorsConfigurationSource corsConfigurationSource() {
                CorsConfiguration configuration = new CorsConfiguration();
                configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
                configuration.setAllowCredentials(true);
                configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
                configuration.setAllowedOrigins(Arrays.asList(Api.VITE));
                UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
                source.registerCorsConfiguration("/**", configuration);
                return source;
        }
}
