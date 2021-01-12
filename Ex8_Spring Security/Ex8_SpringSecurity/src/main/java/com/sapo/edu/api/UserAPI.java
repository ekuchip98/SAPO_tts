package com.sapo.edu.api;

import com.sapo.edu.api.output.login.LoginRequest;
import com.sapo.edu.api.output.login.LoginResponse;
import com.sapo.edu.api.output.login.RandomStuff;
import com.sapo.edu.dto.CustomUserDetails;
import com.sapo.edu.util.JwtTokenProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class UserAPI {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider tokenProvider;

    public UserAPI(AuthenticationManager authenticationManager, JwtTokenProvider tokenProvider) {
        this.authenticationManager = authenticationManager;
        this.tokenProvider = tokenProvider;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticateUser(@Valid @RequestBody LoginRequest loginRequest){
        // Xác thực thông tin người dùng Request lên
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        // Nếu không xảy ra exception tức là thông tin hợp lệ
        // Set thông tin authentication vào Security Context
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Trả về jwt cho người dùng.
        String jwt = tokenProvider.generateToken((CustomUserDetails) authentication.getPrincipal());
        return ResponseEntity.ok(new LoginResponse(jwt));
    }

    @GetMapping("/random")
    public RandomStuff randomStuff(){
        return new RandomStuff("JWT Hợp lệ mới có thể thấy được message này <GET>");
    }

    @PostMapping("/random")
    public RandomStuff randomStuffPost(){
        return new RandomStuff("JWT Hợp lệ mới có thể thấy được message này <POST>");
    }

    @PutMapping("/random")
    public RandomStuff randomStuffPut(){
        return new RandomStuff("JWT Hợp lệ mới có thể thấy được message này <PUT>");
    }
    @DeleteMapping("/random")
    public RandomStuff randomStuffDelete(){
        return new RandomStuff("JWT Hợp lệ mới có thể thấy được message này <DELETE>");
    }
}
