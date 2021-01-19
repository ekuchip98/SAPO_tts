import { Message, MessageBox } from "element-react";
import { createCategory, deleteCategory, updateCategory } from "../../endpoint/Category";

const confirmDelete = async (token, type, id) => {
    let message = "Bạn có chắc chắc muốn xóa " + type + " này không ?"
    let success = false;
    await MessageBox.confirm(message, 'Warning', {
        confirmButtonText: 'Đồng ý',
        cancelButtonText: 'Hủy',
        type: 'warning'
    }).then(async () => {
        try {
            let res;
            if (type === "category")
                res = await deleteCategory(token, id);
            if (res.status === 204) {
                Message({
                    type: 'success',
                    message: 'Xóa thành công!'
                });
                success = true;
            } else {
                Message({
                    type: 'error',
                    message: 'Xóa thất bại'
                });
            }
        } catch (e) {
            Message({
                type: 'error',
                message: 'Xóa thất bại'
            });
        }
    });
    return success;
}

const confirmInsert = async (token, type, form) => {
    let res;
    let success = false;
    if (type === "category") res = await createCategory(token, form)
    if (res.status === 201) {
        Message({
            type: 'success',
            message: 'Thêm thành công!'
        });
        success = true;
    } else {
        Message({
            type: 'error',
            message: 'Thêm thất bại'
        });
    }
    return success;
}

const confirmUpdate = async (token, type, form, id) => {
    let message = "Bạn có chắc chắc muốn lưu thay đổi " + type + " này không ?"
    let success = false;
    await MessageBox.confirm(message, 'Warning', {
        confirmButtonText: 'Đồng ý',
        cancelButtonText: 'Hủy',
        type: 'warning'
    }).then(async () => {
        try {
            let res;
            if (type === "category")
                res = await updateCategory(token, form, id);
            if (res.status === 200) {
                Message({
                    type: 'success',
                    message: 'Cập nhật thành công!'
                });
                success = true;
            } else {
                Message({
                    type: 'error',
                    message: 'Cập nhật thất bại'
                });
            }
        } catch (e) {
            Message({
                type: 'error',
                message: 'Cập nhật thất bại'
            });
        }
    })
    return success;
}

export { confirmDelete, confirmInsert, confirmUpdate };