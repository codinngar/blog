package dev.codinngar.blog.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int likes;
    private String author;
    private String title;
    private String description;
    private String content;
    private String imageURL;
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        this.likes = 0;
        this.createdAt = LocalDateTime.now();
    }
}
