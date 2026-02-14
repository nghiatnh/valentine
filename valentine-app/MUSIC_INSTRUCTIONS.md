# Hướng dẫn thêm nhạc "50 Năm Về Sau"

## Cách 1: Sử dụng file MP3 local (Khuyên dùng)

1. Tải file nhạc "50 Năm Về Sau" về máy (định dạng MP3)
2. Đặt file vào thư mục `public` của dự án:
   ```
   /home/nghiatnh/projects/valentine/valentine-app/public/50-nam-ve-sau.mp3
   ```
3. Cập nhật đường dẫn trong file `App.jsx`:
   ```jsx
   <audio ref={audioRef} loop>
     <source src="/50-nam-ve-sau.mp3" type="audio/mpeg" />
   </audio>
   ```

## Cách 2: Sử dụng link YouTube hoặc streaming

Nếu muốn dùng link từ YouTube hoặc các nền tảng khác, bạn có thể:
1. Tải file MP3 từ YouTube (sử dụng các công cụ như youtube-dl)
2. Upload lên hosting (Google Drive, Dropbox, hoặc hosting riêng)
3. Cập nhật link trong `App.jsx`

## Lưu ý

- Nhạc sẽ tự động phát khi trang web load (nếu trình duyệt cho phép)
- Nếu trình duyệt chặn auto-play, người dùng có thể click vào nút 🎵 ở góc trên bên phải để bật nhạc
- Nút 🎵 có thể dùng để tắt/bật nhạc bất cứ lúc nào
