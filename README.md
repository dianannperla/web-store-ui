# Web Store UI

Web Store UI là một framework frontend mạnh mẽ và linh hoạt, được thiết kế để giúp các nhà phát triển xây dựng nhanh chóng và hiệu quả các giao diện người dùng cho các cửa hàng trực tuyến. 

## Tính năng nổi bật:
- **Thiết kế Responsive:** Giao diện tự động điều chỉnh theo kích thước màn hình của người dùng.
- **Tích hợp API dễ dàng:** Hỗ trợ tích hợp với các API phổ biến để lấy dữ liệu sản phẩm.
- **Tùy chỉnh dễ dàng:** Cung cấp các thành phần có thể tái sử dụng và tùy chỉnh theo nhu cầu của bạn.
- **Hiệu suất cao:** Tối ưu hóa tốc độ tải trang và trải nghiệm người dùng.

## Cài đặt
```bash
npm install web-store-ui
```

## Sử dụng
```javascript
import { ProductCard } from 'web-store-ui';

const App = () => {
  return (
    <div>
      <ProductCard 
        title='Sản phẩm 1'
        price='200,000đ'
        image='image-url'
      />
    </div>
  );
};
```

## Đóng góp
Chúng tôi hoan nghênh các đóng góp từ cộng đồng. Hãy tạo pull request hoặc mở issue nếu bạn phát hiện lỗi hoặc có đề xuất cải tiến.

## Giấy phép
Dự án này được phát hành dưới Giấy phép MIT.