function viewMore(compornent) {
    let cards;
    let viewMoreButton;
    let addCount;
    let currentCount;
    if (compornent === "doctor") {
        cards = document.querySelectorAll("#doctors .cards .card");
        viewMoreButton = document.querySelector("#doctors #viewMore");
        currentCount = document.querySelectorAll(
            "#doctors .cards .card.visible"
        ).length;
        // 追加表示する画像数
        addCount = 3;
    } else if (compornent === "health") {
        cards = document.querySelectorAll("#healthcare .cards .card");
        viewMoreButton = document.querySelector("#healthcare #viewMore");
        currentCount = document.querySelectorAll(
            "#healthcare .cards .card.visible"
        ).length;
        // 追加表示する画像数
        addCount = 4;
    }

    // 追加するカードにvisibleクラス追加
    visibleCard(cards, currentCount, addCount, viewMoreButton);
}

function visibleCard(cards, currentCount, addCount, viewMoreButton) {
    const nextCount = currentCount + addCount;

    cards.forEach((card, index) => {
        if (index < nextCount) {
            card.classList.add("visible");
        }
    });

    currentCount = nextCount;

    // すべての画像が表示されたらボタンを非表示
    if (currentCount >= cards.length) {
        viewMoreButton.style.visibility = "hidden";
    }
}

function updateInitialCount(cards, pcInitialCount, mobileInitialCount) {
    const isMobile = window.innerWidth <= 932;
    const currentCount = isMobile ? mobileInitialCount : pcInitialCount;
    const viewMoreButton = document.querySelectorAll("#viewMore");

    // 画像の初期表示
    cards.forEach((card, index) => {
        if (index < currentCount) {
            card.classList.add("visible");
        } else {
            card.classList.remove("visible");
        }
    });
    // view more ボタンの表示
    viewMoreButton.forEach((button) => {
        button.style.visibility = "visible";
    });
}