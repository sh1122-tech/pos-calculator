// script.js
function calculateRate() {
    const amount = parseFloat(document.getElementById('amount').value);
    const received = parseFloat(document.getElementById('received').value);
    
    if (!amount || !received) {
        alert('请输入完整信息');
        return;
    }

    const rate = ((amount - received) / amount * 100).toFixed(2);
    document.getElementById('rateResult').textContent = rate;
    
    const modal = document.getElementById('rateModal');
    const warning = document.getElementById('highRateWarning');
    
    modal.style.display = 'block';
    warning.style.display = rate > 0.6 ? 'block' : 'none';
}

function closeModal() {
    document.getElementById('rateModal').style.display = 'none';
}

function goToOrder() {
    document.querySelector('.calculator').style.display = 'none';
    document.getElementById('orderForm').style.display = 'block';
    closeModal();
}

function submitOrder(event) {
    event.preventDefault();
    
    const orderData = {
        method: document.getElementById('method').value,
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        timestamp: new Date().toLocaleString()
    };

    // 此处实际应发送到服务器，这里用localStorage模拟
    localStorage.setItem('latestOrder', JSON.stringify(orderData));
    alert('订单提交成功！');
    resetForm();
}

function resetForm() {
    document.getElementById('orderForm').style.display = 'none';
    document.querySelector('.calculator').style.display = 'block';
    document.querySelector('form').reset();
}

// 初始化隐藏预约表单
document.getElementById('orderForm').style.display = 'none';