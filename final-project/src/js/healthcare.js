document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('#healthcare .cards .card');

  const pcInitialCount = 8;
  const mobileInitialCount = 4;

  let previousWidth = window.innerWidth; // 前回の画面幅

  const checkAndUpdate = () => {
    const currentWidth = window.innerWidth;
    const isMobile = previousWidth <= 932; // 前回の画面状態
    const nowMobile = currentWidth <= 932; // 現在の画面状態

    // 画面幅が境界をまたいだ場合にのみ処理を実行
    if (isMobile !== nowMobile) {
      updateInitialCount(cards, pcInitialCount, mobileInitialCount);
    }

    // 現在の幅を次回の比較用に保存
    previousWidth = currentWidth;
  };

  // リサイズイベントに登録
  window.addEventListener('resize', checkAndUpdate);

  updateInitialCount(cards, pcInitialCount, mobileInitialCount);
});