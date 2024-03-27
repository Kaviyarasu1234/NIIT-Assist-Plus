package com.jeeva.model.enumerate;

import static com.jeeva.model.enumerate.Permission.ADMIN_CREATE;
import static com.jeeva.model.enumerate.Permission.ADMIN_DELETE;
import static com.jeeva.model.enumerate.Permission.ADMIN_READ;
import static com.jeeva.model.enumerate.Permission.ADMIN_UPDATE;
import static com.jeeva.model.enumerate.Permission.STAFF_CREATE;
import static com.jeeva.model.enumerate.Permission.STAFF_DELETE;
import static com.jeeva.model.enumerate.Permission.STAFF_READ;
import static com.jeeva.model.enumerate.Permission.STAFF_UPDATE;
import static com.jeeva.model.enumerate.Permission.STUDENT_CREATE;
import static com.jeeva.model.enumerate.Permission.STUDENT_DELETE;
import static com.jeeva.model.enumerate.Permission.STUDENT_READ;
import static com.jeeva.model.enumerate.Permission.STUDENT_UPDATE;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Role {
    ADMIN(Set.of(
            ADMIN_READ,
            ADMIN_CREATE,
            ADMIN_UPDATE,
            ADMIN_DELETE
            )),
    STAFF(Set.of(
            STAFF_READ,
            STAFF_CREATE,
            STAFF_UPDATE,
            STAFF_DELETE)),
    STUDENT(Set.of(
            STUDENT_READ,
            STUDENT_CREATE,
            STUDENT_UPDATE,
            STUDENT_DELETE));

    @Getter
    private final Set<Permission> permissions;

    public List<SimpleGrantedAuthority> getAuthority() {
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();

        for (Permission permission : getPermissions()) {
            authorities.add(new SimpleGrantedAuthority(permission.getPermission()));
        }

        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }
}
