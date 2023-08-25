$(document).ready(function(){
    // Đường dẫn đến ảnh mới khác cho màn hình nhỏ
    var newImageUrl1 = "/images/fb_logo.png";
    var newImageUrl2 = "/images/sf_logo.png";

    // Kích thước màn hình dưới đây sẽ quyết định thay đổi ảnh
    var breakpoint = 768;

    // Kích thước ảnh cho màn hình nhỏ
    var smallImageWidth = 30;
    var smallImageHeight = 30;

    // Kiểm tra kích thước màn hình khi tải trang và khi cửa sổ thay đổi kích thước
    function checkScreenWidth() {
        var currentWidth = $(window).width();
        var currentImage1 = $("#responsive-image-fb");
        var currentImage2 = $("#responsive-image-sf");

        if (currentWidth < breakpoint) {
            currentImage1.attr("src", newImageUrl1);
            currentImage2.attr("src", newImageUrl2);
            currentImage1.css({
                width: smallImageWidth + "px",
                height: smallImageHeight + "px"
            });
            currentImage2.css({
                width: smallImageWidth + "px",
                height: smallImageHeight + "px"
            });
        } else {
            // Nếu màn hình lớn hơn breakpoint, sử dụng ảnh mặc định và kích thước mặc định
            currentImage1.attr("src", "/images/fb-logo-navbar.png");
            currentImage2.attr("src", "/images/sf-logo-navbar.png");
            currentImage1.css({
                width: "30",
                height: "30"
            });
            currentImage2.css({
                width: "30",
                height: "30"
            });
        }
    }

    // Kiểm tra kích thước màn hình khi tải trang
    checkScreenWidth();

    // Kiểm tra kích thước màn hình khi cửa sổ thay đổi kích thước
    $(window).resize(function() {
        checkScreenWidth();
    }); 

    // Lấy URL trang hiện tại
    var url = window.location.pathname;
            
    // Duyệt qua từng liên kết trong menu navbar
    $(".navbar-nav a").each(function() {
        // Lấy URL của liên kết
        var linkUrl = $(this).attr("href");
        
        // Kiểm tra nếu URL của liên kết khớp với URL trang hiện tại
        if (url === linkUrl) {
            // Thêm lớp 'active' vào phần tử <li> cha
            $(this).closest("li").addClass("active");
        }
    });
}); 