# Hướng dẫn Deploy lên Vercel

## Cách 1: Deploy qua Vercel CLI (Khuyên dùng - Nhanh nhất)

### Bước 1: Login vào Vercel
```bash
cd /home/nghiatnh/projects/valentine/valentine-app
vercel login
```
Làm theo hướng dẫn để đăng nhập (qua email hoặc GitHub)

### Bước 2: Deploy
```bash
vercel
```

Trả lời các câu hỏi:
- **Set up and deploy?** → Yes
- **Which scope?** → Chọn account của bạn
- **Link to existing project?** → No
- **What's your project's name?** → valentine (hoặc tên bạn muốn)
- **In which directory is your code located?** → ./
- **Want to override the settings?** → No

### Bước 3: Deploy lên Production
```bash
vercel --prod
```

Website sẽ được deploy tại URL như: `https://valentine-xxx.vercel.app`

---

## Cách 2: Deploy qua Vercel Dashboard (Dễ dàng hơn)

### Bước 1: Đẩy code lên GitHub
Code của bạn đã được push lên GitHub rồi ✅

### Bước 2: Truy cập Vercel
1. Vào https://vercel.com
2. Đăng nhập bằng GitHub
3. Click **"Add New Project"**

### Bước 3: Import Repository
1. Chọn repository `nghiatnh/valentine`
2. Click **"Import"**

### Bước 4: Cấu hình Project
- **Framework Preset**: Vite
- **Root Directory**: `valentine-app` (QUAN TRỌNG!)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Bước 5: Deploy
Click **"Deploy"** và đợi vài phút!

---

## Lưu ý quan trọng

### ⚠️ Cấu trúc thư mục
Vì code của bạn nằm trong `valentine-app/`, bạn cần:

**Option A: Di chuyển tất cả file ra ngoài** (Khuyên dùng)
```bash
cd /home/nghiatnh/projects/valentine
mv valentine-app/* .
mv valentine-app/.* . 2>/dev/null || true
rm -rf valentine-app
git add .
git commit -m "Move files to root for Vercel"
git push
```

**Option B: Giữ nguyên và set Root Directory**
Khi deploy trên Vercel Dashboard, set **Root Directory** = `valentine-app`

### 🎵 File nhạc
File `50nam.mcp3` đã được import đúng cách, sẽ hoạt động tốt trên Vercel!

### 🌐 Custom Domain (Tùy chọn)
Sau khi deploy, bạn có thể:
1. Vào Project Settings trên Vercel
2. Chọn **Domains**
3. Thêm domain của riêng bạn

---

## Kiểm tra sau khi deploy

✅ Website load được  
✅ Hình ảnh hoa và sô cô la hiển thị  
✅ Nhạc phát được (có thể cần click vào trang trước)  
✅ Nút swap position hoạt động  
✅ Tất cả 3 màn hình chuyển đổi mượt mà  

---

## Troubleshooting

### Nếu hình ảnh không load:
- Unsplash images đang dùng nên hoạt động tốt
- Nếu có vấn đề, có thể download và đặt vào `public/`

### Nếu nhạc không phát:
- Một số trình duyệt chặn auto-play
- User cần click vào nút 🎵 để phát nhạc

### Nếu build bị lỗi:
```bash
# Test build locally trước
npm run build
npm run preview
```

Chúc bạn deploy thành công! 🚀💕
