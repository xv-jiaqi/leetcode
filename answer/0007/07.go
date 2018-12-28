package main

import "fmt"

func reverse(x int) int {
	newX := 0
	n := 1 << 31
	MIN := -1 * n
	MAX := n - 1
	p := 1

	if (x < 0) {
		p = -1
		x = -x
	}
	
	for x > 0 {
		remainder := x % 10
		newX *= 10
		newX += remainder
		x /= 10
	}

	if (newX < MIN || newX > MAX) {
		return 0
	}
	
	return newX * p
}

func main() {
	fmt.Println(reverse(-123))
}
