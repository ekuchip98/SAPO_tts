use ex03_mysql;

/*Lọc các sản phẩm có chứa từ 'Điện Thoại' và thuộc loại danh mục có tên là 'Apple'*/
select * from sanpham as s inner join loaidanhmuc as l 
on s.danhmuc = l.id where l.ten = 'Apple' and  s.ten like '%Điện thoại%';

/*Đếm số lượng sản phẩm trong mỗi loại danh mục, sắp xếp theo thứ tự giảm dần*/
select l.id, l.ten, sum(s.soluongsanpham) as 'Soluong' from sanpham as s right join loaidanhmuc as l 
on s.danhmuc = l.id group by l.ten order by Soluong desc;

/*Procedure lấy 10 sản phẩm có số lượng bán nhiều nhất*/
delimiter $$
	create procedure getSanPham()
    begin
		select * from sanpham order by soluongban desc limit 0,10;
    end ; $$
delimiter ;

drop procedure getSanPham;

call getSanPham();


