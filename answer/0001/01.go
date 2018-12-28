package main

import "fmt"

func twoSum(nums []int, target int) []int {
  var m map[int]int
  m = make(map[int]int)
  var result []int

  for i := 0; i < len(nums); i++ {
    var complement int = target - nums[i]

    c, ok := m [complement]
    if (ok) {
      result = append(result, c)
      result = append(result, i)
      break
    }

    m [nums[i]] = i
    }
    
    return result
}

func main() {
  var nums = []int{2, 7, 11, 12}
  var target int = 9

  fmt.Println(twoSum(nums, target))
}
