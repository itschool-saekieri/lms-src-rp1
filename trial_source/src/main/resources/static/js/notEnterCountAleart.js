document.addEventListener('DOMContentLoaded', function() {
    // データ属性から値を取得する
    const hasNotEnterCountElement = document.querySelector('[data-not-enter-count]');
    const hasNotEnterCount = hasNotEnterCountElement ? hasNotEnterCountElement.dataset.notEnterCount : null;
    
    // 値が 'true'（文字列）の場合にアラートを表示
    if (hasNotEnterCount === 'true') {
        alert("過去日の勤怠に未入力があります。");
    }
});