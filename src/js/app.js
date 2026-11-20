document.addEventListener('DOMContentLoaded', () => {
    
    // ตั้งค่า Event Listener สำหรับปุ่มซ่อน/แสดงรหัสผ่าน
    const toggleBtn = document.getElementById('togglePasswordBtn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', togglePassword);
    }

    // ตั้งค่า Event Listener สำหรับฟอร์ม
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});

// ฟังก์ชันสำหรับเปิด/ปิด การมองเห็นรหัสผ่าน
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggleIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.replace('ph-eye', 'ph-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.replace('ph-eye-slash', 'ph-eye');
    }
}

// ฟังก์ชันจัดการตอนกดปุ่ม Login (จำลองการทำงาน)
function handleLogin(event) {
    event.preventDefault(); // ป้องกันการ Refresh หน้า
    
    const btn = document.getElementById('submitBtn');
    const email = document.getElementById('email').value;
    
    // เปลี่ยนสถานะปุ่มเป็น Loading
    btn.classList.add('is-loading');
    btn.disabled = true;

    // จำลองการยิง API รอผล 1.5 วินาที
    setTimeout(() => {
        // คืนสถานะปุ่ม
        btn.classList.remove('is-loading');
        btn.disabled = false;

        // แสดงข้อความต้อนรับ
        showMockNotification('success', `ยินดีต้อนรับ ${email}`);
        
    }, 1500);
}

// ฟังก์ชันจำลอง Notification UI
function showMockNotification(type, message) {
    const notif = document.createElement('div');
    notif.className = `fixed top-5 right-5 z-50 p-4 rounded-lg shadow-xl text-white transition-all transform duration-300 translate-y-0 opacity-100 flex items-center gap-3 ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}`;
    
    const icon = type === 'success' ? '<i class="ph ph-check-circle text-2xl"></i>' : '<i class="ph ph-warning-circle text-2xl"></i>';
    
    notif.innerHTML = `${icon} <span class="font-medium">${message}</span>`;
    document.body.appendChild(notif);

    // ให้ Notification หายไปเองหลังจาก 3 วินาที
    setTimeout(() => {
        notif.classList.remove('translate-y-0', 'opacity-100');
        notif.classList.add('-translate-y-full', 'opacity-0');
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}