let height = [];

function createHeight() {
    height = [];
    for (let i = 0; i < 100; i++) {
        height.push(Math.random() * 350 + 50);
    }
}

async function sort(height, sortingTechnique) {
    if (sortingTechnique === 'Bubble Sort') {
        for (var i = 0; i < height.length; i++) {
            for (var j = 0; j < (height.length - i - 1); j++) {
                if (height[j] > height[j + 1]) {
                    var temp = height[j]
                    height[j] = height[j + 1]
                    height[j + 1] = temp
                }
            }
            await sleep(200);
            addElement();
        }
    }
    else if (sortingTechnique === 'Insertion Sort') {
        for (var i = 1; i < height.length; i++) {
            var key = height[i];
            var j = i - 1;
            while (j >= 0 && height[j] > key) {
                height[j + 1] = height[j];
                j = j - 1;
            }
            height[j + 1] = key;
            await sleep(200);
            addElement();
        }
    }
    else if (sortingTechnique === 'Selection Sort') {
        for (var i = 0; i < height.length - 1; i++) {
            var min_idx = i;
            for (var j = i + 1; j < height.length; j++)
                if (height[j] < height[min_idx])
                    min_idx = j;

            var temp = height[min_idx];
            height[min_idx] = height[i];
            height[i] = temp;
            await sleep(200);
            addElement();
        }
    }
    else if (sortingTechnique === 'Quick Sort') {
        quickSort(0, height.length - 1)
    }
    else if (sortingTechnique === 'Merge Sort') {
        mergeSort(0, height.length - 1)
    }
    else if (sortingTechnique === 'Heap Sort') {
        height[height.length - 1] = 400;
        array_length = height.length;
        for (var i = Math.ceil(array_length / 2); i >= 0; i -= 1) {
            heap_root(i);
        }
        for (i = height.length - 1; i >= 0; i--) {
            var temp = height[i];
            height[i] = height[0];
            height[0] = temp;
            array_length--;

            heap_root(0);
            height[height.length - 1] = 400;
            await sleep(200);
            addElement();
        }
    }
}

async function quickSort(low, high) {
    if (low < high) {
        let pi = partition(low, high);
        await sleep(200);
        addElement();
        quickSort(low, pi - 1);
        await sleep(200);
        addElement();
        quickSort(pi + 1, high);
        await sleep(200);
        addElement();
    }
}

function partition(low, high) {
    let pivot = height[high];
    let i = (low - 1);
    for (let j = low; j <= high - 1; j++) {
        if (height[j] < pivot) {
            i++;
            var temp = height[j];
            height[j] = height[i];
            height[i] = temp;
        }
    }
    var temp = height[high];
    height[high] = height[i + 1];
    height[i + 1] = temp;
    return (i + 1);
}

async function mergeSort(low, high) {
    if (low >= high) {
        return;
    }
    var middle = low + parseInt((high - low) / 2);
    mergeSort(low, middle);
    mergeSort(middle + 1, high);
    await sleep(2000);
    addElement();
    merge(low, middle, high);
    await sleep(2000);
}

