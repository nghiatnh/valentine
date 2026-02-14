# Hướng dẫn thêm file nhạc

## File nhạc cần thiết:

### 1. Nhạc vui (celebration.mp3)
- Đặt vào: `/home/nghiatnh/projects/valentine/valentine-app/public/celebration.mp3`
- Mục đích: Phát 5 giây khi click "Có" ở màn hình đầu tiên
- Gợi ý: Nhạc vui nhộn, sôi động (ví dụ: "Happy" của Pharrell Williams, hoặc nhạc tiệc tùng)

### 2. Nhạc lãng mạn (50nam.mp3)
- File hiện tại: `/home/nghiatnh/projects/valentine/valentine-app/src/assets/50nam.mcp3`
- Cần đổi tên thành: `50nam.mp3` (nếu đây là file MP3)
- Hoặc cập nhật code để dùng đúng extension

## Cách thêm:

```bash
# Đổi tên file nếu cần
cd /home/nghiatnh/projects/valentine/valentine-app/src/assets
mv 50nam.mcp3 50nam.mp3

# Tạo thư mục public nếu chưa có
mkdir -p /home/nghiatnh/projects/valentine/valentine-app/public

# Copy file nhạc vui vào public (thay đổi đường dẫn phù hợp)
cp ~/Downloads/celebration.mp3 /home/nghiatnh/projects/valentine/valentine-app/public/
```

## Lưu ý:
- File trong `public/` sẽ được truy cập bằng đường dẫn `/filename.mp3`
- File trong `src/assets/` cần import hoặc dùng đường dẫn tương đối
