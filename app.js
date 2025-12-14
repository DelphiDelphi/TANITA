// 機種データ（あとから追加OK）
const MODELS = [
    /* ===== HD / BF ===== */
    {
        id: "HD-series",
        name: "HDシリーズ",
        fields: ["体重"]
    },
    {
        id: "BF-series",
        name: "BFシリーズ",
        fields: ["体重", "体脂肪率"]
    },

    /* ===== BC-210系 ===== */
    {
        id: "BC-210",
        name: "BC-210",
        fields: ["体重", "体脂肪率", "BMI"]
    },
    {
        id: "BC-211",
        name: "BC-211",
        fields: ["体重", "体脂肪率", "BMI"]
    },
    {
        id: "BC-212",
        name: "BC-212",
        fields: ["体重", "体脂肪率", "BMI"]
    },
    {
        id: "BC-213",
        name: "BC-213",
        fields: ["体重", "体脂肪率", "BMI"]
    },

    /* ===== BC-220系 ===== */
    {
        id: "BC-220",
        name: "BC-220",
        fields: ["体重", "体脂肪率", "BMI", "筋肉量", "内臓脂肪レベル", "基礎代謝量", "推定骨量(BN)"]
    },
    {
        id: "BC-221",
        name: "BC-221",
        fields: ["体重", "体脂肪率", "BMI", "筋肉量", "内臓脂肪レベル", "基礎代謝量", "推定骨量(BN)"]
    },
    {
        id: "BC-222",
        name: "BC-222",
        fields: ["体重", "体脂肪率", "BMI", "筋肉量", "内臓脂肪レベル", "基礎代謝量", "推定骨量(BN)"]
    },
    {
        id: "BC-223",
        name: "BC-223",
        fields: ["体重", "体脂肪率", "BMI", "筋肉量", "内臓脂肪レベル", "基礎代謝量", "推定骨量(BN)"]
    },

    /* ===== BC-230系 ===== */
    {
        id: "BC-230",
        name: "BC-230",
        fields: ["体重", "体脂肪率", "BMI", "筋肉量", "内臓脂肪レベル", "基礎代謝量", "推定骨量(BN)", "体内年齢"]
    },
    {
        id: "BC-231",
        name: "BC-231",
        fields: ["体重", "体脂肪率", "BMI", "筋肉量", "内臓脂肪レベル", "基礎代謝量", "推定骨量(BN)", "体内年齢"]
    },
    {
        id: "BC-232",
        name: "BC-232",
        fields: ["体重", "体脂肪率", "BMI", "筋肉量", "内臓脂肪レベル", "基礎代謝量", "推定骨量(BN)", "体内年齢"]
    },
    {
        id: "BC-233",
        name: "BC-233",
        fields: ["体重", "体脂肪率", "BMI", "筋肉量", "内臓脂肪レベル", "基礎代謝量", "推定骨量(BN)", "体内年齢"]
    },

    /* ===== BC-314系 ===== */
    {
        id: "BC-314",
        name: "BC-314",
        fields: ["体重", "体脂肪率", "BMI", "筋肉量", "内臓脂肪レベル", "基礎代謝量", "推定骨量(BN)", "体内年齢", "体型判定"]
    },
    {
        id: "BC-315",
        name: "BC-315",
        fields: ["体重", "体脂肪率", "BMI", "筋肉量", "内臓脂肪レベル", "基礎代謝量", "推定骨量(BN)", "体内年齢", "体型判定"]
    },
    {
        id: "BC-316",
        name: "BC-316",
        fields: ["体重", "体脂肪率", "BMI", "筋肉量", "内臓脂肪レベル", "基礎代謝量", "推定骨量(BN)", "体内年齢", "体型判定"]
    },
    {
        id: "BC-317",
        name: "BC-317",
        fields: ["体重", "体脂肪率", "BMI", "筋肉量", "内臓脂肪レベル", "基礎代謝量", "推定骨量(BN)", "体内年齢", "体型判定"]
    },

    /* ===== BC-330系 ===== */
    {
        id: "BC-330",
        name: "BC-330",
        fields: ["体重", "体脂肪率", "BMI", "筋肉量", "内臓脂肪レベル", "基礎代謝量", "推定骨量(BN)", "体内年齢", "体型判定", "体水分率"]
    },
    {
        id: "BC-331",
        name: "BC-331",
        fields: ["体重", "体脂肪率", "BMI", "筋肉量", "内臓脂肪レベル", "基礎代謝量", "推定骨量(BN)", "体内年齢", "体型判定", "体水分率"]
    },
    {
        id: "BC-332",
        name: "BC-332",
        fields: ["体重", "体脂肪率", "BMI", "筋肉量", "内臓脂肪レベル", "基礎代謝量", "推定骨量(BN)", "体内年齢", "体型判定", "体水分率"]
    },

    /* ===== BC-418 ===== */
    {
        id: "BC-418",
        name: "BC-418（業務・準プロ向け）",
        fields: ["体重", "体脂肪率", "BMI", "筋肉量（全身）", "部位別筋肉量", "内臓脂肪レベル", "基礎代謝量", "推定骨量(BN)"]
    },

    /* ===== BC-600系 ===== */
    {
        id: "BC-600",
        name: "BC-600",
        fields: ["体重", "体脂肪率", "BMI", "筋肉量", "内臓脂肪レベル", "基礎代謝量", "推定骨量(BN)", "体内年齢", "部位別筋肉量（簡易）"]
    },
    {
        id: "BC-622",
        name: "BC-622",
        fields: ["体重", "体脂肪率", "BMI", "筋肉量", "内臓脂肪レベル", "基礎代謝量", "推定骨量(BN)", "体内年齢", "部位別筋肉量（簡易）"]
    },
    {
        id: "BC-730",
        name: "BC-730",
        fields: ["体重", "体脂肪率", "BMI", "筋肉量", "内臓脂肪レベル", "基礎代謝量", "推定骨量(BN)", "体内年齢", "部位別筋肉量（簡易）"]
    },

    /* ===== RDシリーズ ===== */
    {
        id: "RD-912",
        name: "RD-912（インナースキャンデュアル）",
        fields: ["体重", "BMI", "体脂肪率", "筋肉量", "筋質点数(MQ)", "推定骨量(BN)", "内臓脂肪レベル(VF)", "基礎代謝量(BMR)", "体内年齢", "体水分率", "脈拍数", "体型判定", "前回比・平均との差"]
    },
    {
        id: "RD-911",
        name: "RD-911",
        fields: ["体重", "BMI", "体脂肪率", "筋肉量", "筋質点数(MQ)", "推定骨量(BN)", "内臓脂肪レベル(VF)", "基礎代謝量", "体内年齢", "体水分率", "脈拍数", "体型判定"]
    },
    {
        id: "RD-910",
        name: "RD-910",
        fields: ["体重", "BMI", "体脂肪率", "筋肉量", "推定骨量(BN)", "内臓脂肪レベル(VF)", "基礎代謝量", "体内年齢", "体水分率"]
    },

    {
        id: "RD-803L",
        name: "RD-803L（部位別測定モデル）",
        fields: ["体重", "BMI", "体脂肪率", "全身筋肉量", "部位別筋肉量", "部位別脂肪率", "内臓脂肪レベル(VF)", "推定骨量(BN)", "基礎代謝量", "体内年齢", "体水分率", "筋質点数(MQ)", "脈拍数", "左右バランス判定"]
    },
    {
        id: "RD-804L",
        name: "RD-804L（部位別測定モデル）",
        fields: ["体重", "BMI", "体脂肪率", "全身筋肉量", "部位別筋肉量", "部位別脂肪率", "内臓脂肪レベル(VF)", "推定骨量(BN)", "基礎代謝量", "体内年齢", "体水分率", "筋質点数(MQ)", "脈拍数", "左右バランス判定"]
    },
    {
        id: "RD-805L",
        name: "RD-805L（部位別測定モデル）",
        fields: ["体重", "BMI", "体脂肪率", "全身筋肉量", "部位別筋肉量", "部位別脂肪率", "内臓脂肪レベル(VF)", "推定骨量(BN)", "基礎代謝量", "体内年齢", "体水分率", "筋質点数(MQ)", "脈拍数", "左右バランス判定"]
    },

    {
        id: "RD-901",
        name: "RD-901",
        fields: ["体重", "BMI", "体脂肪率", "筋肉量", "内臓脂肪レベル(VF)", "推定骨量(BN)", "基礎代謝量", "体内年齢", "体水分率", "筋質点数(MQ)"]
    },
    {
        id: "RD-902",
        name: "RD-902",
        fields: ["体重", "BMI", "体脂肪率", "筋肉量", "内臓脂肪レベル(VF)", "推定骨量(BN)", "基礎代謝量", "体内年齢", "体水分率", "筋質点数(MQ)"]
    },
    {
        id: "RD-903",
        name: "RD-903",
        fields: ["体重", "BMI", "体脂肪率", "筋肉量", "内臓脂肪レベル(VF)", "推定骨量(BN)", "基礎代謝量", "体内年齢", "体水分率", "筋質点数(MQ)"]
    },

    {
        id: "RD-931L",
        name: "RD-931L",
        fields: ["体重", "BMI", "体脂肪率", "筋肉量", "内臓脂肪レベル(VF)", "推定骨量(BN)", "基礎代謝量", "体内年齢", "体水分率", "筋質点数(MQ)", "脈拍数", "体型判定"]
    },
    {
        id: "RD-932L",
        name: "RD-932L",
        fields: ["体重", "BMI", "体脂肪率", "筋肉量", "内臓脂肪レベル(VF)", "推定骨量(BN)", "基礎代謝量", "体内年齢", "体水分率", "筋質点数(MQ)", "脈拍数", "体型判定"]
    },

    {
        id: "RD-545",
        name: "RD-545",
        fields: ["体重", "BMI", "体脂肪率", "筋肉量", "内臓脂肪レベル(VF)", "推定骨量(BN)", "基礎代謝量", "体内年齢"]
    },
    {
        id: "RD-546",
        name: "RD-546",
        fields: ["体重", "BMI", "体脂肪率", "筋肉量", "内臓脂肪レベル(VF)", "推定骨量(BN)", "基礎代謝量", "体内年齢"]
    }
];

