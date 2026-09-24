package com.loganfoster.engineering_platform.controller.contact;

import java.time.LocalDateTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {

    long countByEmailIgnoreCaseAndCreatedAtAfter(
            String email,
            LocalDateTime after
    );
}