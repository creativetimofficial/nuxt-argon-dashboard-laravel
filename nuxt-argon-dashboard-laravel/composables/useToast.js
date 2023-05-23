import Swal from "sweetalert2";

export default async (type, message) => {
    const background = type === "success" ? "#2dce89" : "#f5365c";

    Swal.fire({
        timer: 2000,
        toast: true,
        position: 'top-end',
        background: background,
        showConfirmButton: false,
        showCloseButton: true,
        html: `<span style="color: white">${message}</span>`,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
}
