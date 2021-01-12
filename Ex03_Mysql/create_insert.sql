/*Tao database*/
CREATE DATABASE ex03_mysql;
/*ket thuc tao database*/

USE ex03_mysql;
/*Tao bang*/
CREATE TABLE if not exists kho(
	id int(11) primary key auto_increment,
    makho varchar(20) not null unique,
    ten varchar(50) not null,
    diadiem text,
    ngaytao date,
    ngaysua date
);
CREATE TABLE if not exists loaidanhmuc(
	id int(11) primary key auto_increment,
    maloaidanhmuc varchar(20) not null unique,
    ten varchar(50),
    mota text,
    ngaytao date,
    ngaysua date
);
CREATE TABLE if not exists sanpham(
	id int(11) primary key auto_increment,
    masanpham varchar(20) not null unique,
    danhmuc int(11) not null,
    kho int(11) not null,
    ten varchar(50) null,
    motasanpham text null,
    duongdananh varchar(150) null,
    soluongsanpham int(11) null default 0,
    soluongban int(11) null default 0,
    ngaytao date null,
    ngaysua date null
);
/*Ket thuc tao bang*/
/*Tao khoa phu*/
 alter table sanpham add constraint fk_sanpham_danhmuc foreign key(danhmuc) references loaidanhmuc(id);
 alter table sanpham add constraint fk_kho_sanpham foreign key(kho) references kho(id);
 /*Ket thuc tao khoa phu*/
 
 /*Them kho*/
 insert into kho (makho, ten, diadiem, ngaytao) values('MK001','Kho 1','123 Đội Cấn',now());
 insert into kho (makho, ten, diadiem, ngaytao) values('MK002','Kho 2','100 Đội Cấn',now());
 insert into kho (makho, ten, diadiem, ngaytao) values('MK003','Kho 3','200 Đội Cấn',now());
 insert into kho (makho, ten, diadiem, ngaytao) values('MK004','Kho 4','111 Đội Cấn',now());
/*Them loại danh mục*/
 insert into loaidanhmuc (maloaidanhmuc, ten, mota, ngaytao) values('MDM001','Apple','Hãng Apple sản xuất',now());
 insert into loaidanhmuc (maloaidanhmuc, ten, mota, ngaytao) values('MDM002','Xiaomi','Hãng Xiaomi sản xuất',now());
 insert into loaidanhmuc (maloaidanhmuc, ten, mota, ngaytao) values('MDM003','Oppo','Hãng Oppo sản xuất',now());
 insert into loaidanhmuc (maloaidanhmuc, ten, mota, ngaytao) values('MDM004','Nokia','Hãng Nokia sản xuất',now());
 insert into loaidanhmuc (maloaidanhmuc, ten, mota, ngaytao) values('MDM005','Soni','Hãng Soni sản xuất',now());
 /*Them sản phẩm*/
 insert into sanpham (masanpham, danhmuc, kho, ten, motasanpham, duongdananh, soluongsanpham, soluongban, ngaytao) 
 values('MSP001',1,3,'Điện thoại Iphone XS', 'Một sản phẩm do Apple sản xuất', 'iphone_xs.jpg',20,10,now());
 insert into sanpham (masanpham, danhmuc, kho, ten, motasanpham, duongdananh, soluongsanpham, soluongban, ngaytao) 
 values('MSP002',1,3,'Iphone XS Max', 'Một sản phẩm do Apple sản xuất', 'iphone_xs_max.jpg',200,120,now());
 insert into sanpham (masanpham, danhmuc, kho, ten, motasanpham, duongdananh, soluongsanpham, soluongban, ngaytao) 
 values('MSP003',2,1,'Xiaomi redmi 4x', 'Một sản phẩm do Xiaomi sản xuất', 'xiaomi_redmi_4x.jpg',50,10,now());
 insert into sanpham (masanpham, danhmuc, kho, ten, motasanpham, duongdananh, soluongsanpham, soluongban, ngaytao) 
 values('MSP004',2,3,'Điện thoại Xiaomi 10', 'Một sản phẩm do Xiaomi sản xuất', 'xiaomi_10.jpg',100,80,now());
 insert into sanpham (masanpham, danhmuc, kho, ten, motasanpham, duongdananh, soluongsanpham, soluongban, ngaytao) 
 values('MSP005',3,2,'Oppo 3', 'Một sản phẩm do Oppo sản xuất', 'oppo_3.jpg',120,50,now());
 insert into sanpham (masanpham, danhmuc, kho, ten, motasanpham, duongdananh, soluongsanpham, soluongban, ngaytao) 
 values('MSP006',3,2,'Oppo 3', 'Một sản phẩm do Oppo sản xuất', 'oppo_3.jpg',120,50,now());
 insert into sanpham (masanpham, danhmuc, kho, ten, motasanpham, duongdananh, soluongsanpham, soluongban, ngaytao) 
 values('MSP007',4,1,'Điện thoại Nokia 3110c', 'Một sản phẩm do Nokia sản xuất', 'nokia_3110c.jpg',10,0,now());
 
 /*Sửa kho*/
 update kho set makho = 'MK111', ten = 'Kho 10', diadiem = '222 Bắc Từ Liêm', ngaysua = now()
 where id = 4;
 /*Sửa loại danh mục*/
 update loaidanhmuc set maloaidanhmuc = 'MDM111', ten = 'Samsung', mota = 'Hãng Samsung sản xuất', ngaysua = now()
 where id = 5;
 /*Sửa sản phẩm*/
 update sanpham set masanpham = 'MSP110', danhmuc = 3, kho = 2, ten = 'Samsung note 10', 
 motasanpham = 'Một sản phẩm do Samsung sản xuất', duongdananh = 'samsung_note_10.jpg', soluongsanpham = 121, ngaysua = now()
 where id = 6;
 
 /*Xóa kho*/
 delete from kho where id = 4;
 /*Xóa loại danh mục*/
 delete from loaidanhmuc where id = 5;
 /*Xóa sản phẩm*/
 delete from sanpham where id = 7;
 
 /*Xóa danh mục đồng thời xóa luôn các sản phẩm thuộc danh mục đó (Có sử dụng transaction)*/
delimiter $$
	create trigger trigger_delete_loaidanhmuc
    before delete
    on loaidanhmuc for each row
    begin
		delete from sanpham where sanpham.danhmuc = old.id;
    end$$
delimiter ;

set autocommit = 0;
start transaction;
begin;
	delete from loaidanhmuc where id = 1;
commit;
rollback;