const elModel = document.getElementById("modelSelect");
const elItems = document.getElementById("itemsArea");
const elBadge = document.getElementById("countBadge");
const elSelectAll = document.getElementById("selectAllBtn");
const elClear = document.getElementById("clearBtn");
const elPreview = document.getElementById("selectedPreview");

let currentFields = [];
let selectedSet = new Set();

function initModelSelect() {
    const frag = document.createDocumentFragment();
    MODELS.forEach(m => {
        const opt = document.createElement("option");
        opt.value = m.id;
        opt.textContent = m.name;
        frag.appendChild(opt);
    });
    elModel.appendChild(frag);
}

function setButtonsEnabled(enabled) {
    elSelectAll.disabled = !enabled;
    elClear.disabled = !enabled;
}

function updateBadge() {
    elBadge.textContent = `${selectedSet.size}/${currentFields.length}`;
}

function renderPreview() {
    if (!currentFields.length) {
        elPreview.className = "preview-empty";
        elPreview.textContent = "まだ機種が選ばれていません。";
        return;
    }
    if (selectedSet.size === 0) {
        elPreview.className = "preview-empty";
        elPreview.textContent = "まだ選ばれていません。";
        return;
    }

    elPreview.className = "preview";
    elPreview.innerHTML = "";
    [...selectedSet].forEach(name => {
        const chip = document.createElement("span");
        chip.className = "previewChip";
        chip.textContent = name;
        elPreview.appendChild(chip);
    });
}

