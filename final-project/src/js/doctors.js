document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.cards .card');
    const viewMoreButton = document.getElementById('viewMore');
    
    // 初期表示の画像数を設定
    const pcInitialCount = 6;
    const mobileInitialCount = 3;
    const addCount = 3;
  
    let currentCount = 0;
  
    // 初期表示数を画面幅で変更
    const updateInitialCount = () => {
      const isMobile = window.innerWidth <= 932;
      currentCount = isMobile ? mobileInitialCount : pcInitialCount;
  
      // 画像の初期表示
      cards.forEach((card, index) => {
        if (index < currentCount) {
          card.classList.add('visible');
        } else {
          card.classList.remove('visible');
        }
      });
    };
  
    // View Moreボタンのクリックイベント
    viewMoreButton.addEventListener('click', () => {
      const nextCount = currentCount + addCount;
  
      cards.forEach((card, index) => {
        if (index < nextCount) {
          card.classList.add('visible');
        }
      });
  
      currentCount = nextCount;
  
      // すべての画像が表示されたらボタンを非表示
      if (currentCount >= cards.length) {
        viewMoreButton.style.display = 'none';
      }
    });
  
    updateInitialCount();
  
    // ウィンドウサイズ変更時に初期表示を更新
    window.addEventListener('resize', updateInitialCount);
  });
  