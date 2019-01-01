package main

import "fmt"

func repeatedNTimes(A []int) int {
	lenA := len(A)
	isEven := lenA % 2 == 0
	
	var countMap map[int]int
	countMap = make(map[int]int)
	
	if(lenA >= 4 && lenA <= 10000 && isEven) {
		targetRepeatCount := lenA / 2
		
		for _, a := range A {
			_, exist := countMap[a]
			if (exist) {
				countMap[a] += 1
			} else {
				countMap[a] = 1
			}

			if (countMap[a] == targetRepeatCount) {
				return a
			}
		}
	}

	return 0
}

func main() {
	fmt.Println(repeatedNTimes([]int{1, 2, 3, 3}))
}