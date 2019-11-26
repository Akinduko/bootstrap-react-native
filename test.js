// class Node {
//   constructor(props) {
//     this.data = props;
//     this.next = null;
//   }
// }

// class LinkedList extends Node {
//   constructor(props) {
//     super(props);
//     this.head = null;
//   }

//   push(new_data) {
//     const new_node = new Node(new_data);
//     new_node.next = this.head;
//     this.head = new_node;
//   }

//   getCount() {
//     let temp = this.head;
//     let count = 0;

//     while (temp) {
//       count += 1;
//       temp = temp.next;
//     }

//     return count;
//   }
// }

// list = new LinkedList();
// list.push(1);
// list.push(3);
// list.push(1);
// list.push(2);
// console.log(list.getCount());

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const solution = (A, B) => {
  if (A.length < 2) {
    return 0;
  }

  let result = 0;
  let currentIndex = 0;
  let maxIndex = A.length - 1;

  const OneMillion = 1000000;
  const OneBillion = 1000000000;

  // Counting zeros
  while (currentIndex < A.length && A[currentIndex] === 0 && B[currentIndex] === 0) {
    currentIndex += 1;
  }

  // Adding number of pairs of zeros
  if (currentIndex > 1) {
    const n = currentIndex - 1;
    const numberOfPairsOfZeros = ((n + 1) * n) / 2 + ((n % 2) * (n + 1)) / 2;

    result += numberOfPairsOfZeros > OneBillion ? OneBillion : numberOfPairsOfZeros;

    if (result >= OneBillion) {
      return OneBillion;
    }
  }

  if (currentIndex === A.length) {
    return result;
  }
  while (
    currentIndex < A.length &&
    (A[currentIndex] === 0 || (A[currentIndex] === 1 && B[currentIndex] < 1001))
  ) {
    currentIndex += 1;
  }

  if (currentIndex === A.length) {
    return result;
  }

  for (let i = currentIndex; i < A.length - 1; i += 1) {
    if (A[i] === 1) {
      // Search numbers greater than or equals to A.B / (A.B - 1)
      // A.B / (A.B - 1) = 1.B / (1.B - 1) = 1.B / 0.B = 1 / 0.B + 1
      const scaledOnePerBFractionalPart = (OneMillion / B[i]) * OneMillion;
      const scaledMinValue =
        scaledOnePerBFractionalPart +
        OneMillion +
        (Math.ceil(scaledOnePerBFractionalPart) === scaledOnePerBFractionalPart ? 0 : 1);

      while (maxIndex > i && OneMillion * A[maxIndex] + B[maxIndex] >= scaledMinValue) {
        maxIndex -= 1;
      }

      result += A.length - 1 - maxIndex;
    } else {
      // In this case the number is greater than or equal to 2.
      // So we just add the remaining indexes as number of pairs.
      result += A.length - 1 - i;
    }

    if (result >= OneBillion) {
      return OneBillion;
    }
  }

  return result >= OneBillion ? OneBillion : result;
};

console.log(solution([0, 1, 2, 2, 3, 5], [500000, 500000, 0, 0, 0, 2000]));
