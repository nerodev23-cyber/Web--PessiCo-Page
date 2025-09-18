const generalRegis = document.getElementById('General-vehicle');
generalRegis.addEventListener('click',() =>{

    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});

  const pswgenral = prompt('กรุณาใส่หมายเลขเพื่อเข้าหน้ากรอกขึ้นลงทะเบียน','');
  if(pswgenral != null && pswgenral.trim() != ''){
    alert("เข้าหน้ากรอกข้อมูลสำเร็จ")
  }

})

// รหัสใหม่สำหรับรถ Supplier
const supplierRegis = document.getElementById('Suppliere-vehicle');
supplierRegis.addEventListener('click', async () => {
    const supplierCode = prompt('กรุณาใส่รหัส Supplier (10 หลัก):', '');
    
    if (supplierCode !== null && supplierCode.trim() !== '') {
        try {
            // เรียก API เพื่อตรวจสอบรหัส
            const response = await fetch('http://localhost:8080/api/verify-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code: supplierCode.trim() })
            });
            
            const result = await response.json();
            
            if (result.success && result.isValid) {
                alert("Good");
                // ที่นี่คุณสามารถเพิ่มโค้ดเพื่อไปหน้าถัดไปได้
                console.log('Supplier code verified successfully');
            } else {
                alert(result.message || "รหัสไม่ถูกต้อง");
            }
            
        } catch (error) {
            console.error('Error:', error);
            alert('เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์');
        }
    }
});