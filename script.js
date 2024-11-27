document.getElementById('submitButton').addEventListener('click', function() {
    // الحصول على القيم المدخلة من المستخدم
    const game = document.getElementById('gameSelect').value;
    const server = document.getElementById('serverSelect').value;
    const amount = document.getElementById('amount').value;
    const message = document.getElementById('message').value;

    // التحقق من صحة المدخلات
    if (!amount || isNaN(amount) || amount <= 0) {
        alert('يرجى إدخال مبلغ صالح');
        return;
    }

    // عرض النتيجة
    const result = document.getElementById('result');
    result.style.display = 'block';
    result.innerHTML = `
        <h3>تم إرسال الطلب بنجاح!</h3>
        <p>اللعبة: ${game === 'pubg' ? 'ببجي' : 'جينشن'}</p>
        <p>السيرفر: ${server === 'europe' ? 'أوروبا' : 'أمريكا'}</p>
        <p>المبلغ: ${amount} جنيه</p>
        <p>الرسالة: ${message || 'لا توجد رسالة'}</p>
    `;
});