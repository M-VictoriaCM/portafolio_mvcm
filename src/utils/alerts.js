import Swal from "sweetalert2";

export const showErrorAlert = (message, title = 'Error!')=>{
    return Swal.fire({
        icon: 'error',
        title:title,
        text: message,
        confirmButtonText: 'OK',
    });
}

export const showSuccessAlert = (message, title = 'Success!')=>{
    return Swal.fire({
        icon: 'success',
        title:title,
        text: message,
        confirmButtonText: 'OK',
    });
}