async function merge(l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;
    var L = new Array(n1);
    var R = new Array(n2);
    await sleep(1000);
    addElement();

    for (var i = 0; i < n1; i++)
        L[i] = height[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = height[m + 1 + j];
    var i = 0;
    var j = 0;
    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            height[k] = L[i];
            i++;
        }
        else {
            height[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        height[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        height[k] = R[j];
        j++;
        k++;
    }
    await sleep(2000);
    addElement();
}

async function heap_root(i) {
    await sleep(200);
    addElement();
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && height[left] > height[max]) {
        max = left;
    }

    if (right < array_length && height[right] > height[max]) {
        max = right;
    }

    if (max != i) {
        var temp = height[i];
        height[i] = height[max];
        height[max] = temp;
        heap_root(max);
    }
}

function addElement() {
    let container = document.getElementById("container");
    container.innerHTML = "";
    height.forEach((element, i) => {
        if (i < 200) {
            let e = document.createElement("div");
            e.classList.add("no");
            e.style.height = parseInt(height[i]) + "px";
            container.appendChild(e);
        }
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const selectedSort = document.getElementById('selectedSort');
const best = document.getElementById('best');
const worst = document.getElementById('worst');
const average = document.getElementById('average');
const space = document.getElementById('space');

const python = document.getElementById('PythonCode');
const c = document.getElementById('CCode');
const cpp = document.getElementById('CppCode');
const java = document.getElementById('JavaCode');
var editor;
var sortingTechnique;

function changedSortingTechnique(x) {
    fetch("http://localhost:5000?" + new URLSearchParams({
        sortingTechnique: x
    }), {
        method: "get",
    }).then((res) => res.json())
        .then((res) => {
            sortingTechnique = x;
            selectedSort.innerHTML = res.sortingTechnique;
            best.innerHTML = `Best Complexity: ${res.bestComplexity}`;
            worst.innerHTML = `Worst Complexity: ${res.worstComplexity}`;
            average.innerHTML = `Average Complexity: ${res.averageComplexity}`;
            space.innerHTML = `Space Complexity: ${res.spaceComplexity}`;

            async function animate() {
                container.innerHTML = "";
                createHeight();
                addElement();
                sort(height, x);
                await sleep(2000);
                addElement();
            }
            requestAnimationFrame(animate);

            editor.getModel().setValue(res.PythonCode);
            monaco.editor.setModelLanguage(editor.getModel(), 'python');
            python.classList.add('active')
            python.classList.add('first-button-active')
            c.classList.remove('active');
            cpp.classList.remove('active');
            java.classList.remove('active');
        });
}

function ChangeProgrammingLanguage(x) {
    fetch("http://localhost:5000?" + new URLSearchParams({
        sortingTechnique: sortingTechnique
    }), {
        method: "get",
    }).then((res) => res.json())
        .then((res) => {
            if (x === "PythonCode") {
                editor.getModel().setValue(res.PythonCode);
                monaco.editor.setModelLanguage(editor.getModel(), 'python');

                python.classList.add('active')
                python.classList.add('first-button-active')
                c.classList.remove('active');
                cpp.classList.remove('active');
                java.classList.remove('active');
            }
            else if (x === "CCode") {
                editor.getModel().setValue(res.CCode);
                monaco.editor.setModelLanguage(editor.getModel(), 'c');

                c.classList.add('active')
                python.classList.remove('active')
                python.classList.remove('first-button-active');
                cpp.classList.remove('active');
                java.classList.remove('active');
            }
            else if (x === "CppCode") {
                editor.getModel().setValue(res.CppCode);
                monaco.editor.setModelLanguage(editor.getModel(), 'cpp');

                cpp.classList.add('active')
                python.classList.remove('active')
                python.classList.remove('first-button-active');
                c.classList.remove('active');
                java.classList.remove('active');
            }
            else if (x === "JavaCode") {
                editor.getModel().setValue(res.JavaCode);
                monaco.editor.setModelLanguage(editor.getModel(), 'java');

                java.classList.add('active')
                python.classList.remove('active')
                python.classList.remove('first-button-active');
                c.classList.remove('active');
                cpp.classList.remove('active');
            }
        });
}

window.onload = () => {
    changedSortingTechnique('Bubble Sort');
    createHeight();
    addElement();

    async function animate() {
        container.innerHTML = "";
        createHeight();
        addElement();
        sort(height, 'Bubble Sort');
        await sleep(2000);
        addElement();
    }
    requestAnimationFrame(animate);
}

require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs' } });
require(["vs/editor/editor.main"], () => {
    editor = monaco.editor.create(document.getElementById('codeLang'), {
        value: `def hello():
    print("Hello World!")`,
        language: 'python',
        theme: 'vs-dark',
        readOnly: true
    });
});
