const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const SSchema = require('./models/schema');
require("dotenv").config();
const app = express();
app.use(cors());
let PORT = 5000;
const overwriteServer = true;

const data = [{
  "sortingTechnique": "Bubble Sort",
  "bestComplexity": "n",
  "worstComplexity": "n^2",
  "averageComplexity": "n^2",
  "spaceComplexity": "1",
  "CCode": `#include <stdio.h>

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++)
        for (int j = 0; j < n - i - 1; j++)
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
}

int main() {
	int arr[] = {5, 1, 7, 11, -2};
	int n = sizeof(arr) / sizeof(arr[0]);
	bubbleSort(arr, n);
	printf("Sorted array: ");
	for (int i = 0; i < n; i++)
		printf("%d ", arr[i]);

	return 0;
}
`,
  "CppCode": `#include <bits/stdc++.h>
using namespace std;
  
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++)
        for (int j = 0; j < n - i - 1; j++)
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
}

  
int main() {
    int arr[] = {5, 1, 7, 11, -2};
    int n = sizeof(arr) / sizeof(arr[0]);
    bubbleSort(arr, n);
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";

    return 0;
}
`,
  "PythonCode": `def bubbleSort(arr):
	for i in range(len(arr) - 1):
		for j in range(len(arr) - 1 - i):
			if arr[j] > arr[j + 1]:
				arr[j], arr[j + 1] = arr[j + 1], arr[j]

arr = [5, 1, 7, 11, -2]
bubbleSort(arr)
print("Sorted array: ", arr)
`,
  "JavaCode": `class BubbleSort {
    void bubbleSort(int arr[]) {
		int n = arr.length;
		for (int i = 0; i < n - 1; i++)
				for (int j = 0; j < n - i - 1; j++)
					if (arr[j] > arr[j + 1]) {
						int temp = arr[j];
						arr[j] = arr[j + 1];
						arr[j + 1] = temp;
					}
    }
  
    public static void main(String args[]) {
		BubbleSort ob = new BubbleSort();
		int arr[] = {5, 1, 7, 11, -2};
		ob.bubbleSort(arr);
		System.out.print("Sorted array: ");
		for (int i = 0; i < arr.length; ++i)
			System.out.print(arr[i] + " ");
    }
} 
`,
}, {
  "sortingTechnique": "Insertion Sort",
  "bestComplexity": "n",
  "worstComplexity": "n^2",
  "averageComplexity": "n^2",
  "spaceComplexity": "1",
  "CCode": `#include <math.h>
#include <stdio.h>
  
void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int temp = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = temp;
    }
}

int main() {
    int arr[] = {5, 1, 7, 11, -2};
    int n = sizeof(arr) / sizeof(arr[0]);
    insertionSort(arr, n);
    printf("Sorted array: ");
	for (int i = 0; i < n; i++)
		printf("%d ", arr[i]);
		
    return 0;
}
`,
  "CppCode": `#include <bits/stdc++.h>
using namespace std;

void insertionSort(int arr[], int n) {
	for (int i = 1; i < n; i++)	{
		int temp = arr[i];
		int j = i - 1;
		while (j >= 0 && arr[j] > temp) {
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = temp;
	}
}

int main() {
	int arr[] = {5, 1, 7, 11, -2};
	int n = sizeof(arr) / sizeof(arr[0]);
	insertionSort(arr, n);
	cout << "Sorted array: ";
	for (int i = 0; i < n; i++)
		cout << arr[i] << " ";

	return 0;
}
`,
  "PythonCode": `def insertionSort(arr):
	for i in range(1, len(arr)):
		temp = arr[i]
		j = i - 1
		while ( j >= 0 and arr[j] > temp):
			arr[j + 1] = arr[j]
			j -= 1
		arr[j+1] = temp

arr = [5, 1, 7, 11, -2]
insertionSort(arr)
print("Sorted array: ", arr)
`,
  "JavaCode": `class InsertionSort {
	void insertionSort(int arr[]) {
		for (int i = 1; i < arr.length; ++i) {
			int temp = arr[i];
			int j = i - 1;
			while (j >= 0 && arr[j] > temp) {
				arr[j + 1] = arr[j];
				j = j - 1;
			}
			arr[j + 1] = temp;
		}
	}

	public static void main(String args[]) {
		int arr[] = {5, 1, 7, 11, -2};
		InsertionSort ob = new InsertionSort();
		ob.insertionSort(arr);
        System.out.print("Sorted array: ");
		for (int i = 0; i < arr.length; ++i)
			System.out.print(arr[i] + " ");
	}
} 
`,
}, {
  "sortingTechnique": "Selection Sort",
  "bestComplexity": "n^2",
  "worstComplexity": "n^2",
  "averageComplexity": "n^2",
  "spaceComplexity": "1",
  "CCode": `#include <stdio.h>

void selectionSort(int arr[], int n) {
	for (int i = 0; i < n - 1; i++)	{
		int min_index = i;
		for (int j = i + 1; j < n; j++) {
			if (arr[j] < arr[min_index])
				min_index = j;
		}

		if(min_index != i) {
			int temp = arr[min_index];
			arr[min_index] = arr[i];
			arr[i] = temp;
		}
	}
}

int main() {
	int arr[] = {5, 1, 7, 11, -2};
	int n = sizeof(arr)/sizeof(arr[0]);
	selectionSort(arr, n);
	printf("Sorted array: ");
	for (int i = 0; i < n; i++)
		printf("%d ", arr[i]);
	
	return 0;
}
`,
  "CppCode": `#include <bits/stdc++.h>
using namespace std;

void selectionSort(int arr[], int n) {
	for (int i = 0; i < n - 1; i++) {
		int min_index = i;
		for (int j = i + 1; j < n; j++) {
			if (arr[j] < arr[min_index])
				min_index = j;
		}

		if(min_index != i) {
			int temp = arr[min_index];
			arr[min_index] = arr[i];
			arr[i] = temp;
		}
	}
}

int main()
{
	int arr[] = {5, 1, 7, 11, -2};
	int n = sizeof(arr) / sizeof(arr[0]);
	selectionSort(arr, n);
	cout << "Sorted array: ";
	for (int i = 0; i < n; i++)
		cout << arr[i] << " ";
		
	return 0;
}
`,
  "PythonCode": `def SelectionSort(arr):
	for i in range(len(arr)):
		pos = i
		for j in range(i+1, len(arr)):
			if arr[j] < arr[pos]:
				pos = j
			arr[i], arr[pos] = arr[pos], arr[i]    

arr = [5, 1, 7, 11, -2]
SelectionSort(arr)
print("Sorted array: ", arr)
`,
  "JavaCode": `class SelectionSort {
	void selectionSort(int arr[]) {	
		for(int i = 0; i < arr.length - 1; i++) {
			int min_index = i;
			for(int j = i + 1; j < arr.length; j++)
				if (arr[j] < arr[min_index])
					min_index = j;

			int temp = arr[min_index];
			arr[min_index] = arr[i];
			arr[i] = temp;
		}
	}

	public static void main(String args[]) {
		SelectionSort ob = new SelectionSort();
		int arr[] = {64,25,12,22,11};
		ob.selectionSort(arr);
		System.out.print("Sorted array: ");
		for (int i = 0; i < arr.length; ++i)
			System.out.print(arr[i] + " ");
	}
}
`,
}, {
  "sortingTechnique": "Quick Sort",
  "bestComplexity": "n*log(n)",
  "worstComplexity": "n^2",
  "averageComplexity": "n*log(n)",
  "spaceComplexity": "n",
  "CCode": `#include <stdio.h>

int partition(int arr[], int low, int high) {
	int p = arr[low];
	int i = low + 1;
	int j = high;
	while(i <= j) {
		while (i <= j && arr[i] < p)
			i += 1;
		while (i <= j && arr[j] > p)
			j -= 1;
		if (i < j){
			int temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}      
	int temp = arr[low];
	arr[low] = arr[j];
	arr[j] = temp;
	return j;
}

void quickSort(int arr[], int low, int high) {
	if (low < high) {
		int middle = partition(arr, low, high);
		quickSort(arr, low, middle - 1);
		quickSort(arr, middle + 1, high);
	}
}

int main() {
	int arr[] = {5, 1, 7, 11, -2};
	int low = 0;
	int high = sizeof(arr)/sizeof(arr[0]) - 1;
	quickSort(arr, low, high);
	printf("Sorted array: ");
	for (int i = 0; i <= high; i++)
		printf("%d ", arr[i]);
	
	return 0;
}
`,
  "CppCode": `#include <bits/stdc++.h>
using namespace std;

int partition(int arr[], int low, int high) {
	int p = arr[low];
	int i = low + 1;
	int j = high;
	while(i <= j) {
		while (i <= j && arr[i] < p)
			i += 1;
		while (i <= j && arr[j] > p)
			j -= 1;
		if (i < j){
			int temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}      
	int temp = arr[low];
	arr[low] = arr[j];
	arr[j] = temp;
	return j;
}

void quickSort(int arr[], int low, int high) {
	if (low < high) {
		int middle = partition(arr, low, high);
		quickSort(arr, low, middle - 1);
		quickSort(arr, middle + 1, high);
	}
}

int main() {
	int arr[] = {5, 1, 7, 11, -2};
	int low = 0;
	int high = sizeof(arr)/sizeof(arr[0]) - 1;
	quickSort(arr, low, high);
	cout << "Sorted array: ";
	for (int i = 0; i <= high; i++)
		cout << arr[i] << " ";
		
	return 0;
}
`,
  "PythonCode": `def quickSort(arr, low, high):
	if (low < high):
		middle = partition(arr, low, high)
		quickSort(arr, low, middle - 1)
		quickSort(arr, middle + 1, high)

def partition(arr, low, high):
	p = arr[low]
	i = low + 1
	j = high
	while i <= j:
		while i <= j and arr[i] < p:
		i += 1
		while i <= j and arr[j] > p:
		j -= 1
		if i < j:
		arr[i], arr[j] = arr[j], arr[i]
	arr[low], arr[j] = arr[j], arr[low]
	return j

arr = [5, 1, 7, 11, -2]
low = 0
high = len(arr) - 1
quickSort(arr, low, high)
print("Sorted array: ", arr)
`,
  "JavaCode": `class QuickSort {
	int partition(int arr[], int low, int high) {
        int p = arr[low];
        int i = low + 1;
        int j = high;
        while(i <= j) {
            while (i <= j && arr[i] < p)
                i += 1;
            while (i <= j && arr[j] > p)
                j -= 1;
            if (i < j){
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }      
        int temp = arr[low];
        arr[low] = arr[j];
        arr[j] = temp;
        return j;
    }
    
    void quickSort(int arr[], int low, int high) {
        if (low < high) {
            int middle = partition(arr, low, high);
            quickSort(arr, low, middle - 1);
            quickSort(arr, middle + 1, high);
        }
    }

	public static void main(String args[]) {
		QuickSort ob = new QuickSort();
		int arr[] = {5, 1, 7, 11, -2};
		int low = 0;
		int high = arr.length - 1;
		ob.quickSort(arr, low, high);
		System.out.print("Sorted array: ");
		for (int i = 0; i < arr.length; ++i)
			System.out.print(arr[i] + " ");
	}
}
`,
}, {
  "sortingTechnique": "Merge Sort",
  "bestComplexity": "n*log(n)",
  "worstComplexity": "n*log(n)",
  "averageComplexity": "n*log(n)",
  "spaceComplexity": "n",
  "CCode": `#include <stdio.h>
#include <math.h>

void merge(int arr[], int low, int middle, int high) {
	int i = low;
	int j = middle + 1;
	int k = 0;
	int b[high - low + 1];
	while (i <= middle && j <= high) {
		if (arr[i] < arr[j]) {
			b[k] = arr[i];
			i += 1;
		}
		else {
			b[k] = arr[j];
			j += 1;
		}
		k += 1;
	}
	while (i <= middle) {
		b[k] = arr[i];
		k += 1;
		i += 1;
	}
	while (j <= high) {
		b[k] = arr[j];
		k += 1;
		j += 1;
	}
	for (int i = 0; i < high - low + 1; i++)
		arr[low + i] = b[i];
}

void mergeSort(int arr[], int low, int high) {
	if (low < high) {
		int middle = low + floor((high - low) / 2);
		mergeSort(arr, low, middle);
		mergeSort(arr, middle + 1, high);
		merge(arr, low, middle, high);
	}
}

int main() {
	int arr[] = {5, 1, 7, 11, -2};
	int low = 0;
	int high = sizeof(arr) / sizeof(arr[0]) - 1;
	mergeSort(arr, low, high);
	printf("Sorted array: ");
	for (int i = 0; i <= high; i++)
		printf("%d ", arr[i]);

	return 0;
}
`,
  "CppCode": `#include <bits/stdc++.h>
#include <math.h>
using namespace std;

void merge(int arr[], int low, int middle, int high) {
	int i = low;
	int j = middle + 1;
	int k = 0;
	int b[high - low + 1];
	while (i <= middle && j <= high) {
		if (arr[i] < arr[j]) {
			b[k] = arr[i];
			i += 1;
		}
		else {
			b[k] = arr[j];
			j += 1;
		}
		k += 1;
	}
	while (i <= middle) {
		b[k] = arr[i];
		k += 1;
		i += 1;
	}
	while (j <= high) {
		b[k] = arr[j];
		k += 1;
		j += 1;
	}
	for (int i = 0; i < high - low + 1; i++)
		arr[low + i] = b[i];
}

void mergeSort(int arr[], int low, int high) {
	if (low < high) {
		int middle = low + floor((high - low) / 2);
		mergeSort(arr, low, middle);
		mergeSort(arr, middle + 1, high);
		merge(arr, low, middle, high);
	}
}

int main() {
	int arr[] = {5, 1, 7, 11, -2};
	int low = 0;
	int high = sizeof(arr)/sizeof(arr[0]) - 1;
	mergeSort(arr, low, high);
	cout << "Sorted array: ";
	for (int i = 0; i <= high; i++)
		cout << arr[i] << " ";
		
	return 0;
}
`,
  "PythonCode": `def merge(arr, low, middle, high):
	i = low
	j = middle + 1
	k = 0
	b = [None] * (high - low + 1)
	while(i <= middle and j <= high):
		if(arr[i] < arr[j]):
		b[k] = arr[i]
		i += 1
		else:
		b[k] = arr[j]
		j += 1
		k += 1
	while(i <= middle):
		b[k] = arr[i]
		k += 1
		i += 1
	while(j <= high):
		b[k] = arr[j]
		k += 1
		j += 1
	for i in range(len(b)):
		arr[low + i] = b[i]

def mergeSort(arr, low, high):
	if(low < high):
		middle = low + (high - low) // 2
		mergeSort(arr, low, middle)
		mergeSort(arr, middle + 1, high)
		merge(arr, low, middle, high)

arr = [5, 1, 7, 11, -2]
mergeSort(arr, 0, len(arr) - 1)
print("Sorted array: ", arr)
`,
  "JavaCode": `class MergeSort {
	void merge(int arr[], int low, int middle, int high) {
        int i = low;
        int j = middle + 1;
        int k = 0;
        int b[];
        b = new int[high - low + 1];
        while (i <= middle && j <= high) {
            if (arr[i] < arr[j]) {
                b[k] = arr[i];
                i += 1;
            }
            else {
                b[k] = arr[j];
                j += 1;
            }
            k += 1;
        }
        while (i <= middle) {
            b[k] = arr[i];
            k += 1;
            i += 1;
        }
        while (j <= high) {
            b[k] = arr[j];
            k += 1;
            j += 1;
        }
        for (i = 0; i < high - low + 1; i++)
            arr[low + i] = b[i];
    }
    
    void mergeSort(int arr[], int low, int high) {
        if (low < high) {
            int middle = low + (int)Math.floor((high - low) / 2);
            mergeSort(arr, low, middle);
            mergeSort(arr, middle + 1, high);
            merge(arr, low, middle, high);
        }
    }

	public static void main(String args[]) {
		MergeSort ob = new MergeSort();
		int arr[] = {5, 1, 7, 11, -2};
		int low = 0;
		int high = arr.length - 1;
		ob.mergeSort(arr, low, high);
		System.out.print("Sorted array: ");
		for (int i = 0; i < arr.length; ++i)
			System.out.print(arr[i] + " ");
	}
}
`,
}, {
  "sortingTechnique": "Heap Sort",
  "bestComplexity": "n*log(n)",
  "worstComplexity": "n*log(n)",
  "averageComplexity": "n*log(n)",
  "spaceComplexity": "1",
  "CCode": `#include <stdio.h>
	#include <math.h>
	
	void heapify(int arr[], int n, int i) {
		int largest = i;
		int low = 2 * i + 1;
		int high = 2 * i + 2;
		if(low < n && arr[largest] < arr[low])
			largest = low;
		if(high < n && arr[largest] < arr[high])
			largest = high;
	
		if(largest != i) {
			int temp = arr[i];
			arr[i] = arr[largest];
			arr[largest] = temp;
			heapify(arr, n, largest);
		}
	}
	
	void heapSort(int arr[], int n) {
		for(int i = floor(n/2) - 1; i > -1; i--)
			heapify(arr, n, i);
		for(int i = n - 1; i > 0; i--) {
			int temp = arr[i];
			arr[i] = arr[0];
			arr[0] = temp;
			heapify(arr, i, 0);
		}
	}
	
	int main() {
		int arr[] = {5, 1, 7, 11, -2};
		int n = sizeof(arr) / sizeof(arr[0]);
		heapSort(arr, n);
		printf("Sorted array: ");
		for (int i = 0; i < n; i++)
			printf("%d ", arr[i]);
	
		return 0;
	}
	`,
  "CppCode": `#include <bits/stdc++.h>
#include <math.h>
using namespace std;

void heapify(int arr[], int n, int i) {
	int largest = i;
	int low = 2 * i + 1;
	int high = 2 * i + 2;
	if(low < n && arr[largest] < arr[low])
		largest = low;
	if(high < n && arr[largest] < arr[high])
		largest = high;

	if(largest != i) {
		int temp = arr[i];
		arr[i] = arr[largest];
		arr[largest] = temp;
		heapify(arr, n, largest);
	}
}

void heapSort(int arr[], int n) {
	for(int i = floor(n/2) - 1; i > -1; i--)
		heapify(arr, n, i);
	for(int i = n - 1; i > 0; i--) {
		int temp = arr[i];
		arr[i] = arr[0];
		arr[0] = temp;
		heapify(arr, i, 0);
	}
}

int main() {
	int arr[] = {5, 1, 7, 11, -2};
	int n = sizeof(arr)/sizeof(arr[0]);
	heapSort(arr, n);
	cout << "Sorted array: ";
	for (int i = 0; i < n; i++)
		cout << arr[i] << " ";
		
	return 0;
}
`,
  "PythonCode": `def heapify(arr, n, i):
	largest = i
	low = 2 * i + 1
	high = 2 * i + 2
	if low < n and arr[largest] < arr[low]:
		largest = low
	if high < n and arr[largest] < arr[high]:
		largest = high

	if largest != i:
		arr[i], arr[largest] = arr[largest], arr[i]
		heapify(arr, n, largest)

def heapSort(arr):
	n = len(arr)
	for i in range(n//2 - 1, -1, -1):
		heapify(arr, n, i)
	for i in range(n-1, 0, -1):
		arr[i], arr[0] = arr[0], arr[i]
		heapify(arr, i, 0)

arr = [5, 1, 7, 11, -2]
heapSort(arr)
print("Sorted array: ", arr)
`,
  "JavaCode": `class HeapSort {
    void heapify(int arr[], int n, int i) {
        int largest = i;
    	int low = 2 * i + 1;
    	int high = 2 * i + 2;
    	if(low < n && arr[largest] < arr[low])
    		largest = low;
    	if(high < n && arr[largest] < arr[high])
    		largest = high;
    
    	if(largest != i) {
    		int temp = arr[i];
    		arr[i] = arr[largest];
    		arr[largest] = temp;
    		heapify(arr, n, largest);
    	}
    }
    
    void heapSort(int arr[], int n) {
        for(int i = (int)Math.floor(n/2) - 1; i > -1; i--)
            heapify(arr, n, i);
        for(int i = n - 1; i > 0; i--) {
            int temp = arr[i];
            arr[i] = arr[0];
            arr[0] = temp;
            heapify(arr, i, 0);
        }
    }

	public static void main(String args[]) {
		HeapSort ob = new HeapSort();
		int arr[] = {5, 1, 7, 11, -2};
		ob.heapSort(arr, arr.length);
		System.out.print("Sorted array: ");
		for (int i = 0; i < arr.length; ++i)
			System.out.print(arr[i] + " ");
	}
}`,
}];


mongoose.connect(process.env.MONGOOSEURL, async () => {
  console.log("mongodb connected");

  if (overwriteServer) {
    await SSchema.deleteMany();
    await SSchema.insertMany(data);
  }
});

app.get('/', async (req, res) => {
  if (req.query && req.query.sortingTechnique) {
    let sortingData = await SSchema.findOne({ sortingTechnique: req.query.sortingTechnique });

    if (sortingData === null) {
      res.json({ message: "No sorting technique found." });
    } else {
      res.json(sortingData);
    }
  } else {
    res.json({ message: "Send sorting technique." });
  }
});

app.listen(PORT)