function renderCheckboxes(fields) {
    currentFields = Array.isArray(fields) ? fields : [];
    selectedSet = new Set(); // 機種変更時はリセット（保持したいならここを変更）

    if (!currentFields.length) {
        elItems.className = "empty";
        elItems.textContent = "この機種の項目データが未登録です。";
        setButtonsEnabled(false);
        updateBadge();
        renderPreview();
        return;
    }

    setButtonsEnabled(true);

    elItems.className = "checkboxList";
    elItems.innerHTML = "";

    currentFields.forEach((name, idx) => {
        const label = document.createElement("label");
        label.className = "checkItem";
        label.htmlFor = `field_${idx}`;

        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.id = `field_${idx}`;
        cb.value = name;

        const text = document.createElement("span");
        text.className = "checkLabel";
        text.textContent = name;

        cb.addEventListener("change", () => {
            if (cb.checked) selectedSet.add(name);
            else selectedSet.delete(name);
            updateBadge();
            renderPreview();
        });

        label.appendChild(cb);
        label.appendChild(text);
        elItems.appendChild(label);
    });

    updateBadge();
    renderPreview();
}

elModel.addEventListener("change", () => {
    const selected = MODELS.find(m => m.id === elModel.value);
    renderCheckboxes(selected?.fields ?? []);
});

elSelectAll.addEventListener("click", () => {
    const inputs = elItems.querySelectorAll('input[type="checkbox"]');
    inputs.forEach(i => {
        i.checked = true;
        selectedSet.add(i.value);
    });
    updateBadge();
    renderPreview();
});

elClear.addEventListener("click", () => {
    const inputs = elItems.querySelectorAll('input[type="checkbox"]');
    inputs.forEach(i => (i.checked = false));
    selectedSet.clear();
    updateBadge();
    renderPreview();
});

initModelSelect();
setButtonsEnabled(false);
updateBadge();
renderPreview();
