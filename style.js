function showScene(sceneID) {
    console.log("Showing:", sceneID);

    const scene = document.getElementById(sceneID);

    if (!scene) {
        console.warn("Scene not found:", sceneID);
        return;
    }

    const topLevelScenes = document.querySelectorAll(".page > .scene");

    topLevelScenes.forEach(function(topLevelScene) {
        topLevelScene.style.display = "none";
    });

    scene.style.display = "flex";

    if (scene.querySelectorAll) {
        scene.querySelectorAll(":scope > .scene").forEach(function(childScene) {
            childScene.style.display = "none";
        });
    }
}

const endingSceneMap = {
    tiredHomeScene: "tiredHomeResultScene",
    partyScene: "partyResultScene",
    concertEndScene: "concertResultScene",
    millionaireResultScene: "millionaireResultEndScene",
    dreamJobScene: "dreamJobResultScene"
};

const endingTitleMap = {
    tiredHomeScene: "THE CHILL ONE",
    partyScene: "RESPONSIBLE ONE",
    concertEndScene: "OPTIMIST",
    millionaireResultScene: "BEAUTIFUL DISASTER",
    dreamJobScene: "ADVENTURER"
};

function showEndingResult(previousSceneId) {
    const targetSceneId = endingSceneMap[previousSceneId] || "scene1";
    const targetScene = document.getElementById(targetSceneId);
    const title = endingTitleMap[previousSceneId] || "A PERFECT DAY";

    if (targetScene) {
        const heading = targetScene.querySelector("h1");
        if (heading) {
            heading.textContent = title;
        }
    }

    showScene(targetSceneId);
}


function nextScene() {
    showScene("scene2");
}


showScene("scene1");


function chooseBreakfast(choice) {

    if (choice === "cook") {

        showScene("cookScene");

        setTimeout(function() {

            document.getElementById("cookThen").textContent =
                "And then...";

        }, 3000);

    }


    if (choice === "cafe") {

        showScene("cafeScene");

        setTimeout(function() {

            document.getElementById("cafeThen").textContent =
                "A thunderstorm. you're drenched and your hair's a mess.";

        }, 2500);

    }


    if (choice === "scroll") {

        showScene("scrollScene");

        setTimeout(function() {

            document.getElementById("scrollThen").textContent =
                "You had a quick breakfast and went out for a stroll. You see a brochure for your favorite movie playing this evening...";

        }, 3000);

    }

}


function showEggError() {

    const popup = document.getElementById("eggError");

    popup.style.display = "flex";

}


function closeEggError() {

    document.getElementById("eggError").style.display = "none";

    showScene("eggChoiceScene");

}
let mallReason = "";
function goToMall(reason) {

    mallReason = reason;

    showScene("mallScene");

}
function goHomeFromMall() {

    if (mallReason === "tired") {

        showScene("tiredHomeScene");

    }

    if (mallReason === "party") {

        showScene("partyScene");

    }

}
function showMillionaireResult() {

    showScene("millionaireResultScene");

}
function showMovieError() {

    const popup = document.getElementById("movieError");

    popup.style.display = "flex";

}


function closeMovieError() {

    document.getElementById("movieError").style.display = "none";

    showScene("concertScene");

}
function showDreamJob() {
    showScene("dreamJobScene");
}


function finishDreamJob() {
    showScene("dreamJobEndScene");
}
showScene("scene1");